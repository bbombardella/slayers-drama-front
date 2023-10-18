/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { movieControllerAttachGenre } from '../fn/movie/movie-controller-attach-genre';
import { MovieControllerAttachGenre$Params } from '../fn/movie/movie-controller-attach-genre';
import { movieControllerCreate } from '../fn/movie/movie-controller-create';
import { MovieControllerCreate$Params } from '../fn/movie/movie-controller-create';
import { movieControllerDelete } from '../fn/movie/movie-controller-delete';
import { MovieControllerDelete$Params } from '../fn/movie/movie-controller-delete';
import { movieControllerDetachGenre } from '../fn/movie/movie-controller-detach-genre';
import { MovieControllerDetachGenre$Params } from '../fn/movie/movie-controller-detach-genre';
import { movieControllerFindAll } from '../fn/movie/movie-controller-find-all';
import { MovieControllerFindAll$Params } from '../fn/movie/movie-controller-find-all';
import { movieControllerFindOne } from '../fn/movie/movie-controller-find-one';
import { MovieControllerFindOne$Params } from '../fn/movie/movie-controller-find-one';
import { movieControllerFindOneTmdb } from '../fn/movie/movie-controller-find-one-tmdb';
import { MovieControllerFindOneTmdb$Params } from '../fn/movie/movie-controller-find-one-tmdb';
import { movieControllerGetMostPopular } from '../fn/movie/movie-controller-get-most-popular';
import { MovieControllerGetMostPopular$Params } from '../fn/movie/movie-controller-get-most-popular';
import { movieControllerSearch } from '../fn/movie/movie-controller-search';
import { MovieControllerSearch$Params } from '../fn/movie/movie-controller-search';
import { movieControllerUpdate } from '../fn/movie/movie-controller-update';
import { MovieControllerUpdate$Params } from '../fn/movie/movie-controller-update';
import { movieControllerUpdateImage } from '../fn/movie/movie-controller-update-image';
import { MovieControllerUpdateImage$Params } from '../fn/movie/movie-controller-update-image';
import { movieControllerUpdateImageTmdb } from '../fn/movie/movie-controller-update-image-tmdb';
import { MovieControllerUpdateImageTmdb$Params } from '../fn/movie/movie-controller-update-image-tmdb';
import { MovieDetails } from '../models/movie-details';
import { MovieEntity } from '../models/movie-entity';
import { PaginatedResult } from '../models/paginated-result';

