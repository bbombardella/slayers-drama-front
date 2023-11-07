import {Component, OnInit} from '@angular/core';
import {CartManagerService} from "../shared/services/cart-manager.service";
import {ScreeningService} from "../api/services/screening.service";
import {ScreeningEntity} from "../api/models/screening-entity";
import {OrderService} from "../api/services/order.service";
import { CreateReservationDto } from '../api/models/create-reservation-dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
/**
 * i dont even care about duplicating code anymore
 * */
export class CartComponent implements OnInit {
  cart: ScreeningEntity[] = [];

  constructor(
    private cartManager: CartManagerService,
    private screeningService: ScreeningService,
    private orderService: OrderService,
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

  buy() {
    console.log('buy')

    let resa: CreateReservationDto[] = [];

    this.cartManager.getScreeningFromCart().forEach((screeningId: number) => {

      if(resa.find((r) => r.screeningId === screeningId)) {
        let r = resa.find((r) => (r.screeningId === screeningId));
        if(r) r.products[0].number++;
        return;
      }


      resa.push({
        screeningId: screeningId,
        products: [{productId: 1, number: 1}],
      });
    });

    this.orderService.orderControllerCreate({
      body: {
        reservations: resa
      }
    }).subscribe((r) => {
      window.open(r.url, '_self');
    });
  }
}
