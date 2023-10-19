import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaComponent } from './cinema.component';


@NgModule({
  declarations: [
    CinemaComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule { }
