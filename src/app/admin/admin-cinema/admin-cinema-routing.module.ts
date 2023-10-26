import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCinemaComponent} from "./admin-cinema.component";
import {AdminCinemaFormComponent} from "./admin-cinema-form/admin-cinema-form.component";
import {FormModeEnum} from "../../shared/models/form-mode.enum";

const routes: Routes = [
  {
    path: '',
    component: AdminCinemaComponent
  },
  {
    path: 'new',
    component: AdminCinemaFormComponent,
    data: {
      mode: FormModeEnum.CREATION
    }
  },
  {
    path: ':id',
    component: AdminCinemaFormComponent,
    data: {
      mode: FormModeEnum.EDITION
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCinemaRoutingModule {
}
