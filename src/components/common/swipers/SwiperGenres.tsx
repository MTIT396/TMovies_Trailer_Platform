"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryCard from "../CategoryCard";
import { Genre } from "@/types/movie";
interface SwiperGenresProps {
  genres: Genre[];
}
const SwiperGenres = ({ genres }: SwiperGenresProps) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 16,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
          slidesPerGroup: 5,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 16,
          slidesPerGroup: 6,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      speed={600}
      navigation
      grabCursor
    >
      {genres.map((genre, index) => (
        <SwiperSlide key={index}>
          <CategoryCard genre={genre} key={genre.id} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGenres;
