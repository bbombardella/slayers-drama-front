import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UsernamePayload} from "../models/auth-request.model";
import {TokenResponseDto} from "../../api/models/token-response-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthWebservice {
  private readonly root: string = `${environment.api.baseUrl}/auth`

  constructor(private readonly http: HttpClient) {
  }

  getToken(payload: UsernamePayload): Observable<TokenResponseDto> {
    return this.http.post<TokenResponseDto>(`${this.root}/login`, payload);
  }

  getGoogleToken(googleToken: string): Observable<TokenResponseDto> {
    return this.http.get<TokenResponseDto>(`${this.root}/google/login`, {
        headers: {
          Authorization: `Bearer ${googleToken}`
        }
      }
    )
  }

  getMicrosoftToken(microsoftToken: string): Observable<TokenResponseDto> {
    return this.http.get<TokenResponseDto>(`${this.root}/microsoft/login`, {
        headers: {
          Authorization: `Bearer ${microsoftToken}`
        }
      }
    )
  }

  refreshToken(refreshToken: string): Observable<TokenResponseDto> {
    return this.http.get<TokenResponseDto>(`${this.root}/refresh`, {
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
