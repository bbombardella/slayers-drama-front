import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {filter, map} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const snackBar: MatSnackBar = inject(MatSnackBar);
    const router: Router = inject(Router);

    return authService.authentificated.pipe(
      filter(v => v !== null),
      map(v => {
        if (!v) {
          return handleNotAllowed(snackBar, router);
        }

        if (!authService.currentUser?.id) {
          return handleNotAllowed(snackBar, router);
        }

        if (route.data['roles']
          && !(route.data['roles'] as string[]).some(role => authService.currentUser?.role === role)) {
          return handleNotAllowed(snackBar, router);
        }

        return v;
      })
    );
  };

function handleNotAllowed(snackBar: MatSnackBar, router: Router): boolean {
  snackBar.open("Vous n'avez pas accès à cette ressource", 'OK', {duration: 5 * 1000});
  router.navigate(['/home']);
  return false;
}
