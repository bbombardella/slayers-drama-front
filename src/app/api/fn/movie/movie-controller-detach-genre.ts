/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {MovieEntity} from '../../models/movie-entity';

export interface MovieControllerDetachGenre$Params {

/**
 * ID from The Movie Database
 */
  id: number;
      body: Array<string>
}

export function movieControllerDetachGenre(http: HttpClient, rootUrl: string, params: MovieControllerDetachGenre$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
  const rb = new RequestBuilder(rootUrl, movieControllerDetachGenre.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

movieControllerDetachGenre.PATH = '/movie/{id}/genre';
