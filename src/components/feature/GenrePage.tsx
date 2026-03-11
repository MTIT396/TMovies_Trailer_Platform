"use client";
import MovieCard from "@/components/common/MovieCard";
import Pagination from "@/components/ui/Pagination";
import MovieCardSkeleton from "@/components/common/skeleton/MovieCardSkeleton";
import { useParams } from "next/navigation";
import { useQueryString } from "@/hooks/useQueryString";
import { useGenres, useMoviesByGenre } from "@/hooks/useMovieQuery";

const GenrePage = () => {
  const { id } = useParams();
  const reqId = Number(id);
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;

  // Individual Genre
  const { data: movies, isLoading } = useMoviesByGenre(reqId, page);
  // All Genres
  const genresQuery = useGenres();

  const currentGenre = genresQuery.data?.find((item) => item.id === reqId);

  const totalPage = movies?.total_pages || 0;

  return (
    <div>
      <div className="mt-30 container mx-auto px-6 lg:px-20">
        <h1 className="text-3xl font-inter font-bold pb-10 bg-linear-to-r from-gray-400 to-white bg-clip-text text-transparent">
          {currentGenre?.name}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => (
                <MovieCardSkeleton key={`skel-${i}`} />
              ))
            : movies?.results.map((movie) => (
                <MovieCard movie={movie} key={movie.id} size="free" />
              ))}
        </div>
      </div>
      {/* Pavigation */}
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        href={`/genre/${id}`}
      />
    </div>
  );
};

export default GenrePage;
