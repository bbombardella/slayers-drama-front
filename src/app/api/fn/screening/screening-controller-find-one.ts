/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ScreeningEntity } from '../../models/screening-entity';

export interface ScreeningControllerFindOne$Params {

/**
 * Screening's ID
 */
  id: number;
}

export function screeningControllerFindOne(http: HttpClient, rootUrl: string, params: ScreeningControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<ScreeningEntity>> {
  const rb = new RequestBuilder(rootUrl, screeningControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ScreeningEntity>;
    })
  );
}

screeningControllerFindOne.PATH = '/screening/{id}';
