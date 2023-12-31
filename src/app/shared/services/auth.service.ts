import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, map, Observable, of, Subject, take} from "rxjs";
import {AuthWebservice} from "../webservices/auth.webservice";
import {AuthPayload, AuthRequest, BearerPayload, UsernamePayload} from "../models/auth-request.model";
import {ProviderEnum} from "../models/provider.enum";
import {Router} from "@angular/router";
import {UserEntity} from "../../api/models/user-entity";
import {TokenResponseDto} from "../../api/models/token-response-dto";
import {RoleEnum} from "../models/role.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly userSubject: Subject<AuthRequest<AuthPayload>> = new Subject();
  readonly authentificated: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

  private readonly _localStorageKey: string = 'auth';
  private _tokenResponse: TokenResponseDto | undefined;

  get tokenResponse(): TokenResponseDto | undefined {
    return this._tokenResponse;
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === RoleEnum.ADMIN;
  }

  private set tokenResponse(value: TokenResponseDto | undefined) {
    this.storeInLocalStorage(value);
    this._tokenResponse = value;
    this.authentificated.next(true);
  }

  get currentUser(): UserEntity | undefined {
    return this.tokenResponse?.user;
  }

  constructor(private readonly authWebservice: AuthWebservice,
              private readonly router: Router) {
    this.userSubject
      .pipe(
        filter(v => !!v),
        map(v => this.handleNewAuthAndRedirect(v))
      )
      .subscribe(res => this.logTokenResponse(res));

    this.init();
  }

  private init(): void {
    const oldTokenReponse = this.getFromLocalStorage();

    if (!oldTokenReponse?.refresh_token) {
      this.authentificated.next(false);
      return;
    }

    if (this.tokenExpired(oldTokenReponse.refresh_token)) {
      this.authentificated.next(false);
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

  private getFromLocalStorage(): TokenResponseDto | undefined {
    const auth = localStorage.getItem(this._localStorageKey);

    if (auth && auth !== "undefined") {
      return JSON.parse(auth);
    }

    return undefined;
  }

  private storeInLocalStorage(tokenResponse: TokenResponseDto | undefined): void {
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

  private logTokenResponse(user: Observable<{ redirect: boolean, tokenResponse: TokenResponseDto }>): void {
    user
      .pipe(take(1), filter(v => !!v))
      .subscribe(v => {
        this.tokenResponse = v.tokenResponse;

        if (v.redirect) {
          this.router.navigate(['home']);
        }
      });
  }

  private handleNewAuthAndRedirect(authRequest: AuthRequest<AuthPayload>): Observable<{ redirect: boolean, tokenResponse: TokenResponseDto }> {
    return this.handleNewAuth(authRequest)
      .pipe(map(v => ({
        redirect: authRequest.redirect,
        tokenResponse: v
      })));
  }

  private handleNewAuth(authRequest: AuthRequest<AuthPayload>): Observable<TokenResponseDto> {
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
    return of({} as TokenResponseDto);
  }

  private handleGoogleAuth(payload: BearerPayload): Observable<TokenResponseDto> {
    return this.authWebservice.getGoogleToken(payload.token);
  }

  private handleMicrosoftAuth(payload: BearerPayload): Observable<TokenResponseDto> {
    return this.authWebservice.getMicrosoftToken(payload.token);
  }

  private handleLocalAuth(payload: UsernamePayload): Observable<TokenResponseDto> {
    return this.authWebservice.getToken(payload);
  }

  private handleRefreshAuth(payload: BearerPayload): Observable<TokenResponseDto> {
    return this.authWebservice.refreshToken(payload.token);
  }

  public logout(): void {
    if (this.tokenResponse?.access_token) {
      this.authWebservice
        .logout(this.tokenResponse.access_token)
        .subscribe(() => {
          this.tokenResponse = undefined;
          this.router.navigate(['home']);
        })
    }
  }

  public updateUser(user: UserEntity): void {
    if (!this._tokenResponse || !user) {
      return;
    }

    this._tokenResponse.user = user;
    this.storeInLocalStorage(this._tokenResponse);
  }
}
