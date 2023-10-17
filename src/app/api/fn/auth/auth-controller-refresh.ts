/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenResponseDto } from '../../models/token-response-dto';

export interface AuthControllerRefresh$Params {
}

export function authControllerRefresh(http: HttpClient, rootUrl: string, params?: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authControllerRefresh.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TokenResponseDto>;
    })
  );
}

authControllerRefresh.PATH = '/auth/refresh';
