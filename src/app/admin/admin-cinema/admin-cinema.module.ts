import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminCinemaRoutingModule} from './admin-cinema-routing.module';
import {AdminCinemaComponent} from './admin-cinema.component';
import {TablePaginatedComponent} from "../../shared/ui/table-paginated/table-paginated.component";
import { AdminCinemaFormComponent } from './admin-cinema-form/admin-cinema-form.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AdminCinemaComponent,
    AdminCinemaFormComponent
  ],
  imports: [
    CommonModule,
    AdminCinemaRoutingModule,
    TablePaginatedComponent,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class AdminCinemaModule {
}
