/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MovieDetails } from '../../models/movie-details';

export interface MovieControllerFindOneTmdb$Params {

/**
 * ID from The Movie Database
 */
  id: number;
}

export function movieControllerFindOneTmdb(http: HttpClient, rootUrl: string, params: MovieControllerFindOneTmdb$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieDetails>> {
  const rb = new RequestBuilder(rootUrl, movieControllerFindOneTmdb.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MovieDetails>;
    })
  );
}

movieControllerFindOneTmdb.PATH = '/movie/tmdb/{id}';
