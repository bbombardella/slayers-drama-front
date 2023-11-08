import {Component, Inject, LOCALE_ID} from '@angular/core';
import {CinemaService} from "../../api/services/cinema.service";
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {CinemaEntity} from "../../api/models/cinema-entity";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent, ConfirmDialogConfig} from "../../shared/ui/confirm-dialog/confirm-dialog.component";
import {filter, Subject, switchMap, take} from "rxjs";

@Component({
  selector: 'app-admin-cinema',
  templateUrl: './admin-cinema.component.html',
  styleUrls: ['./admin-cinema.component.scss']
})
export class AdminCinemaComponent {

  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Nom',
      field: 'name'
    },
    {
      name: 'Ville',
      field: 'city'
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ]
  readonly refreshData: Subject<void> = new Subject<void>();

  get fetchMethod() {
    return this.cinemaService.cinemaControllerFindAll.bind(this.cinemaService);
  }

  constructor(private readonly cinemaService: CinemaService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly matDialog: MatDialog) {
  }

  handleEdit(cinema: CinemaEntity): void {
    this.router.navigate([cinema.id], {relativeTo: this.activatedRoute});
  }

  handleDelete(cinema: CinemaEntity): void {
    const dialogRef = this.matDialog.open<ConfirmDialogComponent, ConfirmDialogConfig>(ConfirmDialogComponent, {
      data: {
        title: 'Désactiver un cinéma',
        content: `Voulez-vous désactiver le cinéma ${cinema.name} ?`,
        confirmLabel: 'Désactiver'
      }
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter(v => v === true),
        switchMap(_ => this.cinemaService.cinemaControllerRemove({id: cinema.id}))
      )
      .subscribe(v => {
        if (v) {
          this.refreshData.next();
        }
      })
  }
}
