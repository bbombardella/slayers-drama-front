/* tslint:disable */
/* eslint-disable */
import { GenreEntity } from '../models/genre-entity';
import { ImageEntity } from '../models/image-entity';
export interface MovieEntity {
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
  tagline: string;
  title: string;
  tmdbId: number;
  updatedAt: string;
  voteAverage: number;
}
