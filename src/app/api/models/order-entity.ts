/* tslint:disable */
/* eslint-disable */
import { ReservationEntity } from '../models/reservation-entity';
import { UserEntity } from '../models/user-entity';
export interface OrderEntity {
  customer: UserEntity;
  customerId: number;
  id: number;
  reservations: Array<ReservationEntity>;
  status: string;
}
