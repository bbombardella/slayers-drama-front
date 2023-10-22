/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResult } from '../../models/paginated-result';
import { ProductEntity } from '../../models/product-entity';

export interface ProductControllerFindAll$Params {
}

export function productControllerFindAll(http: HttpClient, rootUrl: string, params?: ProductControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<ProductEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, productControllerFindAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<ProductEntity>;
      }>;
    })
  );
}

productControllerFindAll.PATH = '/product';
