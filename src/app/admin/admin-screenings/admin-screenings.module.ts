import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminScreeningsRoutingModule } from './admin-screenings-routing.module';
import { AdminScreeningsComponent } from './admin-screenings.component';
import {MatButtonModule} from "@angular/material/button";
import {TablePaginatedComponent} from "../../shared/ui/table-paginated/table-paginated.component";


@NgModule({
  declarations: [
    AdminScreeningsComponent
  ],
    imports: [
        CommonModule,
        AdminScreeningsRoutingModule,
        MatButtonModule,
        TablePaginatedComponent
    ]
})
export class AdminScreeningsModule { }
