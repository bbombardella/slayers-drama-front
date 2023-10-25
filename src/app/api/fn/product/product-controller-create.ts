/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateProductDto } from '../../models/create-product-dto';
import { ProductEntity } from '../../models/product-entity';

export interface ProductControllerCreate$Params {
      body: CreateProductDto
}

export function productControllerCreate(http: HttpClient, rootUrl: string, params: ProductControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
  const rb = new RequestBuilder(rootUrl, productControllerCreate.PATH, 'post');
  if (params) {
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

productControllerCreate.PATH = '/product';
