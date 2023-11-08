/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CinemaEntity } from '../../models/cinema-entity';
import { UpdateCinemaDto } from '../../models/update-cinema-dto';

export interface CinemaControllerUpdate$Params {

/**
 * Cinema's ID
 */
  id: number;
      body: UpdateCinemaDto
}

export function cinemaControllerUpdate(http: HttpClient, rootUrl: string, params: CinemaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

cinemaControllerUpdate.PATH = '/cinema/{id}';
