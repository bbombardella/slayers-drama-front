/* tslint:disable */
/* eslint-disable */
import { GenreEntity } from '../models/genre-entity';
import { GroupedScreeningDto } from '../models/grouped-screening-dto';
import { ImageEntity } from '../models/image-entity';
import { ScreeningEntity } from '../models/screening-entity';
export interface CinemaMoviesDetailsDto {
  budget: number;
  createdAt: string;
  duration: number;
  genres: Array<GenreEntity>;
  id: number;
  overview: string;
  popularity: number;
  poster: ImageEntity;
  posterImageId: number;
  published: boolean;
  releaseDate: string;
  screening: Array<ScreeningEntity>;
  screenings: GroupedScreeningDto;
  tagline: string;
  title: string;
  tmdbId: number;
  updatedAt: string;
  voteAverage: number;
}
