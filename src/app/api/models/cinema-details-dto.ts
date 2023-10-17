/* tslint:disable */
/* eslint-disable */
import { CinemaEntity } from '../models/cinema-entity';
import { CinemaMoviesDetailsDto } from '../models/cinema-movies-details-dto';
export interface CinemaDetailsDto {
  cinema: CinemaEntity;
  movies: Array<CinemaMoviesDetailsDto>;
}
