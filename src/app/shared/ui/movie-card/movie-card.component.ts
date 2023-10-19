import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieEntity} from "../../../api/models/movie-entity";
import {Router} from "@angular/router";
import {LoadingBarComponent} from "../loading-bar/loading-bar.component";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingBarComponent],
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

  @ViewChild('poster')
  public img!: HTMLImageElement;

  async goToMoviePage() {
    await this.router.navigate(['/movie'], {
      queryParams: {movie: this.movie?.id},
    });
  }

  get loaded():boolean {
    return this.img && this.img.complete && this.img.naturalHeight !== 0;
  }
}
