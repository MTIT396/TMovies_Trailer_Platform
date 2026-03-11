import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Movie } from "@/types/movie";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import MovieCard from "../MovieCard";

export type SwiperMoviesProps = {
  movies: Movie[];
  isLoading?: boolean;
  numberedStyle?: "big-stroke" | "diamond";
  showActions?: boolean;
};

const SwiperMovies = ({
  movies,
  isLoading,
  numberedStyle = "big-stroke",
  showActions = false,
}: SwiperMoviesProps) => {
  // Movie Query
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
        330: {
          slidesPerView: 2,
          spaceBetween: 12,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 80,
          slidesPerGroup: 4,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 80,
          slidesPerGroup: 4,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      speed={600}
      // loop
      navigation
      grabCursor={true}
      className="movies-swiper"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <MovieCard
            movie={movie}
            index={index}
            numberedStyle={numberedStyle}
            size="medium"
            showActions={showActions}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperMovies;
