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
      budget: 600000,
      id: 1,
      overview: 'ov',
      popularity: 5,
      poster_path: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
      release_date: '2020-12-12',
      tagline: 'tag',
      title: 'STAR WARS',
      tmdb_id: -1,
      vote_average: 4.5,
    }
  ];


}
