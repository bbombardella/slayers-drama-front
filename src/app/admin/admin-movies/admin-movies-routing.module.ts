import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMoviesComponent} from "./admin-movies.component";

const routes: Routes = [
  {
    path: '',
    component: AdminMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMoviesRoutingModule { }
