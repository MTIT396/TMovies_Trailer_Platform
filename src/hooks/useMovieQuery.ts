import { useQuery } from "@tanstack/react-query";
import { movieServices } from "@/services/movie.service";
import { MOVIE_QUERY_KEYS } from "@/lib/constant";

export const usePopularMovies = (page = 1) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.popular(page),
    queryFn: async () => {
      const response = await movieServices.getPopularMovies(page);
      return response.data;
    },
  });
};

export const useNowPlayingMovies = (page = 1) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.now_playing(page),
    queryFn: async () => {
      const response = await movieServices.getNowPlayingMovies(page);
      return response.data;
    },
  });
};

export const useMovieDetail = (id: number | string) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.detail(id),
    queryFn: async () => {
      const response = await movieServices.getMovieDetail(id);
      return response.data;
    },
    enabled: !!id,
  });
};
export const useTVDetail = (id: number | string) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.tv_detail(id),
    queryFn: async () => {
      const response = await movieServices.getTVDetail(id);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useMoviesByGenre = (id: number, page: number) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.movie_by_genre(id, page),
    queryFn: async () => {
      const response = await movieServices.getMoviesByGenre(id, page);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useMoviesByCountry = (countryCode: string, page?: number) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.nation(countryCode),
    queryFn: async () => {
      const response = await movieServices.getMoviesByCountry(
        countryCode,
        page,
      );
      return response.data;
    },
    enabled: !!countryCode,
  });
};

export const useTVByCountry = (countryCode: string) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.tv(countryCode),
    queryFn: async () => {
      const response = await movieServices.getTVbyCountry(countryCode);
      return response.data;
    },
    enabled: !!countryCode,
  });
};

export const useSearchMovies = (query: string, page = 1) => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.search(query, page),
    queryFn: async () => {
      const response = await movieServices.searchMovies(query, page);
      return response.data;
    },
    enabled: !!query,
  });
};

export const useGenres = () => {
  return useQuery({
    queryKey: MOVIE_QUERY_KEYS.genres,
    queryFn: async () => {
      const response = await movieServices.getGenres();
      return response.data.genres;
    },
    staleTime: 1000 * 60 * 60,
  });
};
