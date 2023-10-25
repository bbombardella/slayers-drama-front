/* tslint:disable */
/* eslint-disable */
import { ReservationProductEntity } from '../models/reservation-product-entity';
import { ScreeningEntity } from '../models/screening-entity';
export interface ReservationEntity {
  createdAt: string;
  customerId: number;
  id: number;
  orderId: number;
  products: Array<ReservationProductEntity>;
  screening: ScreeningEntity;
  screeningId: number;
  updatedAt: string;
}
