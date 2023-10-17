/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenResponseDto } from '../../models/token-response-dto';

export interface AuthControllerMicrosoftCallback$Params {
}

export function authControllerMicrosoftCallback(http: HttpClient, rootUrl: string, params?: AuthControllerMicrosoftCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authControllerMicrosoftCallback.PATH, 'get');
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

authControllerMicrosoftCallback.PATH = '/auth/microsoft/login';
