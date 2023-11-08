/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CinemaEntity } from '../../models/cinema-entity';
import { PaginatedResult } from '../../models/paginated-result';

export interface CinemaControllerFindAllWithNonActive$Params {
  page?: number;
  perPage?: number;
  state: boolean;
}

export function cinemaControllerFindAllWithNonActive(http: HttpClient, rootUrl: string, params: CinemaControllerFindAllWithNonActive$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<CinemaEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerFindAllWithNonActive.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('perPage', params.perPage, {});
    rb.path('state', params.state, {});
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

cinemaControllerFindAllWithNonActive.PATH = '/cinema/with-non-active/{state}';
