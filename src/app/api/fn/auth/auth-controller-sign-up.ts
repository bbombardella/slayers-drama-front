/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignUpDto } from '../../models/sign-up-dto';
import { UserEntity } from '../../models/user-entity';

export interface AuthControllerSignUp$Params {
      body: SignUpDto
}

export function authControllerSignUp(http: HttpClient, rootUrl: string, params: AuthControllerSignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<UserEntity>> {
  const rb = new RequestBuilder(rootUrl, authControllerSignUp.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserEntity>;
    })
  );
}

authControllerSignUp.PATH = '/auth/sign-up';
