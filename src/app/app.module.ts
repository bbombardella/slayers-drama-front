import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./shared/ui/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import { LogoComponent } from './shared/ui/logo/logo.component';
import {ApiModule} from "./api/api.module";
import {environment} from "../environments/environment";
import {MovieModule} from "./movie/movie.module";
import { ChipComponent } from './shared/ui/chip/chip.component';
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./custom-route-reuse-strategy";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarComponent,
    MovieModule,
    CommonModule,
    ApiModule.forRoot({rootUrl: environment.api.baseUrl}),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

