import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../api/services/movie.service";
import {take} from "rxjs";
import {MovieEntity} from "../api/models/movie-entity";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie: MovieEntity | undefined;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        take(1)
      ).subscribe((params: any) => {
      this.movieService.movieControllerFindOne(params.movie).subscribe((r) => this.movie = r)
    });
  }


}
