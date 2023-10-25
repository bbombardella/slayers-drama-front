/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CinemaEntity } from '../../models/cinema-entity';

export interface CinemaControllerRemove$Params {

/**
 * Cinema's ID
 */
  id: number;
}

export function cinemaControllerRemove(http: HttpClient, rootUrl: string, params: CinemaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerRemove.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CinemaEntity>;
    })
  );
}

cinemaControllerRemove.PATH = '/cinema/{id}';
