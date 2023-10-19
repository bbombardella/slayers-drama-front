import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieEntity} from "../../../api/models/movie-entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieCardComponent {

  constructor(
    private readonly router: Router
  ) {
  }

  @Input()
  public movie: MovieEntity | undefined;

  @Input()
  public sizePercentage: number = 10;

  async goToMoviePage() {
    await this.router.navigate(['/movie'], {
      queryParams: {movie: this.movie?.id},
    });
  }
}
