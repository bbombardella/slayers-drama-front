import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie.component';
import {LoadingBarComponent} from "../shared/ui/loading-bar/loading-bar.component";
import {StarsComponent} from "../shared/ui/stars/stars.component";
import {ChipComponent} from "../shared/ui/chip/chip.component";


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    LoadingBarComponent,
    StarsComponent,
    ChipComponent,
  ],
  providers: [

  ]
})
export class MovieModule { }
