/* tslint:disable */
/* eslint-disable */
import {BelongsToCollection} from '../models/belongs-to-collection';

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Array<Array<any>>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Array<any>>;
  production_countries: Array<Array<any>>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<string>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
