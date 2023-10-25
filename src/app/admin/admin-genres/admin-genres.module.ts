import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGenresRoutingModule } from './admin-genres-routing.module';
import { AdminGenresComponent } from './admin-genres.component';


@NgModule({
  declarations: [
    AdminGenresComponent
  ],
  imports: [
    CommonModule,
    AdminGenresRoutingModule
  ]
})
export class AdminGenresModule { }
