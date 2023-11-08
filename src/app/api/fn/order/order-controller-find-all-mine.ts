/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderEntity } from '../../models/order-entity';
import { PaginatedResult } from '../../models/paginated-result';

export interface OrderControllerFindAllMine$Params {
  page?: number;
  perPage?: number;
}

export function orderControllerFindAllMine(http: HttpClient, rootUrl: string, params?: OrderControllerFindAllMine$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, orderControllerFindAllMine.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('perPage', params.perPage, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<OrderEntity>;
      }>;
    })
  );
}

orderControllerFindAllMine.PATH = '/order/mine';
