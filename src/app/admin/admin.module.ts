import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import { MovieEditorModalComponent } from './modal/movie-editor-modal/movie-editor-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ScreeningEditorModalComponent } from './modal/screening-editor-modal/screening-editor-modal.component';
import { AddMovieModalComponent } from './modal/add-movie-modal/add-movie-modal.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AdminComponent,
    MovieEditorModalComponent,
    ScreeningEditorModalComponent,
    AddMovieModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule
  ]
})
export class AdminModule {
}
