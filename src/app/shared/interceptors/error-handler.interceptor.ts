import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private readonly snackBar: MatSnackBar) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.snackBar.open("Accès non autorisé", 'OK', {duration: 5 * 1000});
        } else {
          this.snackBar.open("Une erreur s'est produite", 'OK', {duration: 5 * 1000});
        }

        throw error;
      })
    );
  }
}
