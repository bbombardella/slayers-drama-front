/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginDto } from '../../models/login-dto';
import { TokenResponseDto } from '../../models/token-response-dto';

export interface AuthControllerSignIn$Params {
      body: LoginDto
}

export function authControllerSignIn(http: HttpClient, rootUrl: string, params: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authControllerSignIn.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

authControllerSignIn.PATH = '/auth/login';
