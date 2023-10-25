import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminScreeningsRoutingModule } from './admin-screenings-routing.module';
import { AdminScreeningsComponent } from './admin-screenings.component';


@NgModule({
  declarations: [
    AdminScreeningsComponent
  ],
  imports: [
    CommonModule,
    AdminScreeningsRoutingModule
  ]
})
export class AdminScreeningsModule { }
