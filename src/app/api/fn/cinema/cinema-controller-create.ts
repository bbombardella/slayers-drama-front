/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {StrictHttpResponse} from '../../strict-http-response';
import {RequestBuilder} from '../../request-builder';

import {CinemaEntity} from '../../models/cinema-entity';
import {CreateCinemaDto} from '../../models/create-cinema-dto';

export interface CinemaControllerCreate$Params {
      body: CreateCinemaDto
}

export function cinemaControllerCreate(http: HttpClient, rootUrl: string, params: CinemaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<CinemaEntity>> {
  const rb = new RequestBuilder(rootUrl, cinemaControllerCreate.PATH, 'post');
  if (params) {
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

cinemaControllerCreate.PATH = '/cinema';
