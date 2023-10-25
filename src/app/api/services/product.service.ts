/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedResult } from '../models/paginated-result';
import { productControllerCreate } from '../fn/product/product-controller-create';
import { ProductControllerCreate$Params } from '../fn/product/product-controller-create';
import { productControllerFindAll } from '../fn/product/product-controller-find-all';
import { ProductControllerFindAll$Params } from '../fn/product/product-controller-find-all';
import { productControllerFindOne } from '../fn/product/product-controller-find-one';
import { ProductControllerFindOne$Params } from '../fn/product/product-controller-find-one';
import { productControllerRemove } from '../fn/product/product-controller-remove';
import { ProductControllerRemove$Params } from '../fn/product/product-controller-remove';
import { productControllerUpdate } from '../fn/product/product-controller-update';
import { ProductControllerUpdate$Params } from '../fn/product/product-controller-update';
import { ProductEntity } from '../models/product-entity';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productControllerFindAll()` */
  static readonly ProductControllerFindAllPath = '/product';

  /**
   * Retrieve all products with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerFindAll$Response(params?: ProductControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<ProductEntity>;
}>> {
    return productControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all products with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerFindAll(params?: ProductControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<ProductEntity>;
}> {
    return this.productControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<ProductEntity>;
}>): PaginatedResult & {
'data'?: Array<ProductEntity>;
} => r.body)
    );
  }

  /** Path part for operation `productControllerCreate()` */
  static readonly ProductControllerCreatePath = '/product';

  /**
   * Create a new product.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productControllerCreate$Response(params: ProductControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
    return productControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new product.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productControllerCreate(params: ProductControllerCreate$Params, context?: HttpContext): Observable<ProductEntity> {
    return this.productControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductEntity>): ProductEntity => r.body)
    );
  }

  /** Path part for operation `productControllerFindOne()` */
  static readonly ProductControllerFindOnePath = '/product/{id}';

  /**
   * Retrieve a product by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerFindOne$Response(params: ProductControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
    return productControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a product by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerFindOne(params: ProductControllerFindOne$Params, context?: HttpContext): Observable<ProductEntity> {
    return this.productControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductEntity>): ProductEntity => r.body)
    );
  }

  /** Path part for operation `productControllerRemove()` */
  static readonly ProductControllerRemovePath = '/product/{id}';

  /**
   * Delete a genre by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerRemove$Response(params: ProductControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
    return productControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a genre by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productControllerRemove(params: ProductControllerRemove$Params, context?: HttpContext): Observable<ProductEntity> {
    return this.productControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductEntity>): ProductEntity => r.body)
    );
  }

  /** Path part for operation `productControllerUpdate()` */
  static readonly ProductControllerUpdatePath = '/product/{id}';

  /**
   * Update a product by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productControllerUpdate$Response(params: ProductControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductEntity>> {
    return productControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a product by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productControllerUpdate(params: ProductControllerUpdate$Params, context?: HttpContext): Observable<ProductEntity> {
    return this.productControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductEntity>): ProductEntity => r.body)
    );
  }

}
