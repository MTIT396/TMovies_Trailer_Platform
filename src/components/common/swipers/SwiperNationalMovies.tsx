import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";
export type SwiperNationalMoviesProps = {
  movies: Movie[];
  isLoading?: boolean;
};
const SwiperNationalMovies = ({
  movies,
  isLoading,
}: SwiperNationalMoviesProps) => {
  if (isLoading) {
    return (
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`skel-${i}`} className="min-w-[180px]">
              <MovieCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 12,
          slidesPerGroup: 2,
        },
        420: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 180,
          slidesPerGroup: 3,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 80,
          slidesPerGroup: 4,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      speed={600}
      navigation
      grabCursor
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <MovieCard movie={movie} index={index} size="large" showActions />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperNationalMovies;
