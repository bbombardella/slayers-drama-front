import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ScreeningEntity} from "../../api/models/screening-entity";
import {ScreeningService} from "../../api/services/screening.service";
import {ConfirmDialogComponent, ConfirmDialogConfig} from "../../shared/ui/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, Subject, switchMap, take} from "rxjs";
import {ScreeningEditorModalComponent} from "../modal/screening-editor-modal/screening-editor-modal.component";

@Component({
  selector: 'app-admin-screenings',
  templateUrl: './admin-screenings.component.html',
  styleUrls: ['./admin-screenings.component.scss']
})
export class AdminScreeningsComponent {

  readonly refresh: Subject<void> = new Subject<void>();

  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Cinema',
      field: 'cinema.name'
    },
    {
      name: 'Film',
      field: 'movie.title'
    },
    {
      name: 'Nombre de place',
      field: 'initialAvailableSeats'
    },
    {
      name: 'Début',
      field: 'start',
      pipe: new DatePipe(
        this.locale,
        undefined,
        {
          dateFormat: 'shortTime',
          timezone: ''
        }
      )
    },
    {
      name: 'Fin',
      field: 'end',
      pipe: new DatePipe(
        this.locale,
        undefined,
        {
          dateFormat: 'shortTime',
          timezone: ''
        }
      )
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ]

  get fetchMethod() {
    return this.screeningService.screeningControllerFindAll.bind(this.screeningService);
  }

  constructor(private readonly screeningService: ScreeningService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly matDialog: MatDialog,
  ) {
  }

  handleClick(screening: ScreeningEntity): void {
    const l = this.matDialog.open(ScreeningEditorModalComponent, {data: screening});
    l.afterClosed().subscribe(_ => this.refresh.next());
  }

  handleDelete(screening: ScreeningEntity): void {
    const dialogRef = this.matDialog.open<ConfirmDialogComponent, ConfirmDialogConfig>(ConfirmDialogComponent, {
      data: {
        title: 'Dé-activer cette séance',
        content: `Voulez-vous dé-activer la séance ${screening.movie.title} ?`,
        confirmLabel: 'Dé-activer'
      }
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(v => v === true),
        switchMap(_ => this.screeningService.screeningControllerRemove({id: screening.id}))
      )
      .subscribe(v => {
        if (v) {
          this.refresh.next();
        }
      });
  }
}
