import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGenresRoutingModule } from './admin-genres-routing.module';
import { AdminGenresComponent } from './admin-genres.component';
import {MatButtonModule} from "@angular/material/button";
import {TablePaginatedComponent} from "../../shared/ui/table-paginated/table-paginated.component";


@NgModule({
  declarations: [
    AdminGenresComponent
  ],
    imports: [
        CommonModule,
        AdminGenresRoutingModule,
        MatButtonModule,
        TablePaginatedComponent
    ]
})
export class AdminGenresModule { }
