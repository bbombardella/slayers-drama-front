import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieEntity} from "../../api/models/movie-entity";
import {MovieService} from "../../api/services/movie.service";

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

  get fetchMethod() {
    return this.movieService.movieControllerFindAll.bind(this.movieService);
  }

  constructor(private readonly movieService: MovieService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  handleClick(movie: MovieEntity): void {
    this.router.navigate([movie.id], {relativeTo: this.activatedRoute});
  }
}
