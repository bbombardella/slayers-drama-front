/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderEntity } from '../../models/order-entity';

export interface OrderControllerFindOne$Params {

/**
 * Order's ID
 */
  id: number;
}

export function orderControllerFindOne(http: HttpClient, rootUrl: string, params: OrderControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderEntity>> {
  const rb = new RequestBuilder(rootUrl, orderControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

orderControllerFindOne.PATH = '/order/{id}';
