import {Component, DestroyRef, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ScreeningEntity} from "../../../api/models/screening-entity";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../../api/services/product.service";
import {ProductEntity} from "../../../api/models/product-entity";
import {take} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Reservation} from "../../models/cart.model";
import {MovieEntity} from "../../../api/models/movie-entity";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, RouterLink],
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  cart: Map<ProductEntity, number> = new Map<ProductEntity, number>();

  private products: ProductEntity[] = [];

  constructor(private readonly productService: ProductService,
              private readonly destroyRef: DestroyRef,
              @Inject(MAT_DIALOG_DATA) private readonly data: { screening: ScreeningEntity, movie: MovieEntity }) {
  }

  private get screening() {
    return this.data.screening;
  }

  get tooManyPlaces(): boolean {
    return this.total >= this.screening.availableSeats;
  }

  get total(): number {
    return [...this.cart.values()]
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  get nothingSelected(): boolean {
    return [...this.cart.values()].every(v => v === 0);
  }

  ngOnInit(): void {
    this.productService.productControllerFindAllInsideCinema({
      id: this.screening!.id
    }).pipe(
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(value => {
      if (value) {
        this.products = value;
        this.initCart();
      }
    })
  }

  initCart() {
    this.products.forEach(p => {
      this.cart.set(p, 0);
    })
  }

  add(key: ProductEntity): void {
    const count = this.cart.get(key);

    if (!isNaN(Number(count))) {
      this.cart.set(key, count! + 1);
    }
  }

  remove(key: ProductEntity): void {
    const count = this.cart.get(key);

    if (isNaN(Number(count)) || count! <= 0) {
      return;
    }

    this.cart.set(key, count! - 1);
  }

  mapObjectOnClose(): Reservation {
    return {
      screening: {
        ...this.screening,
        movie: this.data.movie
      },
      products: [...this.cart.entries()]
        .filter(([k, v]) => v > 0)
        .map(([k, v]) => ({
          product: k,
          number: v
        }))
    };
  }
}
