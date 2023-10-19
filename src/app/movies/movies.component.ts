import {Component, OnInit} from '@angular/core';
import {MovieEntity} from "../api/models/movie-entity";
import {MovieService} from "../api/services/movie.service";
import {PaginatedResult} from "../api/models/paginated-result";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: Array<MovieEntity> = new Array<MovieEntity>();
  public i = 1;
  constructor(
    private readonly movieService: MovieService,
  ) {
  }

  loadMore(event: any) {
    this.fillMovies();
  }

  ngOnInit(): void {
    this.fillMovies();
  }

  private fillMovies(): void {
    this.movieService.movieControllerFindAll({page: this.i++, perPage: 8}).subscribe((pr: PaginatedResult) => {
      this.movies.push(...(pr.data as Array<MovieEntity>));
    });
  }


}
