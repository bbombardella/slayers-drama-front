/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {debugControllerPopulate, DebugControllerPopulate$Params} from '../fn/operations/debug-controller-populate';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `debugControllerPopulate()` */
  static readonly DebugControllerPopulatePath = '/debug/populate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `debugControllerPopulate()` instead.
   *
   * This method doesn't expect any request body.
   */
  debugControllerPopulate$Response(params: DebugControllerPopulate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return debugControllerPopulate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `debugControllerPopulate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  debugControllerPopulate(params: DebugControllerPopulate$Params, context?: HttpContext): Observable<void> {
    return this.debugControllerPopulate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
