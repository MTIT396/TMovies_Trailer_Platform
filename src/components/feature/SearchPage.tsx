"use client";

import Banner from "@/components/common/Banner";
import MovieCard from "@/components/common/MovieCard";
import Section from "@/components/ui/Section";
import { useQueryString } from "@/hooks/useQueryString";
import { movieServices } from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";
import { TextSearch } from "lucide-react";

const SearchPage = () => {
  const queryString: { q?: string } = useQueryString();
  const querySearch = queryString.q || "";
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", querySearch],
    queryFn: () => movieServices.searchMovies(querySearch),
    enabled: !!querySearch,
  });

  if (!querySearch)
    return <p className="text-primary">Hãy nhập từ khóa tìm kiếm!</p>;
  if (isLoading) return <p className="text-primary">Loading...</p>;
  if (error) return <p className="text-primary">Lỗi khi tìm kiếm</p>;

  return (
    <div>
      <Banner />
      <Section className="px-4! lg:px-20!">
        <div className="flex items-center gap-2 mb-10 mt-6">
          <TextSearch size={20} color="white" />
          <h2 className="font-inter text-nowrap md:text-2xl text-xl font-bold text-white">
            Kết quả tìm kiếm &quot;{querySearch}&quot; (
            {data?.data.results.length})
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-20">
          {data?.data.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} size="free" />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SearchPage;
