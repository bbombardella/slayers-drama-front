/* tslint:disable */
/* eslint-disable */
import { OrderEntity } from '../models/order-entity';
export interface OrderPaymentRequiredDto {
  order: OrderEntity;
  url: string;
}
