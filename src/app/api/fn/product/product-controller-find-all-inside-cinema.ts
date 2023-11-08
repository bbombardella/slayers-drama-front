/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductEntity } from '../../models/product-entity';

export interface ProductControllerFindAllInsideCinema$Params {
  id: number;
}

export function productControllerFindAllInsideCinema(http: HttpClient, rootUrl: string, params: ProductControllerFindAllInsideCinema$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductEntity>>> {
  const rb = new RequestBuilder(rootUrl, productControllerFindAllInsideCinema.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProductEntity>>;
    })
  );
}

productControllerFindAllInsideCinema.PATH = '/product/cinema/{id}';
