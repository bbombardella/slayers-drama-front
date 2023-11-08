/* tslint:disable */
/* eslint-disable */
import { CreateReservationDto } from '../models/create-reservation-dto';
export interface CreateOrderDto {
  reservations: Array<CreateReservationDto>;
}
