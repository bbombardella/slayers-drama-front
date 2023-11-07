/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MovieEntity } from '../../models/movie-entity';

export interface MovieControllerFindOne$Params {

/**
 * Movie's ID
 */
  id: number;

/**
 * Add available seats to each screenings
 */
  addSeats?: boolean;
}

export function movieControllerFindOne(http: HttpClient, rootUrl: string, params: MovieControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
  const rb = new RequestBuilder(rootUrl, movieControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('addSeats', params.addSeats, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MovieEntity>;
    })
  );
}

movieControllerFindOne.PATH = '/movie/{id}';
