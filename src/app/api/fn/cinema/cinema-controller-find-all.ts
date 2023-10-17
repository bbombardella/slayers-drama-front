/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResult } from '../../models/paginated-result';

export interface CinemaControllerFindAll$Params {
}

export function cinemaControllerFindAll(http: HttpClient, rootUrl: string, params?: CinemaControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerFindAll.PATH, 'get');
  if (params) {
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

cinemaControllerFindAll.PATH = '/cinema';
