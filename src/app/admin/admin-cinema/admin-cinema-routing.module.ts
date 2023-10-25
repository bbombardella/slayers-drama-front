import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCinemaComponent} from "./admin-cinema.component";

const routes: Routes = [
  {
    path: '',
    component: AdminCinemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCinemaRoutingModule {
}
