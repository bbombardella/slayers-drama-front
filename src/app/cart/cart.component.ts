import {Component} from '@angular/core';
import {CartManagerService} from "../shared/services/cart-manager.service";
import {OrderService} from "../api/services/order.service";
import {ProductEntity} from "../api/models/product-entity";
import {ScreeningEntity} from "../api/models/screening-entity";
import {Reservation} from "../shared/models/cart.model";
import {AuthService} from "../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: Reservation[] = [];

  constructor(
    private readonly cartManager: CartManagerService,
    private readonly orderService: OrderService,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
  ) {
    this.cart = this.cartManager.getReservationFromCart();
  }

  get loggedIn(): boolean {
    return !!this.authService.currentUser;
  }

  reloadCart(): void {
    this.cart = this.cartManager.getReservationFromCart();
  }

  setAmount(screening: ScreeningEntity, product: ProductEntity, value: number) {
    this.cartManager.setAmount(screening, product, value);
    this.reloadCart();
  }

  buy() {
    if (!this.cart?.length) {
      this.snackBar.open('Votre panier est vide...', 'OK', {duration: 5 * 1000});
      return;
    }

    if (!this.loggedIn) {
      this.snackBar.open('Veillez-vous connecter avant', 'OK', {duration: 5 * 1000});
      return;
    }

    this.orderService.orderControllerCreate({
      body: {
        reservations: this.cart.map(r => ({
          screeningId: r.screening.id,
          products: r.products.map(p => ({
            productId: p.product.id,
            number: p.number
          }))
        }))
      }
    }).subscribe((r) => {
      if (!r) {
        return;
      }

      this.cartManager.setReservationToCart([]);
      window.open(r.url, '_self');
    });
  }
}
