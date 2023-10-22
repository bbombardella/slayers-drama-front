/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResult } from '../../models/paginated-result';
import { ReservationEntity } from '../../models/reservation-entity';

export interface ReservationControllerFindAll$Params {
}

export function reservationControllerFindAll(http: HttpClient, rootUrl: string, params?: ReservationControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<ReservationEntity>;
}>> {
  const rb = new RequestBuilder(rootUrl, reservationControllerFindAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResult & {
      'data'?: Array<ReservationEntity>;
      }>;
    })
  );
}

reservationControllerFindAll.PATH = '/reservation';
