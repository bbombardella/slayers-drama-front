/* tslint:disable */
/* eslint-disable */
import { GroupedScreeningDto } from '../models/grouped-screening-dto';
import { ImageEntity } from '../models/image-entity';
export interface CinemaMoviesDetailsDto {
  budget: number;
  createdAt: string;
  id: number;
  overview: string;
  popularity: number;
  poster: ImageEntity;
  posterImageId: number;
  published: boolean;
  releaseDate: string;
  screenings: GroupedScreeningDto;
  tagline: string;
  title: string;
  tmdbId: number;
  updatedAt: string;
  voteAverage: number;
}
