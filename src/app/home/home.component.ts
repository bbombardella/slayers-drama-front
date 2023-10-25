import {Component, OnInit} from '@angular/core';
import {MovieEntity} from "../api/models/movie-entity";
import {MovieService} from "../api/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.movieService.movieControllerGetMostPopular(
      {count: 8}
    ).subscribe((pr: MovieEntity[]) => {
      this.movies = pr;
    });
  }

  public movies: Array<MovieEntity> = new Array<MovieEntity>(8);

  async navigateToMovies() {
    await this.router.navigate(['/movies'])
  }
}
