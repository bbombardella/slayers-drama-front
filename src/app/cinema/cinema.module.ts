import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CinemaRoutingModule} from './cinema-routing.module';
import {CinemaComponent} from './cinema.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    CinemaComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    Storage,
  ],
})
export class CinemaModule {
}
