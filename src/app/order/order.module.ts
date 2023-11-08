import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order.component';
import {MovieCardComponent} from "../shared/ui/movie-card/movie-card.component";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { StripeVerifyComponent } from './stripe-verify/stripe-verify.component';


@NgModule({
  declarations: [
    OrderComponent,
    StripeVerifyComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MovieCardComponent,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class OrderModule {
}
