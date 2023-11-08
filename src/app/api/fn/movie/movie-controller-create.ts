/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MovieEntity } from '../../models/movie-entity';

export interface MovieControllerCreate$Params {

/**
 * ID from The Movie Database
 */
  id: number;
}

export function movieControllerCreate(http: HttpClient, rootUrl: string, params: MovieControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
  const rb = new RequestBuilder(rootUrl, movieControllerCreate.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
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

movieControllerCreate.PATH = '/movie/tmdb/{id}';
