"use client";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { Movie } from "@/types/movie";
import { movieServices } from "@/services/movie.service";
import { BASE_IMG_URL } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";
import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  index?: number;
  numberedStyle?: "big-stroke" | "diamond";
  size?: "small" | "medium" | "large" | "free";
  showActions?: boolean;
};

const MovieCard = ({
  movie,
  index,
  numberedStyle,
  size = "medium",
  showActions = true,
}: MovieCardProps) => {
  const sizeMap = {
    small: { w: "w-[95px]", h: "h-[140px] sm:h-[270px]" },
    medium: {
      w: "w-[120px] sm:w-[160px] md:w-[188px]",
      h: "h-[180px] sm:h-[250px]",
    },
    large: {
      w: "w-[90px] md:w-[140px] lg:w-[180px]",
      h: "h-[140px] md:h-[280px]",
    },
    free: {
      w: "w-full",
      h: "h-[280px]",
    },
  };
  const { original_title, title, poster_path, id } = movie;

  // Movie Query
  const movieDetailsQuery = useQuery({
    queryKey: ["movie_details", id],
    queryFn: () => {
      return movieServices.getMovieDetail(id);
    },
    enabled: !!id,
  });
  const movieDetails = movieDetailsQuery.data?.data;
  const shouldShowNumber = typeof index === "number" && numberedStyle;
  const { handlePlayTrailer } = useModalStore();

  return (
    <Link href={`/movie/${id}`}>
      <div className={`relative flex flex-col ${sizeMap[size].w}`}>
        {/* Genres */}
        {!!(movieDetails?.runtime && movieDetails.runtime > 0) && (
          <span className="font-bold text-xs sm:text-[13px] text-yellow-950 absolute top-4 right-4 rounded-md px-1 py-1 sm:px-2 bg-yellow-600 z-10">
            {movieDetails.runtime} phút
          </span>
        )}

        {/* Number Badge */}
        {shouldShowNumber && numberedStyle === "big-stroke" && (
          <span
            className="absolute -left-6 sm:top-[140px] top-[90px] z-10 text-[80px] lg:text-[100px] font-extrabold text-black leading-none
           [-webkit-text-stroke:3px_white] [paint-order:stroke_fill]"
            style={{
              textShadow:
                "0 0 5px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
            }}
          >
            {index + 1}
          </span>
        )}
        {/* Diamond Style Badge */}
        {shouldShowNumber && numberedStyle === "diamond" && (
          <div className="absolute border-2 border-white top-4 -left-3 w-6 h-6 md:w-8 md:h-8 bg-red-600 rotate-45 flex items-center justify-center z-10 shadow-md">
            <span className="-rotate-45 text-white font-extrabold text-base">
              {index + 1}
            </span>
          </div>
        )}

        {/* Image */}
        <div
          className={`group overflow-hidden shadow-2xl relative ${sizeMap[size].h} rounded-xl mb-2 cursor-pointer transition duration-300`}
        >
          <Image
            src={poster_path ? BASE_IMG_URL + poster_path : "/no_img.jpg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-500 ease-in-out rounded-xl"
            sizes={
              size === "small"
                ? "95px"
                : size === "medium"
                  ? "188px"
                  : size === "large"
                    ? "180px"
                    : "100vw"
            }
            priority={index === 0}
          />

          {showActions && (
            <button
              onClick={(e) => handlePlayTrailer(id.toString(), e)}
              className="cursor-pointer group-hover:bottom-4 md:group-hover:opacity-100 opacity-0 absolute -bottom-1 transition-all duration-300 flex w-full gap-2 px-4"
            >
              <div className="transition duration-300 rounded-md bg-white hover:bg-red-700 flex flex-1 items-center justify-center gap-1 text-black hover:text-white">
                <MdOutlinePlayCircle size={18} />
                <span className="text-[13px] font-opensans">Xem ngay</span>
              </div>

              <div className="hover:text-red-600 text-white transition duration-300 rounded-full p-2 bg-gray-500">
                <FaHeart size={16} />
              </div>
            </button>
          )}
        </div>

        {/* Title */}
        <div className="flex flex-col font-medium">
          <h1 className="text-white text-sm sm:text-base text-center text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h1>
          {original_title && (
            <p className="text-center text-white/50 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
              {original_title}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
