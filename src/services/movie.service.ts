import { apiClient } from "@/lib/axios";
import { Genre, MovieDetail, MovieResponse } from "@/types/movie";

export const movieServices = {
  getPopularMovies: async (page = 1) =>
    apiClient.get<MovieResponse>(`/tmdb/movie/popular?page=${page}`),

  getUpcomingMovies: async (page = 1) =>
    apiClient.get<MovieResponse>(`/tmdb/movie/upcoming?page=${page}`),

  getNowPlayingMovies: async (page = 1) =>
    apiClient.get<MovieResponse>(`/tmdb/movie/now_playing?page=${page}`),

  getTopRatedMovies: async (page = 1) =>
    apiClient.get<MovieResponse>(`/tmdb/movie/top_rated?page=${page}`),

  getMovieDetail: async (
    id: string | number,
    appendToResponse = "credits,videos,similar,reviews",
  ) =>
    apiClient.get<MovieDetail>(
      `/tmdb/movie/${id}?append_to_response=${appendToResponse}`,
    ),

  getTVDetail: async (
    id: string | number,
    appendToResponse = "credits,videos,similar,reviews",
  ) => apiClient.get(`/tmdb/tv/${id}?append_to_response=${appendToResponse}`),

  searchMovies: async (query: string, page = 1) =>
    apiClient.get<MovieResponse>(
      `/tmdb/search/movie?query=${query}&page=${page}`,
    ),

  getGenres: async () =>
    apiClient.get<{ genres: Genre[] }>(`/tmdb/genre/movie/list`),

  getMoviesByCountry: async (countryCode = "KR", page = 1) =>
    apiClient.get<MovieResponse>(
      `/tmdb/discover/movie?with_origin_country=${countryCode}&page=${page}&sort_by=popularity.desc`,
    ),

  getTVbyCountry: async (countryCode = "KR", page = 1) =>
    apiClient.get(
      `/tmdb/discover/tv?with_origin_country=${countryCode}&page=${page}&sort_by=popularity.desc`,
    ),

  getMoviesByGenre: async (genreId: number, page = 1) =>
    apiClient.get<MovieResponse>(
      `/tmdb/discover/movie?with_genres=${genreId}&page=${page}&sort_by=popularity.desc`,
    ),
};
