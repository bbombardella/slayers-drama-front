import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {ScreeningEntity} from "../../api/models/screening-entity";

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  constructor() {
  }

  public getScreeningFromCart(): number[] {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [];
  }

  public setScreeningToCart(screenings: number[]): void {
    localStorage.setItem('cart', JSON.stringify(screenings));
  }

  public addScreeningToCart(screening: ScreeningEntity): void {

    if (this.getScreeningFromCart().includes(screening.id as number)) {
      return;
    }

    let cart = this.getScreeningFromCart();
    cart.push(screening.id as number);
    this.setScreeningToCart(cart);
  }

  public setAmount(screening: ScreeningEntity, amount: number): void {
    let cart = this.getScreeningFromCart();
    cart = cart.filter((s) => s !== screening.id);
    for (let i = 0; i < amount; i++) {
      cart.push(screening.id as number);
    }
    this.setScreeningToCart(cart);
  }

  public removeScreeningFromCart(screening: ScreeningEntity): void {
    let cart = this.getScreeningFromCart();
    cart = cart.filter((s) => s !== screening.id);
    this.setScreeningToCart(cart);
  }
}
