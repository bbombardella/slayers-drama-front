import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieEntity} from "../../../api/models/movie-entity";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieCardComponent {

  @Input()
  public movie: MovieEntity | undefined;

  @Input()
  public sizePercentage: number = 10;
}
