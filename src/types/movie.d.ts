export interface Movie {
  id: number;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
}

export interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  tagline: string;
  status: string;

  poster_path: string | null;
  backdrop_path: string | null;

  release_date: string;
  runtime: number | null;
  budget: number;
  revenue: number;
  homepage: string | null;

  genres: Genre[];

  belongs_to_collection: BelongsToCollection | null;

  original_language: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  similar: MovieResponse;
  reviews: MovieResponse;

  vote_average: number;
  vote_count: number;
  popularity: number;

  credits?: Credits;
  videos?: VideosResponse;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}
export interface MovieResponse {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
