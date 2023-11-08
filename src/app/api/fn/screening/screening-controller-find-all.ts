/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResult } from '../../models/paginated-result';
import { ScreeningEntity } from '../../models/screening-entity';

export interface ScreeningControllerFindAll$Params {
  page?: number;
  perPage?: number;
}

export function screeningControllerFindAll(http: HttpClient, rootUrl: string, params?: ScreeningControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<ScreeningEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, screeningControllerFindAll.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('perPage', params.perPage, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<ScreeningEntity>;
      }>;
    })
  );
}

screeningControllerFindAll.PATH = '/screening';
