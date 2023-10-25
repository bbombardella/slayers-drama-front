import {Injectable} from "@angular/core";
import {filter, map, Observable, of, Subject, take} from "rxjs";
import {AuthWebservice} from "../webservices/auth.webservice";
import {AuthPayload, AuthRequest, BearerPayload, UsernamePayload} from "../models/auth-request.model";
import {ProviderEnum} from "../models/provider.enum";
import {TokenResponse} from "../models/token-response.model";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly userSubject: Subject<AuthRequest<AuthPayload>> = new Subject();

  private readonly _localStorageKey: string = 'auth';
  private _tokenResponse: TokenResponse | undefined;

  private get tokenResponse(): TokenResponse | undefined {
    return this._tokenResponse;
  }

  private set tokenResponse(value: TokenResponse | undefined) {
    this.storeInLocalStorage(value);
    this._tokenResponse = value;
  }

  get currentUser(): User | undefined {
    return this.tokenResponse?.user;
  }

  constructor(private readonly authWebservice: AuthWebservice,
              private readonly router: Router) {
    this.userSubject
      .pipe(map(v => this.handleNewAuthAndRedirect(v)))
      .subscribe(res => this.logTokenResponse(res));

    this.init();
  }

  private init(): void {
    const oldTokenReponse = this.getFromLocalStorage();

    if (!oldTokenReponse?.refresh_token) {
      return;
    }

    if (this.tokenExpired(oldTokenReponse.refresh_token)) {
      return;
    }

    this.userSubject.next({
      provider: ProviderEnum.REFRESH,
      payload: {
        token: oldTokenReponse.refresh_token
      },
      redirect: false
    });
  }

  private getFromLocalStorage(): TokenResponse | undefined {
    const auth = localStorage.getItem(this._localStorageKey);

    if (auth && auth !== "undefined") {
      return JSON.parse(auth);
    }

    return undefined;
  }

  private storeInLocalStorage(tokenResponse: TokenResponse | undefined): void {
    if (!tokenResponse) {
      localStorage.removeItem(this._localStorageKey);
    }

    localStorage.setItem(
      this._localStorageKey,
      JSON.stringify(tokenResponse)
    );
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  private logTokenResponse(user: Observable<{ redirect: boolean, tokenResponse: TokenResponse }>): void {
    user
      .pipe(take(1), filter(v => !!v))
      .subscribe(v => {
        this.tokenResponse = v.tokenResponse;

        if (v.redirect) {
          this.router.navigate(['home']);
        }
      });
  }

  private handleNewAuthAndRedirect(authRequest: AuthRequest<AuthPayload>): Observable<{ redirect: boolean, tokenResponse: TokenResponse }> {
    return this.handleNewAuth(authRequest)
      .pipe(map(v => ({
        redirect: authRequest.redirect,
        tokenResponse: v
      })));
  }

  private handleNewAuth(authRequest: AuthRequest<AuthPayload>): Observable<TokenResponse> {
    switch (authRequest?.provider) {
      case ProviderEnum.LOCAL:
        return this.handleLocalAuth(authRequest.payload as UsernamePayload);
      case ProviderEnum.GOOGLE:
        return this.handleGoogleAuth(authRequest.payload as BearerPayload);
      case ProviderEnum.MICROSOFT:
        return this.handleMicrosoftAuth(authRequest.payload as BearerPayload);
      case ProviderEnum.REFRESH:
        return this.handleRefreshAuth(authRequest.payload as BearerPayload)
    }

    //TODO handle error
    return of({} as TokenResponse);
  }

  private handleGoogleAuth(payload: BearerPayload): Observable<TokenResponse> {
    return this.authWebservice.getGoogleToken(payload.token);
  }

  private handleMicrosoftAuth(payload: BearerPayload): Observable<TokenResponse> {
    return this.authWebservice.getMicrosoftToken(payload.token);
  }

  private handleLocalAuth(payload: UsernamePayload): Observable<TokenResponse> {
    return this.authWebservice.getToken(payload);
  }

  private handleRefreshAuth(payload: BearerPayload): Observable<TokenResponse> {
    return this.authWebservice.refreshToken(payload.token);
  }

  public logout(): void {
    if (this.tokenResponse?.access_token) {
      this.authWebservice
        .logout(this.tokenResponse.access_token)
        .subscribe(() => this.tokenResponse = undefined)
    }
  }
}
