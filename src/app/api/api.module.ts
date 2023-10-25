/* tslint:disable */
/* eslint-disable */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfiguration, ApiConfigurationParams} from './api-configuration';

import {AuthService} from './services/auth.service';
import {MovieService} from './services/movie.service';
import {GenreService} from './services/genre.service';
import {CinemaService} from './services/cinema.service';
import {ScreeningService} from './services/screening.service';
import {ApiService} from './services/api.service';
import {OrderService} from './services/order.service';
import {ReservationService} from './services/reservation.service';
import {ProductService} from './services/product.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    MovieService,
    GenreService,
    CinemaService,
    ScreeningService,
    ApiService,
    OrderService,
    ReservationService,
    ProductService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
