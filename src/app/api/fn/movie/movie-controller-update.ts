/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {MovieEntity} from '../../models/movie-entity';
import {UpdateMovieDto} from '../../models/update-movie-dto';

export interface MovieControllerUpdate$Params {

/**
 * Movie's ID
 */
  id: number;
      body: UpdateMovieDto
}

export function movieControllerUpdate(http: HttpClient, rootUrl: string, params: MovieControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
  const rb = new RequestBuilder(rootUrl, movieControllerUpdate.PATH, 'patch');
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

movieControllerUpdate.PATH = '/movie/{id}';
