/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderEntity } from '../../models/order-entity';
import { PaginatedResult } from '../../models/paginated-result';

export interface OrderControllerFindAll$Params {
  page?: number;
  perPage?: number;
}

export function orderControllerFindAll(http: HttpClient, rootUrl: string, params?: OrderControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<OrderEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, orderControllerFindAll.PATH, 'get');
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

orderControllerFindAll.PATH = '/order';
