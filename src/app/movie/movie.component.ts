import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../api/services/movie.service";
import {MovieEntity} from "../api/models/movie-entity";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  public movie: MovieEntity | undefined;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {
  }

  @Input()
  set id(movieId: string) {
    this.movieService.movieControllerFindOne({id: +movieId}).subscribe((r) => this.movie = r)
  }
}
