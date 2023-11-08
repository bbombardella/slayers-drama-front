import {Component} from '@angular/core';
import {CartManagerService} from "../shared/services/cart-manager.service";
import {OrderService} from "../api/services/order.service";
import {ProductEntity} from "../api/models/product-entity";
import {ScreeningEntity} from "../api/models/screening-entity";
import {Reservation} from "../shared/models/cart.model";

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
  ) {
    this.cart = this.cartManager.getReservationFromCart();
  }

  reloadCart(): void {
    this.cart = this.cartManager.getReservationFromCart();
  }

  setAmount(screening: ScreeningEntity, product: ProductEntity, value: number) {
    this.cartManager.setAmount(screening, product, value);
    this.reloadCart();
  }

  buy() {
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
      window.open(r.url, '_self');
    });
  }
}
