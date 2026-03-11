import axios from "axios";

export const tmdbServer = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "vi-VN",
  },
});

tmdbServer.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      return Promise.resolve({ data: null, status: 200 });
    }
    return Promise.reject(error);
  },
);
