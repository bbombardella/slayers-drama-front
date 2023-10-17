/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { cinemaControllerCreate } from '../fn/cinema/cinema-controller-create';
import { CinemaControllerCreate$Params } from '../fn/cinema/cinema-controller-create';
import { cinemaControllerFindAll } from '../fn/cinema/cinema-controller-find-all';
import { CinemaControllerFindAll$Params } from '../fn/cinema/cinema-controller-find-all';
import { cinemaControllerFindOne } from '../fn/cinema/cinema-controller-find-one';
import { CinemaControllerFindOne$Params } from '../fn/cinema/cinema-controller-find-one';
import { cinemaControllerFindOneDetails } from '../fn/cinema/cinema-controller-find-one-details';
import { CinemaControllerFindOneDetails$Params } from '../fn/cinema/cinema-controller-find-one-details';
import { cinemaControllerRemove } from '../fn/cinema/cinema-controller-remove';
import { CinemaControllerRemove$Params } from '../fn/cinema/cinema-controller-remove';
import { cinemaControllerSearch } from '../fn/cinema/cinema-controller-search';
import { CinemaControllerSearch$Params } from '../fn/cinema/cinema-controller-search';
import { cinemaControllerUpdate } from '../fn/cinema/cinema-controller-update';
import { CinemaControllerUpdate$Params } from '../fn/cinema/cinema-controller-update';
import { CinemaDetailsDto } from '../models/cinema-details-dto';
import { CinemaEntity } from '../models/cinema-entity';
import { PaginatedResult } from '../models/paginated-result';

@Injectable({ providedIn: 'root' })
export class CinemaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `cinemaControllerFindAll()` */
  static readonly CinemaControllerFindAllPath = '/cinema';

  /**
   * Retrieve all cinemas with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindAll$Response(params?: CinemaControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult>> {
    return cinemaControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all cinemas with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindAll(params?: CinemaControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult> {
    return this.cinemaControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult>): PaginatedResult => r.body)
    );
  }

  /** Path part for operation `cinemaControllerCreate()` */
  static readonly CinemaControllerCreatePath = '/cinema';

  /**
   * Create a new cinema.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cinemaControllerCreate$Response(params: CinemaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
    return cinemaControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new cinema.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cinemaControllerCreate(params: CinemaControllerCreate$Params, context?: HttpContext): Observable<CinemaEntity> {
    return this.cinemaControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<CinemaEntity>): CinemaEntity => r.body)
    );
  }

  /** Path part for operation `cinemaControllerSearch()` */
  static readonly CinemaControllerSearchPath = '/cinema/search/{query}';

  /**
   * Search cinema in database. Results with pagination.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerSearch$Response(params: CinemaControllerSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<CinemaEntity>;
}>> {
    return cinemaControllerSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Search cinema in database. Results with pagination.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerSearch(params: CinemaControllerSearch$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<CinemaEntity>;
}> {
    return this.cinemaControllerSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<CinemaEntity>;
}>): PaginatedResult & {
'data'?: Array<CinemaEntity>;
} => r.body)
    );
  }

  /** Path part for operation `cinemaControllerFindOneDetails()` */
  static readonly CinemaControllerFindOneDetailsPath = '/cinema/{id}/details';

  /**
   * Retrieve cinema's details by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerFindOneDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindOneDetails$Response(params: CinemaControllerFindOneDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaDetailsDto>> {
    return cinemaControllerFindOneDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve cinema's details by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerFindOneDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindOneDetails(params: CinemaControllerFindOneDetails$Params, context?: HttpContext): Observable<CinemaDetailsDto> {
    return this.cinemaControllerFindOneDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<CinemaDetailsDto>): CinemaDetailsDto => r.body)
    );
  }

  /** Path part for operation `cinemaControllerFindOne()` */
  static readonly CinemaControllerFindOnePath = '/cinema/{id}';

  /**
   * Retrieve a cinema by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindOne$Response(params: CinemaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
    return cinemaControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a cinema by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerFindOne(params: CinemaControllerFindOne$Params, context?: HttpContext): Observable<CinemaEntity> {
    return this.cinemaControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<CinemaEntity>): CinemaEntity => r.body)
    );
  }

  /** Path part for operation `cinemaControllerRemove()` */
  static readonly CinemaControllerRemovePath = '/cinema/{id}';

  /**
   * Delete a cinema by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerRemove$Response(params: CinemaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
    return cinemaControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a cinema by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaControllerRemove(params: CinemaControllerRemove$Params, context?: HttpContext): Observable<CinemaEntity> {
    return this.cinemaControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<CinemaEntity>): CinemaEntity => r.body)
    );
  }

  /** Path part for operation `cinemaControllerUpdate()` */
  static readonly CinemaControllerUpdatePath = '/cinema/{id}';

  /**
   * Update a cinema by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cinemaControllerUpdate$Response(params: CinemaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
    return cinemaControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a cinema by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cinemaControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cinemaControllerUpdate(params: CinemaControllerUpdate$Params, context?: HttpContext): Observable<CinemaEntity> {
    return this.cinemaControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<CinemaEntity>): CinemaEntity => r.body)
    );
  }

}
