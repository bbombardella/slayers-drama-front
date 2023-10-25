/* tslint:disable */
/* eslint-disable */
import {CreateReservationProduct} from '../models/create-reservation-product';

export interface CreateReservationDto {
  products: Array<CreateReservationProduct>;
  screeningId: number;
}
