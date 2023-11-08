import {Component, OnInit} from '@angular/core';
import {MovieEntity} from "../api/models/movie-entity";
import {MovieService} from "../api/services";
import {Router} from "@angular/router";
import {PaginatedResult} from "../api/models/paginated-result";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public plannedOnly: boolean = true;

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.fillMovies();
  }

  public movies: Array<MovieEntity> = new Array<MovieEntity>(8);

  async navigateToMovies() {
    await this.router.navigate(['/movies'])
  }

  togglePlannedOnly(): void {
    this.fillMovies();
  }

  private fillMovies(): void {
    if (this.plannedOnly) {
      this.movieService.movieControllerGetMostPopularPlanned({count: 8}).subscribe((r: MovieEntity[]) => {
        this.movies = r;
      });
    } else {
      this.movieService.movieControllerGetMostPopular({count: 8}).subscribe((r: MovieEntity[]) => {
        this.movies = r;
      });
    }
  }
}
