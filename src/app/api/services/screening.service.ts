/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { screeningControllerCreate } from '../fn/screening/screening-controller-create';
import { ScreeningControllerCreate$Params } from '../fn/screening/screening-controller-create';
import { screeningControllerFindAll } from '../fn/screening/screening-controller-find-all';
import { ScreeningControllerFindAll$Params } from '../fn/screening/screening-controller-find-all';
import { screeningControllerFindOne } from '../fn/screening/screening-controller-find-one';
import { ScreeningControllerFindOne$Params } from '../fn/screening/screening-controller-find-one';
import { screeningControllerRemove } from '../fn/screening/screening-controller-remove';
import { ScreeningControllerRemove$Params } from '../fn/screening/screening-controller-remove';
import { screeningControllerUpdate } from '../fn/screening/screening-controller-update';
import { ScreeningControllerUpdate$Params } from '../fn/screening/screening-controller-update';

@Injectable({ providedIn: 'root' })
export class ScreeningService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `screeningControllerFindAll()` */
  static readonly ScreeningControllerFindAllPath = '/screening';

  /**
   * Retrieve all screenings with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `screeningControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerFindAll$Response(params?: ScreeningControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return screeningControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all screenings with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `screeningControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerFindAll(params?: ScreeningControllerFindAll$Params, context?: HttpContext): Observable<void> {
    return this.screeningControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `screeningControllerCreate()` */
  static readonly ScreeningControllerCreatePath = '/screening';

  /**
   * Create a new screening.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `screeningControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  screeningControllerCreate$Response(params: ScreeningControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return screeningControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new screening.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `screeningControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  screeningControllerCreate(params: ScreeningControllerCreate$Params, context?: HttpContext): Observable<void> {
    return this.screeningControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `screeningControllerFindOne()` */
  static readonly ScreeningControllerFindOnePath = '/screening/{id}';

  /**
   * Retrieve a screening by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `screeningControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerFindOne$Response(params: ScreeningControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return screeningControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a screening by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `screeningControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerFindOne(params: ScreeningControllerFindOne$Params, context?: HttpContext): Observable<void> {
    return this.screeningControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `screeningControllerRemove()` */
  static readonly ScreeningControllerRemovePath = '/screening/{id}';

  /**
   * Delete a screening by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `screeningControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerRemove$Response(params: ScreeningControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return screeningControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a screening by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `screeningControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  screeningControllerRemove(params: ScreeningControllerRemove$Params, context?: HttpContext): Observable<void> {
    return this.screeningControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `screeningControllerUpdate()` */
  static readonly ScreeningControllerUpdatePath = '/screening/{id}';

  /**
   * Update a screening by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `screeningControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  screeningControllerUpdate$Response(params: ScreeningControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return screeningControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a screening by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `screeningControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  screeningControllerUpdate(params: ScreeningControllerUpdate$Params, context?: HttpContext): Observable<void> {
    return this.screeningControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
