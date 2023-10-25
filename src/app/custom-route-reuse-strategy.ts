import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldReuseRoute() {
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null; // Ne pas réutiliser de route, retourne null
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false; // Ne pas réattacher de route
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false; // Ne pas détacher de route
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    // Ne rien faire ici, car nous ne réutilisons pas les routes
  }
}
