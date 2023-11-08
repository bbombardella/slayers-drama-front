/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserDto } from '../../models/update-user-dto';
import { UserEntity } from '../../models/user-entity';

export interface AuthControllerUpdate$Params {
  id: number;
      body: UpdateUserDto
}

export function authControllerUpdate(http: HttpClient, rootUrl: string, params: AuthControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<UserEntity>> {
  const rb = new RequestBuilder(rootUrl, authControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

authControllerUpdate.PATH = '/auth/{id}';
