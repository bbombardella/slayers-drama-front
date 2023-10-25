import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMoviesRoutingModule } from './admin-movies-routing.module';
import { AdminMoviesComponent } from './admin-movies.component';


@NgModule({
  declarations: [
    AdminMoviesComponent
  ],
  imports: [
    CommonModule,
    AdminMoviesRoutingModule
  ]
})
export class AdminMoviesModule { }
