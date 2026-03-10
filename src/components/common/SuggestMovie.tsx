import { BASE_IMG_URL } from "@/lib/constant";
import { Genre, Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SuggestMovieProps = {
  movie: Movie;
  genres: Genre[];
};
const SuggestMovie: React.FC<SuggestMovieProps> = ({ movie, genres }) => {
  const movieGenresList = movie.genre_ids.map((id) =>
    genres.find((g) => g.id === id)
  );
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="cursor-pointer flex items-center gap-4 transition duration-300 hover:bg-white/5 text-white rounded-md overflow-hidden p-3">
        {/* Poster */}
        <div className="relative w-12 h-16 shrink-0 rounded-sm overflow-hidden">
          <Image
            src={
              movie.poster_path
                ? `${BASE_IMG_URL}${movie.poster_path}`
                : "/no_img.jpg"
            }
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="">
          {/* Title */}
          <h3 className="text-sm font-semibold mb-1 line-clamp-1">
            {movie.title}
          </h3>

          {/* Genres */}
          <p className="text-xs text-gray-400 mb-1 line-clamp-1">
            {movieGenresList
              .filter(Boolean)
              .map((g) => g!.name)
              .join(", ")}
          </p>

          {/* Info */}
          <div className="text-xs text-gray-400 flex gap-2 justify-between">
            {movie.release_date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestMovie;
