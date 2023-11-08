import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ChipComponent} from "../shared/ui/chip/chip.component";
import {MovieCardComponent} from "../shared/ui/movie-card/movie-card.component";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatButtonModule,
    MatIconModule,
    ChipComponent,
    MovieCardComponent,
    MatDividerModule,
  ]
})
export class CartModule {
}
