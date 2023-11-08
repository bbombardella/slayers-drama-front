/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ScreeningEntity } from '../../models/screening-entity';
import { UpdateScreeningDto } from '../../models/update-screening-dto';

export interface ScreeningControllerUpdate$Params {

/**
 * Screening's ID
 */
  id: number;
      body: UpdateScreeningDto
}

export function screeningControllerUpdate(http: HttpClient, rootUrl: string, params: ScreeningControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ScreeningEntity>> {
  const rb = new RequestBuilder(rootUrl, screeningControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

screeningControllerUpdate.PATH = '/screening/{id}';
