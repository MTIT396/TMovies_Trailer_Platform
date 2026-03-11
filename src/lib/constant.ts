export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

export const MOVIE_QUERY_KEYS = {
  popular: (page: number) => ["movies", "popular", page],
  now_playing: (page: number) => ["movies", "now_playing", page],
  detail: (id: number | string) => ["movies", "detail", id],
  tv_detail: (id: number | string) => ["tv", "detail", id],
  tv: (countryCode: string) => ["tv", countryCode],
  movie_by_genre: (id: number) => ["movies", id],
  nation: (countryCode: string) => ["movies", "nation", countryCode],
  search: (query: string, page: number) => ["movies", "search", query, page],
  genres: ["movies", "genres"],
};
