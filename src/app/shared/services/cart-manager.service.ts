import {Injectable} from '@angular/core';
import {ScreeningEntity} from "../../api/models/screening-entity";
import {Reservation} from "../models/cart.model";
import {ProductEntity} from "../../api/models/product-entity";

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {
  private readonly _key: string = 'cart';

  public getReservationFromCart(): Reservation[] {
    return localStorage.getItem(this._key) ? JSON.parse(localStorage.getItem(this._key) as string) : [];
  }

  public setReservationToCart(screenings: Reservation[]): void {
    localStorage.setItem(this._key, JSON.stringify(screenings));
  }

  public addReservationToCart(reservation: Reservation): void {
    const cart = this.getReservationFromCart();

    const alreadyExistReservation = cart.find(r => r.screening.id === reservation.screening.id)
    if (alreadyExistReservation) {
      alreadyExistReservation.products = [
        ...alreadyExistReservation
          .products
          .filter(item => reservation.products.map(p => p.product.id).includes(item.product.id))
          .map(p => ({
            product: p.product,
            number: p.number + reservation.products.find(item => item.product.id === p.product.id)!.number
          })),
        ...alreadyExistReservation
          .products
          .filter(item => !reservation.products.map(p => p.product.id).includes(item.product.id))
      ];
    } else {
      cart.push(reservation);
    }

    this.setReservationToCart(cart);
  }

  public setAmount(screening: ScreeningEntity, product: ProductEntity, amount: number): void {
    const cart = this.getReservationFromCart();
    const productInCart = cart
      .find(r => r.screening.id === screening.id)
      ?.products
      ?.find(p => p.product.id === product.id);

    if (!productInCart) {
      return;
    }

    productInCart.number = amount;

    this.setReservationToCart(cart);
  }

  public removeProductFromCart(screening: ScreeningEntity, product: ProductEntity): void {
    const cart = this.getReservationFromCart();
    const alreadyExistScreening = this.getReservationFromCart()
      .find(r => r.screening.id === screening.id);

    if (!alreadyExistScreening) {
      return;
    }

    alreadyExistScreening.products = alreadyExistScreening.products.filter(p => p.product.id === product.id);

    this.setReservationToCart(cart);
  }
}
