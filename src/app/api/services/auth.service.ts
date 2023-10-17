/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerGoogleCallback } from '../fn/auth/auth-controller-google-callback';
import { AuthControllerGoogleCallback$Params } from '../fn/auth/auth-controller-google-callback';
import { authControllerLogout } from '../fn/auth/auth-controller-logout';
import { AuthControllerLogout$Params } from '../fn/auth/auth-controller-logout';
import { authControllerMicrosoftCallback } from '../fn/auth/auth-controller-microsoft-callback';
import { AuthControllerMicrosoftCallback$Params } from '../fn/auth/auth-controller-microsoft-callback';
import { authControllerRefresh } from '../fn/auth/auth-controller-refresh';
import { AuthControllerRefresh$Params } from '../fn/auth/auth-controller-refresh';
import { authControllerSignIn } from '../fn/auth/auth-controller-sign-in';
import { AuthControllerSignIn$Params } from '../fn/auth/auth-controller-sign-in';
import { authControllerSignUp } from '../fn/auth/auth-controller-sign-up';
import { AuthControllerSignUp$Params } from '../fn/auth/auth-controller-sign-up';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerSignUp()` */
  static readonly AuthControllerSignUpPath = '/auth/sign-up';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp$Response(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerSignUp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<void> {
    return this.authControllerSignUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerSignIn()` */
  static readonly AuthControllerSignInPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignIn()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerSignIn$Response(params?: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerSignIn(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignIn$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerSignIn(params?: AuthControllerSignIn$Params, context?: HttpContext): Observable<void> {
    return this.authControllerSignIn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerLogout()` */
  static readonly AuthControllerLogoutPath = '/auth/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogout$Response(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerLogout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogout(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<void> {
    return this.authControllerLogout$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerRefresh()` */
  static readonly AuthControllerRefreshPath = '/auth/refresh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerRefresh()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefresh$Response(params?: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerRefresh(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerRefresh$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefresh(params?: AuthControllerRefresh$Params, context?: HttpContext): Observable<void> {
    return this.authControllerRefresh$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerGoogleCallback()` */
  static readonly AuthControllerGoogleCallbackPath = '/auth/google/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerGoogleCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleCallback$Response(params?: AuthControllerGoogleCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerGoogleCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerGoogleCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleCallback(params?: AuthControllerGoogleCallback$Params, context?: HttpContext): Observable<void> {
    return this.authControllerGoogleCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerMicrosoftCallback()` */
  static readonly AuthControllerMicrosoftCallbackPath = '/auth/microsoft/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerMicrosoftCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerMicrosoftCallback$Response(params?: AuthControllerMicrosoftCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerMicrosoftCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerMicrosoftCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerMicrosoftCallback(params?: AuthControllerMicrosoftCallback$Params, context?: HttpContext): Observable<void> {
    return this.authControllerMicrosoftCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
