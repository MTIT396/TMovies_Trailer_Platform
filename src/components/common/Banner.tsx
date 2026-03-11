"use client";
import React, { useState } from "react";
import { BiFilm, BiTrendingUp } from "react-icons/bi";
import { FaRegCalendarCheck, FaRegHeart, FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import BannerCard from "@/components/common/BannerCard";
import Play from "./Play";
import { truncateText } from "@/lib/utils";
import { BASE_IMG_URL } from "@/lib/constant";
import BadgeInfo from "./BadgeInfo";
import Image from "next/image";
import { useModalStore } from "@/store/useModalStore";
import Section from "../ui/Section";
import { useNowPlayingMovies } from "@/hooks/useMovieQuery";

const Banner = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Movies Fetching
  const { data: movies } = useNowPlayingMovies();

  const currentMovie = movies?.results[current];

  // Smooth transition effect
  const handleImageChange = (newIndex: number) => {
    if (newIndex === current) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const banners = movies?.results.slice(0, 8) || [];

  const { handlePlayTrailer } = useModalStore();

  return (
    currentMovie && (
      <Section id="hero" className="p-0!">
        <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Images with Fade Effect */}
          <div className="absolute inset-0 opacity-60">
            <Image
              className={`
            w-full h-full object-cover transition-opacity duration-500 ease-in-out
            ${isTransitioning ? "opacity-0" : "opacity-100"}
          `}
              src={BASE_IMG_URL + currentMovie.backdrop_path}
              alt={currentMovie.title}
              fill
              priority
            />
          </div>

          {/* Cinematic Overlay - Enhanced Vignette Effect */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(
            ellipse at center,
            transparent 15%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.9) 100%
          )`,
            }}
          />

          {/* Enhanced gradient for better text readability */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 35%,
            rgba(0, 0, 0, 0.1) 60%,
            transparent 80%
          )`,
            }}
          />

          {/* Gradient Effect combines with background */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              background: `linear-gradient(
            to top,
            #090D18 0%,
            transparent 70%
          )`,
            }}
          />

          {/* Content with Responsive Design */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-16 lg:left-[120px] z-30 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[580px] px-4 sm:px-0">
            {/* Rating Badge */}
            <div
              key={`rate-${current}`}
              className=" animate-[fadeInUp_0.6s_ease-out_0.1s_both] transition-all duration-500 w-fit flex items-center rounded-full px-3 py-1 text-white gap-1 bg-linear-to-r from-yellow-300 to-yellow-700 text-sm"
            >
              <span>
                <FaStar size={16} />
              </span>
              <span className="font-semibold">
                {parseFloat(currentMovie.vote_average.toFixed(2))}
              </span>
            </div>
            {/* Movie Title - Responsive */}
            <h1
              key={`title-${current}`}
              className="text-glow-white text-balance tracking-wide leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 uppercase drop-shadow-2xl
                     animate-[fadeInUp_0.6s_ease-out] transition-all duration-500 wrap-break-word hyphens-auto"
            >
              {truncateText(currentMovie.original_title, 50)}
            </h1>
            {/* Movie Subtitle - Hidden on small screens */}
            <p
              key={`subtitle-${current}`}
              className="font-inter text-glow-yellow mb-8 mt-2 font-medium text-base sm:text-lg md:text-xl text-yellow-400 italic drop-shadow-lg
                     animate-[fadeInUp_0.6s_ease-out_0.1s_both] transition-all duration-500 hidden sm:block"
            >
              {truncateText(currentMovie.title, 100)}
            </p>
            {/* Movie Info */}
            <div
              key={`vote-${current}`}
              className="flex items-center gap-2 sm:gap-4 mt-3 md:mt-4 animate-[fadeInUp_0.6s_ease-out_0.2s_both] flex-wrap"
            >
              <BadgeInfo
                icon={BiFilm}
                info={"Phát" + ` (${currentMovie.vote_count})`}
              />
              <BadgeInfo
                icon={BiTrendingUp}
                info={
                  Math.round(currentMovie.popularity).toString() +
                  " rating points"
                }
              />
              <BadgeInfo
                icon={FaRegCalendarCheck}
                info={currentMovie.release_date}
              />
            </div>
            {/* Movie Description - Responsive */}
            <p
              key={`desc-${current}`}
              className="font-inter text-white mt-3 md:mt-4 drop-shadow-lg leading-7 text-sm 
                     animate-[fadeInUp_0.6s_ease-out_0.3s_both] transition-all duration-500 line-clamp-3 sm:line-clamp-4"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                display: "-webkit-box",
                WebkitLineClamp: window.innerWidth < 640 ? 2 : 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {currentMovie.overview}
            </p>
            {/* Action Buttons - Responsive */}
            <div
              key={`btn-${current}`}
              className="mt-4 md:mt-6 flex items-center gap-2 sm:gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]"
            >
              <Play
                onClick={(e) =>
                  handlePlayTrailer(currentMovie.id.toString(), e)
                }
              />
              <button className="p-2 sm:p-3 bg-gray-400/80 cursor-pointer text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 hover:bg-red-500/80">
                <span className="text-white">
                  <FaRegHeart size={18} />
                </span>
              </button>
              <button className="p-2 sm:p-3 bg-gray-400/80 cursor-pointer text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 hover:bg-blue-500/80">
                <span className="text-white">
                  <FiPlus size={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Selection Card - Responsive */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2 sm:px-4 py-2 sm:py-3 rounded-xl z-30 border border-white/10 max-w-[90%] overflow-hidden">
            <div className="flex items-center gap-1 sm:gap-3">
              {banners.map((item, index) => (
                <BannerCard
                  key={`banner-card-${item.id}`}
                  id={item.id}
                  image={BASE_IMG_URL + item.backdrop_path}
                  onImageChange={handleImageChange}
                  isActive={current === index}
                  index={index}
                />
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-2 sm:mt-3 gap-1 sm:gap-2">
              {banners.map((movie, index) => (
                <div
                  key={movie.id}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    index === current
                      ? "w-4 sm:w-6 bg-yellow-400"
                      : "w-1 sm:w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    )
  );
};

export default Banner;
