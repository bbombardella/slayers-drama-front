/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MovieEntity } from '../../models/movie-entity';
import { PaginatedResult } from '../../models/paginated-result';

export interface MovieControllerFindAll$Params {
  page?: number;
  perPage?: number;
}

export function movieControllerFindAll(http: HttpClient, rootUrl: string, params?: MovieControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<MovieEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, movieControllerFindAll.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('perPage', params.perPage, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<MovieEntity>;
      }>;
    })
  );
}

movieControllerFindAll.PATH = '/movie';
