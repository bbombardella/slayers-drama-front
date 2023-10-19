import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import {LoadingBarComponent} from "../shared/ui/loading-bar/loading-bar.component";
import {StarsComponent} from "../shared/ui/stars/stars.component";


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    LoadingBarComponent,
    StarsComponent,
  ],
  providers: [

  ]
})
export class MovieModule { }
