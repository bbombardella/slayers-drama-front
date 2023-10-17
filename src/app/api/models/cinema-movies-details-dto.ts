/* tslint:disable */
/* eslint-disable */
import { GroupedScreeningDto } from '../models/grouped-screening-dto';
export interface CinemaMoviesDetailsDto {
  budget: number;
  createdAt: string;
  id: number;
  overview: string;
  popularity: number;
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
