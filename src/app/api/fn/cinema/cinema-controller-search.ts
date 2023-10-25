/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {CinemaEntity} from '../../models/cinema-entity';
import {PaginatedResult} from '../../models/paginated-result';

export interface CinemaControllerSearch$Params {

/**
 * The search pattern
 */
  query: string;
}

export function cinemaControllerSearch(http: HttpClient, rootUrl: string, params: CinemaControllerSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<CinemaEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerSearch.PATH, 'get');
  if (params) {
    rb.path('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<CinemaEntity>;
      }>;
    })
  );
}

cinemaControllerSearch.PATH = '/cinema/search/{query}';
