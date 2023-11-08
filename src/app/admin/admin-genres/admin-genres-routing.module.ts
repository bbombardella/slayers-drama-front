import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminGenresComponent} from "./admin-genres.component";

const routes: Routes = [
  {
    path: '',
    component: AdminGenresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGenresRoutingModule { }
