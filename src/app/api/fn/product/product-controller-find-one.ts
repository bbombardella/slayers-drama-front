/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {ProductEntity} from '../../models/product-entity';

export interface ProductControllerFindOne$Params {

/**
 * Product's ID
 */
  id: number;
}

export function productControllerFindOne(http: HttpClient, rootUrl: string, params: ProductControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
  const rb = new RequestBuilder(rootUrl, productControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductEntity>;
    })
  );
}

productControllerFindOne.PATH = '/product/{id}';
