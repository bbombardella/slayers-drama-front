/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {GenreEntity} from '../../models/genre-entity';

export interface GenreControllerRemove$Params {

/**
 * Genre's ID
 */
  id: number;
}

export function genreControllerRemove(http: HttpClient, rootUrl: string, params: GenreControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
  const rb = new RequestBuilder(rootUrl, genreControllerRemove.PATH, 'delete');
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

genreControllerRemove.PATH = '/genre/{id}';
