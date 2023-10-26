import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {GenreService} from "../../api/services/genre.service";
import {GenreEntity} from "../../api/models/genre-entity";

@Component({
  selector: 'app-admin-genres',
  templateUrl: './admin-genres.component.html',
  styleUrls: ['./admin-genres.component.scss']
})
export class AdminGenresComponent {

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
    return this.genreService.genreControllerFindAll.bind(this.genreService);
  }

  constructor(private readonly genreService: GenreService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  handleClick(genre: GenreEntity): void {
    this.router.navigate([genre.id], {relativeTo: this.activatedRoute});
  }
}
