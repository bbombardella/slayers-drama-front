import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CartManagerService} from "../../services/cart-manager.service";
import {ScreeningEntity} from "../../../api/models/screening-entity";
import {ScreeningService} from "../../../api/services/screening.service";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, RouterLink],
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  cart: ScreeningEntity[] = [];

  constructor(
    private cartManager: CartManagerService,
    private screeningService: ScreeningService,
  ) {
  }

  ngOnInit(): void {
    const screeningIds = this.cartManager.getScreeningFromCart();
    console.log('screeningIds : ', screeningIds)
    screeningIds.forEach((screeningId: number) => {
      this.screeningService.screeningControllerFindOne({id: screeningId}).subscribe(
        (screening: ScreeningEntity) => {
          this.cart.push(screening);
        });
    });
  }

  get filteredCart(): ScreeningEntity[] {
    //select distinct screening
    return this.cart.filter((c: ScreeningEntity, index: number, array: ScreeningEntity[]) =>
      array.findIndex((c2: ScreeningEntity) => c2.id === c.id) === index);
  }

  getHowMuch(c: ScreeningEntity): number {
    return this.cartManager.getScreeningFromCart().filter((screeningId: number) => screeningId === c.id).length;
  }

  setAmount(c: ScreeningEntity, $event: Event) {
    const target = $event.target as HTMLInputElement;
    const amount = parseInt(target.value);
    if (amount > 0) {
      this.cartManager.setAmount(c, amount);
    } else {
      this.cartManager.removeScreeningFromCart(c);
    }
  }

  deleteScreening(c: ScreeningEntity) {
    this.cartManager.removeScreeningFromCart(c);
    this.cart = this.cart.filter((c2: ScreeningEntity) => c2.id !== c.id);
  }
}
