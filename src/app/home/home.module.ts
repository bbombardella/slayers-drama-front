import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MovieCardComponent} from "../shared/ui/movie-card/movie-card.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MovieCardComponent,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
