/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {PaginatedResult} from '../models/paginated-result';
import {
  reservationControllerFindAll,
  ReservationControllerFindAll$Params
} from '../fn/reservation/reservation-controller-find-all';
import {
  reservationControllerFindOne,
  ReservationControllerFindOne$Params
} from '../fn/reservation/reservation-controller-find-one';
import {ReservationEntity} from '../models/reservation-entity';

@Injectable({ providedIn: 'root' })
export class ReservationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `reservationControllerFindAll()` */
  static readonly ReservationControllerFindAllPath = '/reservation';

  /**
   * Retrieve all reservations with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reservationControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  reservationControllerFindAll$Response(params?: ReservationControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<ReservationEntity>;
}>> {
    return reservationControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all reservations with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reservationControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reservationControllerFindAll(params?: ReservationControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<ReservationEntity>;
}> {
    return this.reservationControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<ReservationEntity>;
}>): PaginatedResult & {
'data'?: Array<ReservationEntity>;
} => r.body)
    );
  }

  /** Path part for operation `reservationControllerFindOne()` */
  static readonly ReservationControllerFindOnePath = '/reservation/{id}';

  /**
   * Retrieve a reservation by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reservationControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  reservationControllerFindOne$Response(params: ReservationControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationEntity>> {
    return reservationControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a reservation by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reservationControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reservationControllerFindOne(params: ReservationControllerFindOne$Params, context?: HttpContext): Observable<ReservationEntity> {
    return this.reservationControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationEntity>): ReservationEntity => r.body)
    );
  }

}
