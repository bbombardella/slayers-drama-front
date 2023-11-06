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
import { authControllerUpdate } from '../fn/auth/auth-controller-update';
import { AuthControllerUpdate$Params } from '../fn/auth/auth-controller-update';
import { TokenResponseDto } from '../models/token-response-dto';
import { UserEntity } from '../models/user-entity';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerSignUp()` */
  static readonly AuthControllerSignUpPath = '/auth/sign-up';

  /**
   * Create an user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp$Response(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<UserEntity>> {
    return authControllerSignUp(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<UserEntity> {
    return this.authControllerSignUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserEntity>): UserEntity => r.body)
    );
  }

  /** Path part for operation `authControllerSignIn()` */
  static readonly AuthControllerSignInPath = '/auth/login';

  /**
   * Login via login/password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignIn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn$Response(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
    return authControllerSignIn(this.http, this.rootUrl, params, context);
  }

  /**
   * Login via login/password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<TokenResponseDto> {
    return this.authControllerSignIn$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponseDto>): TokenResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerLogout()` */
  static readonly AuthControllerLogoutPath = '/auth/logout';

  /**
   * Disconnect user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogout$Response(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerLogout(this.http, this.rootUrl, params, context);
  }

  /**
   * Disconnect user.
   *
   *
   *
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
   * Create new token thanks to refresh token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerRefresh()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefresh$Response(params?: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
    return authControllerRefresh(this.http, this.rootUrl, params, context);
  }

  /**
   * Create new token thanks to refresh token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerRefresh$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefresh(params?: AuthControllerRefresh$Params, context?: HttpContext): Observable<TokenResponseDto> {
    return this.authControllerRefresh$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponseDto>): TokenResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerGoogleCallback()` */
  static readonly AuthControllerGoogleCallbackPath = '/auth/google/login';

  /**
   * Login via Google provider.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerGoogleCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleCallback$Response(params?: AuthControllerGoogleCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
    return authControllerGoogleCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * Login via Google provider.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerGoogleCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleCallback(params?: AuthControllerGoogleCallback$Params, context?: HttpContext): Observable<TokenResponseDto> {
    return this.authControllerGoogleCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponseDto>): TokenResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerMicrosoftCallback()` */
  static readonly AuthControllerMicrosoftCallbackPath = '/auth/microsoft/login';

  /**
   * Login via Microsoft provider.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerMicrosoftCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerMicrosoftCallback$Response(params?: AuthControllerMicrosoftCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenResponseDto>> {
    return authControllerMicrosoftCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * Login via Microsoft provider.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerMicrosoftCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerMicrosoftCallback(params?: AuthControllerMicrosoftCallback$Params, context?: HttpContext): Observable<TokenResponseDto> {
    return this.authControllerMicrosoftCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenResponseDto>): TokenResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerUpdate()` */
  static readonly AuthControllerUpdatePath = '/auth/{id}';

  /**
   * Update an user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerUpdate$Response(params: AuthControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<UserEntity>> {
    return authControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerUpdate(params: AuthControllerUpdate$Params, context?: HttpContext): Observable<UserEntity> {
    return this.authControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserEntity>): UserEntity => r.body)
    );
  }

}
