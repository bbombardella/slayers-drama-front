/* tslint:disable */
/* eslint-disable */
import { ProductEntity } from '../models/product-entity';
export interface ReservationProductEntity {
  number: number;
  product: ProductEntity;
  productId: number;
  reservationId: number;
}
