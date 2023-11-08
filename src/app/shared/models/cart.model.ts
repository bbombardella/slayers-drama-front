import {ProductEntity} from "../../api/models/product-entity";
import {ScreeningEntity} from "../../api/models/screening-entity";

export interface Reservation {
  screening: ScreeningEntity;
  products: ReservationProduct[];
}

export interface ReservationProduct {
  product: ProductEntity;
  number: number;
}
