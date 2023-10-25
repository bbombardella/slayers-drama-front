import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MovieCardComponent} from "../shared/ui/movie-card/movie-card.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    InfiniteScrollModule,
    MovieCardComponent,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class MoviesModule { }
