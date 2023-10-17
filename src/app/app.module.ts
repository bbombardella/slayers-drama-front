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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarComponent,
    CommonModule,
    ApiModule.forRoot({rootUrl: environment.api.baseUrl}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
