/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductEntity } from '../../models/product-entity';
import { UpdateProductDto } from '../../models/update-product-dto';

export interface ProductControllerUpdate$Params {

/**
 * Product's ID
 */
  id: number;
      body: UpdateProductDto
}

export function productControllerUpdate(http: HttpClient, rootUrl: string, params: ProductControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
  const rb = new RequestBuilder(rootUrl, productControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

productControllerUpdate.PATH = '/product/{id}';
