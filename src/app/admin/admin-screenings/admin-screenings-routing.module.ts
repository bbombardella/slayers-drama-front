import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminScreeningsComponent} from "./admin-screenings.component";

const routes: Routes = [
  {
    path: '',
    component: AdminScreeningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminScreeningsRoutingModule { }
