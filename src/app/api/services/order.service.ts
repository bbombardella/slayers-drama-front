/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { orderControllerCreate } from '../fn/order/order-controller-create';
import { OrderControllerCreate$Params } from '../fn/order/order-controller-create';
import { orderControllerFindAll } from '../fn/order/order-controller-find-all';
import { OrderControllerFindAll$Params } from '../fn/order/order-controller-find-all';
import { orderControllerFindAllMine } from '../fn/order/order-controller-find-all-mine';
import { OrderControllerFindAllMine$Params } from '../fn/order/order-controller-find-all-mine';
import { orderControllerFindOne } from '../fn/order/order-controller-find-one';
import { OrderControllerFindOne$Params } from '../fn/order/order-controller-find-one';
import { orderControllerPaymentCallback } from '../fn/order/order-controller-payment-callback';
import { OrderControllerPaymentCallback$Params } from '../fn/order/order-controller-payment-callback';
import { OrderEntity } from '../models/order-entity';
import { OrderPaymentRequiredDto } from '../models/order-payment-required-dto';
import { PaginatedResult } from '../models/paginated-result';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderControllerFindAll()` */
  static readonly OrderControllerFindAllPath = '/order';

  /**
   * Retrieve all orders with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindAll$Response(params?: OrderControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>> {
    return orderControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all orders with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindAll(params?: OrderControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<OrderEntity>;
}> {
    return this.orderControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>): PaginatedResult & {
'data'?: Array<OrderEntity>;
} => r.body)
    );
  }

  /** Path part for operation `orderControllerCreate()` */
  static readonly OrderControllerCreatePath = '/order';

  /**
   * Create a new order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderControllerCreate$Response(params: OrderControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderPaymentRequiredDto>> {
    return orderControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
    orderControllerCreate(params: OrderControllerCreate$Params, context?: HttpContext): Observable<OrderPaymentRequiredDto> {
    return this.orderControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderPaymentRequiredDto>): OrderPaymentRequiredDto => r.body)
    );
  }

  /** Path part for operation `orderControllerFindAllMine()` */
  static readonly OrderControllerFindAllMinePath = '/order/mine';

  /**
   * Retrieve my orders with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderControllerFindAllMine()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindAllMine$Response(params?: OrderControllerFindAllMine$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>> {
    return orderControllerFindAllMine(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve my orders with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderControllerFindAllMine$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindAllMine(params?: OrderControllerFindAllMine$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<OrderEntity>;
}> {
    return this.orderControllerFindAllMine$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>): PaginatedResult & {
'data'?: Array<OrderEntity>;
} => r.body)
    );
  }

  /** Path part for operation `orderControllerPaymentCallback()` */
  static readonly OrderControllerPaymentCallbackPath = '/order/payment/callback';

  /**
   * Verify payment after having paid on Stripe.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderControllerPaymentCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerPaymentCallback$Response(params: OrderControllerPaymentCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderEntity>> {
    return orderControllerPaymentCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * Verify payment after having paid on Stripe.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderControllerPaymentCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerPaymentCallback(params: OrderControllerPaymentCallback$Params, context?: HttpContext): Observable<OrderEntity> {
    return this.orderControllerPaymentCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderEntity>): OrderEntity => r.body)
    );
  }

  /** Path part for operation `orderControllerFindOne()` */
  static readonly OrderControllerFindOnePath = '/order/{id}';

  /**
   * Retrieve an order by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindOne$Response(params: OrderControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderEntity>> {
    return orderControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve an order by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderControllerFindOne(params: OrderControllerFindOne$Params, context?: HttpContext): Observable<OrderEntity> {
    return this.orderControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderEntity>): OrderEntity => r.body)
    );
  }

}
