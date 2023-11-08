import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMoviesRoutingModule } from './admin-movies-routing.module';
import { AdminMoviesComponent } from './admin-movies.component';
import {MatButtonModule} from "@angular/material/button";
import {TablePaginatedComponent} from "../../shared/ui/table-paginated/table-paginated.component";


@NgModule({
  declarations: [
    AdminMoviesComponent
  ],
    imports: [
        CommonModule,
        AdminMoviesRoutingModule,
        MatButtonModule,
        TablePaginatedComponent
    ]
})
export class AdminMoviesModule { }
