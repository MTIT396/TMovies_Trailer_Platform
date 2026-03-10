"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import TVCard from "../TVCard";
import { TVDetail } from "@/types/tv";

export type SwiperTVSeriesProps = {
  TVseries: TVDetail[];
  isLoading?: boolean;
};

const SwiperTVSeries = ({ TVseries, isLoading }: SwiperTVSeriesProps) => {
  return (
    <Swiper
      breakpoints={{
        330: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 80,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerGroup={4}
      speed={600}
      // loop
      navigation
      grabCursor={true}
      className="movies-swiper"
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        TVseries.map((tv, index) => (
          <SwiperSlide key={index}>
            <TVCard
              TVseries={tv}
              index={index}
              showActions
              size="large"
              numberedStyle="diamond"
            />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default SwiperTVSeries;
