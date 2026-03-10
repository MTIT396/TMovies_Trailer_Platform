import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
//  axios instance
export const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "vi-VN", // default VN
  },
});

tmdbApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      return Promise.resolve({ data: null, status: 200 });
    }
    return Promise.reject(error);
  },
);
