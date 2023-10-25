/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {CreateOrderDto} from '../../models/create-order-dto';
import {OrderPaymentRequiredDto} from '../../models/order-payment-required-dto';

export interface OrderControllerCreate$Params {
      body: CreateOrderDto
}

export function orderControllerCreate(http: HttpClient, rootUrl: string, params: OrderControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderPaymentRequiredDto>> {
  const rb = new RequestBuilder(rootUrl, orderControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderPaymentRequiredDto>;
    })
  );
}

orderControllerCreate.PATH = '/order';
