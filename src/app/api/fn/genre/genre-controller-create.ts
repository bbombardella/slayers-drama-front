/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {CreateGenreDto} from '../../models/create-genre-dto';
import {GenreEntity} from '../../models/genre-entity';

export interface GenreControllerCreate$Params {
      body: CreateGenreDto
}

export function genreControllerCreate(http: HttpClient, rootUrl: string, params: GenreControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
  const rb = new RequestBuilder(rootUrl, genreControllerCreate.PATH, 'post');
  if (params) {
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

genreControllerCreate.PATH = '/genre';
