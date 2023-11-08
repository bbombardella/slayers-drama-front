import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private readonly exception: RegExp = new RegExp('auth\/[a-zA-Z]+');

  private authService: AuthService | undefined;

  constructor(private readonly injector: Injector) {
    setTimeout(() => {
      this.authService = this.injector.get(AuthService);
    })
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService?.tokenResponse?.access_token
      && !request.url.match(this.exception)) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${this.authService.tokenResponse.access_token}`}
      });
    }

    return next.handle(request);
  }
}
