import {Injectable} from "@angular/core";
import {filter, map, Observable, of, Subject, take} from "rxjs";
import {AuthWebservice} from "../webservices/auth.webservice";
import {AuthPayload, AuthRequest, BearerPayload, UsernamePayload} from "../models/auth-request.model";
import {ProviderEnum} from "../models/provider.enum";
import {TokenResponse} from "../models/token-response.model";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly userSubject: Subject<AuthRequest<AuthPayload>> = new Subject();

  private _tokenResponse: TokenResponse | undefined;

  get currentUser(): User | undefined {
    return this._tokenResponse?.user;
  }

  constructor(private readonly authWebservice: AuthWebservice) {
    this.userSubject
      .pipe(map(v => this.handleNewAuth(v)))
      .subscribe(res => this.logTokenResponse(res));
  }

  private logTokenResponse(user: Observable<TokenResponse>): void {
    user
      .pipe(take(1), filter(v => !!v))
      .subscribe(v => this._tokenResponse = v)
  }

  private handleNewAuth(authRequest: AuthRequest<AuthPayload>): Observable<TokenResponse> {
    switch (authRequest?.provider) {
      case ProviderEnum.LOCAL:
        return this.handleLocalAuth(authRequest.payload as UsernamePayload);
      case ProviderEnum.GOOGLE:
        return this.handleGoogleAuth(authRequest.payload as BearerPayload);
      case ProviderEnum.MICROSOFT:
        return this.handleMicrosoftAuth(authRequest.payload as BearerPayload);
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

  public logout(): void {
    if(this._tokenResponse?.access_token) {
      this.authWebservice
        .logout(this._tokenResponse.access_token)
        .subscribe(() => this._tokenResponse = undefined)
    }
  }
}
