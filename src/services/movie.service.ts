import { tmdbApi } from "@/lib/axios";
import { Genre, MovieDetail, MovieResponse } from "@/types/movie";

export const movieServices = {
  // Phổ biến
  getPopularMovies: async (page = 1) =>
    tmdbApi.get<MovieResponse>("/movie/popular", { params: { page } }),

  // Sắp chiếu
  getUpcomingMovies: async (page = 1) =>
    tmdbApi.get<MovieResponse>("/movie/upcoming", { params: { page } }),

  // Đang chiếu
  getNowPlayingMovies: async (page = 1) =>
    tmdbApi.get<MovieResponse>("/movie/now_playing", { params: { page } }),

  // Đánh giá cao
  getTopRatedMovies: async (page = 1) =>
    tmdbApi.get<MovieResponse>("/movie/top_rated", { params: { page } }),

  // Chi tiết phim
  getMovieDetail: async (
    id: string | number,
    appendToResponse = "credits,videos,similar,reviews"
  ) =>
    tmdbApi.get<MovieDetail>(`/movie/${id}`, {
      params: { append_to_response: appendToResponse },
    }),
  // Chi tiết TV
  getTVDetail: async (
    id: string | number,
    appendToResponse = "credits,videos,similar,reviews"
  ) =>
    tmdbApi.get(`/tv/${id}`, {
      params: { append_to_response: appendToResponse },
    }),

  // Tìm kiếm
  searchMovies: async (query: string, page = 1) =>
    tmdbApi.get<MovieResponse>("/search/movie", {
      params: { query, page },
    }),

  // Thể loại
  getGenres: async () => tmdbApi.get<{ genres: Genre[] }>("/genre/movie/list"),

  // Lấy phim theo quốc gia
  getMoviesByCountry: async (countryCode = "KR", page = 1) =>
    tmdbApi.get<MovieResponse>("/discover/movie", {
      params: {
        with_origin_country: countryCode,
        page,
        sort_by: "popularity.desc",
      },
    }),

  // Lấy phim bộ theo quốc gia
  getTVbyCountry: async (countryCode = "KR", page = 1) =>
    tmdbApi.get("/discover/tv", {
      params: {
        with_origin_country: countryCode,
        page,
        sort_by: "popularity.desc",
      },
    }),
  // Lấy phim theo thể loại
  getMoviesByGenre: async (genreId: number, page = 1) =>
    tmdbApi.get<MovieResponse>("/discover/movie", {
      params: {
        with_genres: genreId,
        page,
        sort_by: "popularity.desc",
      },
    }),
};
