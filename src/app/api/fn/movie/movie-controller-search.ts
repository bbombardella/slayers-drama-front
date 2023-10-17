/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResult } from '../../models/paginated-result';

export interface MovieControllerSearch$Params {

/**
 * The search pattern
 */
  query: any;
}

export function movieControllerSearch(http: HttpClient, rootUrl: string, params: MovieControllerSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult>> {
  const rb = new RequestBuilder(rootUrl, movieControllerSearch.PATH, 'get');
  if (params) {
    rb.path('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult>;
    })
  );
}

movieControllerSearch.PATH = '/movie/search/{query}';
