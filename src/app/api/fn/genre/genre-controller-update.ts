/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {GenreEntity} from '../../models/genre-entity';
import {UpdateGenreDto} from '../../models/update-genre-dto';

export interface GenreControllerUpdate$Params {

/**
 * Genre's ID
 */
  id: number;
      body: UpdateGenreDto
}

export function genreControllerUpdate(http: HttpClient, rootUrl: string, params: GenreControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
  const rb = new RequestBuilder(rootUrl, genreControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GenreEntity>;
    })
  );
}

genreControllerUpdate.PATH = '/genre/{id}';
