"use client";
import MovieCard from "@/components/common/MovieCard";
import Pagination from "@/components/ui/Pagination";
import MovieCardSkeleton from "@/components/common/skeleton/MovieCardSkeleton";
import { COUNTRIES } from "@/lib/data";
import { movieServices } from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useQueryString } from "@/hooks/useQueryString";

const NationalMoviesPage = () => {
  const { id } = useParams();
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["national_movies", { id, page }],
    queryFn: () => {
      return movieServices.getMoviesByCountry(id as string, page);
    },
  });
  const countryName = COUNTRIES.find((c) => c.code === id)?.name;
  const totalPage = data?.data.total_pages ?? 0;

  return (
    <div>
      <div className="relative pt-30 container mx-auto px-6 lg:px-20">
        <h1 className="relative z-10 text-3xl font-inter font-bold pb-10 bg-linear-to-r from-gray-400 to-white bg-clip-text text-transparent">
          Phim {countryName}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <MovieCardSkeleton key={`skel-${i}`} />
              ))
            : data?.data.results.map((movie) => (
                <MovieCard movie={movie} key={movie.id} size="free" />
              ))}
        </div>
      </div>
      {/* Pavigation */}
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        href={`/nation/movies/${id}`}
      />
    </div>
  );
};

export default NationalMoviesPage;
