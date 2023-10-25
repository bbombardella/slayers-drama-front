/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GenreEntity } from '../../models/genre-entity';

export interface GenreControllerFindOne$Params {

/**
 * Genre's ID
 */
  id: number;
}

export function genreControllerFindOne(http: HttpClient, rootUrl: string, params: GenreControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
  const rb = new RequestBuilder(rootUrl, genreControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

genreControllerFindOne.PATH = '/genre/{id}';
