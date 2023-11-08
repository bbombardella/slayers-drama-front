import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from "./order.component";
import {authGuard} from "../shared/guards/auth.guard";
import {StripeVerifyComponent} from "./stripe-verify/stripe-verify.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: ':id',
        component: OrderComponent,
        canActivate: [authGuard]
      },
      {
        path: 'stripe/verify/:id',
        component: StripeVerifyComponent,
        title: 'Validation de votre commande',
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
