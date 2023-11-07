/* tslint:disable */
/* eslint-disable */
import { CinemaEntity } from '../models/cinema-entity';
import { MovieEntity } from '../models/movie-entity';
export interface ScreeningEntity {
  active: boolean;
  availableSeats: number;
  cinema: CinemaEntity;
  cinemaId: number;
  createdAt: string;
  end: string;
  id: number;
  initialAvailableSeats: number;
  movie: MovieEntity;
  movieId: number;
  start: string;
  updatedAt: string;
}
