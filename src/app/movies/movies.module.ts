import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MovieCardComponent} from "../shared/ui/movie-card/movie-card.component";


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    InfiniteScrollModule,
    MovieCardComponent
  ]
})
export class MoviesModule { }
