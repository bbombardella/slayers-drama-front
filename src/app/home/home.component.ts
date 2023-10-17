import { Component, OnInit } from '@angular/core';
import {MovieDto} from "../api/models/movie-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.movies = this.movies
      .concat(this.movies)
      .concat(this.movies)
      .concat(this.movies)
      .concat(this.movies)
      .concat(this.movies)
      .concat(this.movies)
      .concat(this.movies);
  }

  public movies: MovieDto[] = [
    {
      id: 1,
      title: 'Patte patrouille',
      release_date: new Date(2021, 6, 11),
      overview: 'overview',
      popularity: 5,
      vote_average: 4.5,
      budget: 60000000,
      poster_path: 'https://upload.wikimedia.org/wikipedia/fr/7/70/PAW_Patrol_-_La_Pat%27Patrouille.png',
      tagline: 'xxx',
      published: true,
      tmdb_id: -1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];


}
