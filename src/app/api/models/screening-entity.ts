/* tslint:disable */
/* eslint-disable */
import {CinemaEntity} from '../models/cinema-entity';

export interface ScreeningEntity {
  cinema: CinemaEntity;
  cinemaId: number;
  createdAt: string;
  end: string;
  id: number;
  initialAvailableSeats: number;
  movieId: number;
  start: string;
  updatedAt: string;
}
