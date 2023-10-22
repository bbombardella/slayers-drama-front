/* tslint:disable */
/* eslint-disable */
import { ReservationEntity } from '../models/reservation-entity';
export interface OrderEntity {
  customerId: number;
  id: number;
  reservations: Array<ReservationEntity>;
  status: string;
}
