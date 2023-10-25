import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCinemaRoutingModule } from './admin-cinema-routing.module';
import { AdminCinemaComponent } from './admin-cinema.component';


@NgModule({
  declarations: [
    AdminCinemaComponent
  ],
  imports: [
    CommonModule,
    AdminCinemaRoutingModule
  ]
})
export class AdminCinemaModule { }