@Injectable({ providedIn: 'root' })
export class MovieService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `movieControllerFindAll()` */
  static readonly MovieControllerFindAllPath = '/movie';

  /**
   * Retrieve all movies with pagination results.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindAll$Response(params?: MovieControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult>> {
    return movieControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve all movies with pagination results.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindAll(params?: MovieControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResult> {
    return this.movieControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult>): PaginatedResult => r.body)
    );
  }

  /** Path part for operation `movieControllerFindOneTmdb()` */
  static readonly MovieControllerFindOneTmdbPath = '/movie/tmdb/{id}';

  /**
   * Retrieve movie information from The Movie Database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerFindOneTmdb()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindOneTmdb$Response(params: MovieControllerFindOneTmdb$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieDetails>> {
    return movieControllerFindOneTmdb(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve movie information from The Movie Database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerFindOneTmdb$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindOneTmdb(params: MovieControllerFindOneTmdb$Params, context?: HttpContext): Observable<MovieDetails> {
    return this.movieControllerFindOneTmdb$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieDetails>): MovieDetails => r.body)
    );
  }

  /** Path part for operation `movieControllerCreate()` */
  static readonly MovieControllerCreatePath = '/movie/tmdb/{id}';

  /**
   * Create a new movie with data extracted from The Movie Database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerCreate$Response(params: MovieControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new movie with data extracted from The Movie Database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerCreate(params: MovieControllerCreate$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerDetachGenre()` */
  static readonly MovieControllerDetachGenrePath = '/movie/{id}/genre';

  /**
   * Remove genres to the movie.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerDetachGenre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerDetachGenre$Response(params: MovieControllerDetachGenre$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerDetachGenre(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove genres to the movie.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerDetachGenre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerDetachGenre(params: MovieControllerDetachGenre$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerDetachGenre$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerAttachGenre()` */
  static readonly MovieControllerAttachGenrePath = '/movie/{id}/genre';

  /**
   * Add new genres to the movie.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerAttachGenre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerAttachGenre$Response(params: MovieControllerAttachGenre$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerAttachGenre(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new genres to the movie.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerAttachGenre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerAttachGenre(params: MovieControllerAttachGenre$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerAttachGenre$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerUpdateImageTmdb()` */
  static readonly MovieControllerUpdateImageTmdbPath = '/movie/{id}/poster/tmdb';

  /**
   * Update movie's poster from The Movie Database.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerUpdateImageTmdb()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerUpdateImageTmdb$Response(params: MovieControllerUpdateImageTmdb$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerUpdateImageTmdb(this.http, this.rootUrl, params, context);
  }

  /**
   * Update movie's poster from The Movie Database.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerUpdateImageTmdb$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerUpdateImageTmdb(params: MovieControllerUpdateImageTmdb$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerUpdateImageTmdb$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerUpdateImage()` */
  static readonly MovieControllerUpdateImagePath = '/movie/{id}/poster';

  /**
   * Update movie's poster.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerUpdateImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerUpdateImage$Response(params: MovieControllerUpdateImage$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerUpdateImage(this.http, this.rootUrl, params, context);
  }

  /**
   * Update movie's poster.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerUpdateImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerUpdateImage(params: MovieControllerUpdateImage$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerUpdateImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerSearch()` */
  static readonly MovieControllerSearchPath = '/movie/search/{query}';

  /**
   * Search movie in database. Results with pagination.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerSearch$Response(params: MovieControllerSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResult>> {
    return movieControllerSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * Search movie in database. Results with pagination.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerSearch(params: MovieControllerSearch$Params, context?: HttpContext): Observable<PaginatedResult> {
    return this.movieControllerSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResult>): PaginatedResult => r.body)
    );
  }

  /** Path part for operation `movieControllerGetMostPopular()` */
  static readonly MovieControllerGetMostPopularPath = '/movie/popular/{count}';

  /**
   * get most popular movies.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerGetMostPopular()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerGetMostPopular$Response(params: MovieControllerGetMostPopular$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<any>>> {
    return movieControllerGetMostPopular(this.http, this.rootUrl, params, context);
  }

  /**
   * get most popular movies.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerGetMostPopular$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerGetMostPopular(params: MovieControllerGetMostPopular$Params, context?: HttpContext): Observable<Array<any>> {
    return this.movieControllerGetMostPopular$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<any>>): Array<any> => r.body)
    );
  }

  /** Path part for operation `movieControllerFindOne()` */
  static readonly MovieControllerFindOnePath = '/movie/{id}';

  /**
   * Retrieve a movie by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindOne$Response(params: MovieControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a movie by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerFindOne(params: MovieControllerFindOne$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerDelete()` */
  static readonly MovieControllerDeletePath = '/movie/{id}';

  /**
   * Delete a movie by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerDelete$Response(params: MovieControllerDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a movie by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  movieControllerDelete(params: MovieControllerDelete$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

  /** Path part for operation `movieControllerUpdate()` */
  static readonly MovieControllerUpdatePath = '/movie/{id}';

  /**
   * Update a movie by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `movieControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerUpdate$Response(params: MovieControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<MovieEntity>> {
    return movieControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a movie by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `movieControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  movieControllerUpdate(params: MovieControllerUpdate$Params, context?: HttpContext): Observable<MovieEntity> {
    return this.movieControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<MovieEntity>): MovieEntity => r.body)
    );
  }

}
