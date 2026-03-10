"use client";
import { movieServices } from "@/services/movie.service";
import { FiChevronRight } from "react-icons/fi";
import SwiperNationalMovies from "./swipers/SwiperNationalMovies";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export type NationalMoviesListProps = {
  countryCode: string;
  countryName: string;
  color: string;
};
const NationalMoviesList = ({
  countryCode,
  countryName,
  color,
}: NationalMoviesListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["national_movies", countryCode],
    queryFn: () => {
      return movieServices.getMoviesByCountry(countryCode);
    },
  });

  return (
    <div className="border-gray-800 border-b w-full flex flex-wrap lg:flex-nowrap gap-y-10 py-10 px-6 lg:px-20 bg-[#090D18] relative ">
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(
            to bottom right,
            #071032 0%,
            transparent 50%
          )`,
        }}
      />

      <div className="font-inter flex flex-col sm:mt-6 mr-8 min-w-70 z-20">
        <h1
          style={{ color: color }}
          className="text-xl sm:text-3xl leading-relaxed text-nowrap font-bold uppercase tracking-"
        >
          Phim {countryName}
        </h1>
        <h2 className="uppercase leading-relaxed text-white text-base sm:text-xl font-bold">
          Phim mới cập nhật
        </h2>
        <Link href={`/nation/movies/${countryCode}`}>
          <span className="text-sm mt-2 flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white w-fit">
            Xem tất cả{" "}
            <span>
              <FiChevronRight size={18} />
            </span>
          </span>
        </Link>
      </div>

      <SwiperNationalMovies
        movies={data?.data.results || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NationalMoviesList;
