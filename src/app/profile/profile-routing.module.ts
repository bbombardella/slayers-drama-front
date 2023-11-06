import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "../shared/guards/auth.guard";
import {ProfileComponent} from "./profile.component";
import {ProfileInfosComponent} from "./profile-infos/profile-infos.component";
import {ProfileOrdersComponent} from "./profile-orders/profile-orders.component";
import {ProfileInfosFormComponent} from "./profile-infos/profile-infos-form/profile-infos-form.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'infos',
  },
  {
    path: '',
    component: ProfileComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'infos',
        component: ProfileInfosComponent,
      },
      {
        path: 'infos/edit',
        component: ProfileInfosFormComponent,
      },
      {
        path: 'orders',
        component: ProfileOrdersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
