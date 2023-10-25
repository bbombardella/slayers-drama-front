/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {CinemaEntity} from '../../models/cinema-entity';

export interface CinemaControllerFindOne$Params {

/**
 * Cinema's ID
 */
  id: number;
}

export function cinemaControllerFindOne(http: HttpClient, rootUrl: string, params: CinemaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerFindOne.PATH, 'get');
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

cinemaControllerFindOne.PATH = '/cinema/{id}';
