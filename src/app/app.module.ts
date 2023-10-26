import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./shared/ui/navbar/navbar.component";
import {CommonModule, registerLocaleData} from "@angular/common";
import {ApiModule} from "./api/api.module";
import {environment} from "../environments/environment";
import {MovieModule} from "./movie/movie.module";
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./custom-route-reuse-strategy";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {Storage} from "@ionic/storage-angular";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {JwtInterceptor} from "./shared/interceptors/jwt.interceptor";
import {ErrorHandlerInterceptor} from "./shared/interceptors/error-handler.interceptor";
import localeFr from '@angular/common/locales/fr';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {FrenchMatPaginatorIntl} from "./shared/translations/french-paginator.translation";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarComponent,
    MovieModule,
    CommonModule,
    ApiModule.forRoot({rootUrl: environment.api.baseUrl}),
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    Storage,
    {provide: MatPaginatorIntl, useClass: FrenchMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

