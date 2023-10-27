import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieEntity} from "../../api/models/movie-entity";
import {MovieService} from "../../api/services/movie.service";
import {filter, Subject, switchMap, take} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent, ConfirmDialogConfig} from "../../shared/ui/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss']
})
export class AdminMoviesComponent {
  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Titre',
      field: 'title'
    },
    {
      name: 'TMDB ID',
      field: 'tmdbId'
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ];
  readonly refresh: Subject<void> = new Subject<void>();

  get fetchMethod() {
    return this.movieService.movieControllerFindAll.bind(this.movieService);
  }

  constructor(private readonly movieService: MovieService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly matDialog: MatDialog) {
  }

  handleClick(movie: MovieEntity): void {
    this.router.navigate([movie.id], {relativeTo: this.activatedRoute});
  }

  handleDelete(movie: MovieEntity): void {
    const dialogRef = this.matDialog.open<ConfirmDialogComponent, ConfirmDialogConfig>(ConfirmDialogComponent, {
      data: {
        title: 'Dé-publier un film',
        content: `Voulez-vous dé-publier le film ${movie.title} ?`,
        confirmLabel: 'Dé-publier'
      }
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(v => v === true),
        switchMap(_ => this.movieService.movieControllerDelete({id: movie.id}))
      )
      .subscribe(v => {
        if (v) {
          this.refresh.next();
        }
      });
  }
}
