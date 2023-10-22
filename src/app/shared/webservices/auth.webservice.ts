import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {TokenResponse} from "../models/token-response.model";
import {UsernamePayload} from "../models/auth-request.model";

@Injectable({
  providedIn: 'root'
})
export class AuthWebservice {
  private readonly root: string = `${environment.api.baseUrl}/auth`

  constructor(private readonly http: HttpClient) {
  }

  getToken(payload: UsernamePayload): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.root}/login`, payload);
  }

  getGoogleToken(googleToken: string): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${this.root}/google/login`, {
        headers: {
          Authorization: `Bearer ${googleToken}`
        }
      }
    )
  }

  getMicrosoftToken(microsoftToken: string): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${this.root}/microsoft/login`, {
        headers: {
          Authorization: `Bearer ${microsoftToken}`
        }
      }
    )
  }

  refreshToken(refreshToken: string): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${this.root}/refresh`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      }
    )
  }

  logout(token: string): Observable<void> {
    return this.http.delete<void>(`${this.root}/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
