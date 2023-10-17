import { Component, OnInit } from '@angular/core';
import {MovieEntity} from "../api/models/movie-entity";
import {MovieService} from "../api/services";
import {PaginatedResult} from "../api/models/paginated-result";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.movieService.movieControllerFindAll().subscribe((pr: PaginatedResult) => {
      this.movies = pr.data as MovieEntity[];
    });
  }

  public movies: Array<MovieEntity> = [ ];


}
