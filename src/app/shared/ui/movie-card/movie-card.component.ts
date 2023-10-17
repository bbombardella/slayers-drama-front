import {Component, Input, NgModule} from '@angular/core';
import { Movie } from '../../models/movie';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieCardComponent {

  @Input()
  public movie: Movie | undefined;

  @Input()
  public sizePercentage: number = 10;
}
