/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {OrderEntity} from '../../models/order-entity';

export interface OrderControllerPaymentCallback$Params {

/**
 * Stripe checkout session's id
 */
  sessionId: string;
}

export function orderControllerPaymentCallback(http: HttpClient, rootUrl: string, params: OrderControllerPaymentCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderEntity>> {
  const rb = new RequestBuilder(rootUrl, orderControllerPaymentCallback.PATH, 'get');
  if (params) {
    rb.query('sessionId', params.sessionId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderEntity>;
    })
  );
}

orderControllerPaymentCallback.PATH = '/order/payment/callback';
