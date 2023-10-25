/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {genreControllerCreate, GenreControllerCreate$Params} from '../fn/genre/genre-controller-create';
import {genreControllerFindAll, GenreControllerFindAll$Params} from '../fn/genre/genre-controller-find-all';
import {genreControllerFindOne, GenreControllerFindOne$Params} from '../fn/genre/genre-controller-find-one';
import {genreControllerRemove, GenreControllerRemove$Params} from '../fn/genre/genre-controller-remove';
import {genreControllerUpdate, GenreControllerUpdate$Params} from '../fn/genre/genre-controller-update';
import {GenreEntity} from '../models/genre-entity';
import {PaginatedResult} from '../models/paginated-result';

@Injectable({ providedIn: 'root' })
export class GenreService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `genreControllerFindAll()` */
  static readonly GenreControllerFindAllPath = '/genre';

  /**
   * Retrieve all genres with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `genreControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerFindAll$Response(params?: GenreControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult & {
'data'?: Array<GenreEntity>;
}>> {
    return genreControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all genres with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `genreControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerFindAll(params?: GenreControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult & {
'data'?: Array<GenreEntity>;
}> {
    return this.genreControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult & {
'data'?: Array<GenreEntity>;
}>): PaginatedResult & {
'data'?: Array<GenreEntity>;
} => r.body)
    );
  }

  /** Path part for operation `genreControllerCreate()` */
  static readonly GenreControllerCreatePath = '/genre';

  /**
   * Create a new genre.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `genreControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  genreControllerCreate$Response(params: GenreControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
    return genreControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new genre.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `genreControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  genreControllerCreate(params: GenreControllerCreate$Params, context?: HttpContext): Observable<GenreEntity> {
    return this.genreControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<GenreEntity>): GenreEntity => r.body)
    );
  }

  /** Path part for operation `genreControllerFindOne()` */
  static readonly GenreControllerFindOnePath = '/genre/{id}';

  /**
   * Retrieve a genre by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `genreControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerFindOne$Response(params: GenreControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
    return genreControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a genre by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `genreControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerFindOne(params: GenreControllerFindOne$Params, context?: HttpContext): Observable<GenreEntity> {
    return this.genreControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<GenreEntity>): GenreEntity => r.body)
    );
  }

  /** Path part for operation `genreControllerRemove()` */
  static readonly GenreControllerRemovePath = '/genre/{id}';

  /**
   * Delete a genre by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `genreControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerRemove$Response(params: GenreControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
    return genreControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a genre by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `genreControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  genreControllerRemove(params: GenreControllerRemove$Params, context?: HttpContext): Observable<GenreEntity> {
    return this.genreControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<GenreEntity>): GenreEntity => r.body)
    );
  }

  /** Path part for operation `genreControllerUpdate()` */
  static readonly GenreControllerUpdatePath = '/genre/{id}';

  /**
   * Update a genre by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `genreControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  genreControllerUpdate$Response(params: GenreControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<GenreEntity>> {
    return genreControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a genre by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `genreControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  genreControllerUpdate(params: GenreControllerUpdate$Params, context?: HttpContext): Observable<GenreEntity> {
    return this.genreControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<GenreEntity>): GenreEntity => r.body)
    );
  }

}
