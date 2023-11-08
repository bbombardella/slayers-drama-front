/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenResponseDto } from '../../models/token-response-dto';

export interface AuthControllerGoogleCallback$Params {
}

export function authControllerGoogleCallback(http: HttpClient, rootUrl: string, params?: AuthControllerGoogleCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authControllerGoogleCallback.PATH, 'get');
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

authControllerGoogleCallback.PATH = '/auth/google/login';
