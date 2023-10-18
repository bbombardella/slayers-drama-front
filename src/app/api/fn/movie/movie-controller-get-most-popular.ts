/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MovieControllerGetMostPopular$Params {

/**
 * number of movies u want
 */
  count: any;
}

export function movieControllerGetMostPopular(http: HttpClient, rootUrl: string, params: MovieControllerGetMostPopular$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<any>>> {
  const rb = new RequestBuilder(rootUrl, movieControllerGetMostPopular.PATH, 'get');
  if (params) {
    rb.path('count', params.count, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<any>>;
    })
  );
}

movieControllerGetMostPopular.PATH = '/movie/popular/{count}';
