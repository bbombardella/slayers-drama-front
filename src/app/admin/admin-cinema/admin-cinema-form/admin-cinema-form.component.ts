import {Component, DestroyRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormModeEnum, FormModelLabel} from "../../../shared/models/form-mode.enum";
import {CinemaEntity} from "../../../api/models/cinema-entity";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CinemaService} from "../../../api/services/cinema.service";
import {Subject, take, takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-cinema-form',
  templateUrl: './admin-cinema-form.component.html',
  styleUrls: ['./admin-cinema-form.component.scss']
})
export class AdminCinemaFormComponent {

  cinema?: CinemaEntity;

  cinemaForm?: FormGroup;

  performingAction: boolean = false;

  private readonly _cancellationToken: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly cinemaService: CinemaService,
              private readonly destroyRef: DestroyRef,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar) {
  }

  get mode(): FormModeEnum | undefined {
    return this.activatedRoute.snapshot.data['mode'];
  }

  @Input()
  set id(cinemaId: string) {
    if (this.activatedRoute.snapshot.data['mode'] === FormModeEnum.EDITION) {
      if (isNaN(+cinemaId)) {
        this.handleError();
        return;
      }

      this.cinemaService
        .cinemaControllerFindOne({id: +cinemaId})
        .pipe(
          take(1),
          takeUntil(this._cancellationToken),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe({
          next: v => {
            this.cinema = v;
            this.initForm();
          },
          error: _ => this.handleError()
        })
    } else {
      this.initForm();
    }
  }

  get actionLabel(): string | undefined {
    return FormModelLabel[this.mode as FormModeEnum];
  }

  private handleError(): void {
    this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }

  private initForm(): void {
    this.cinemaForm = new FormGroup({
      name: new FormControl(this.cinema?.name, [Validators.required, Validators.minLength(3)]),
      city: new FormControl(this.cinema?.city, [Validators.required, Validators.minLength(3)]),
    });
  }

  action(): void {
    if (!this.cinemaForm || this.cinemaForm?.invalid || this.performingAction) {
      return;
    }

    this.performingAction = true;

    switch (this.mode) {
      case FormModeEnum.EDITION: {
        this.cinemaService
          .cinemaControllerUpdate({
            id: this.cinema!.id,
            body: this.cinemaForm.value
          })
          .subscribe({
            next: v => {
              this.cinema = v;
              this.initForm();
              this.snackBar.open('Modification effectuée !', 'OK', {duration: 5 * 1000})
            },
            complete: () => this.performingAction = false
          })
        break;
      }
      case FormModeEnum.CREATION: {
        this.cinemaService
          .cinemaControllerCreate({
            body: this.cinemaForm.value
          })
          .subscribe({
            next: v => this.router.navigate(['..'], {relativeTo: this.activatedRoute}),
            complete: () => this.performingAction = false
          })
        break;
      }
    }
  }
}
