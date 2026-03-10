"use client";
import { movieServices } from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";
import { BsFire } from "react-icons/bs";
import SwiperMovies from "../common/swipers/SwiperMovies";
import Section from "../ui/Section";

const TrendingMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trending_movies"],
    queryFn: () => movieServices.getUpcomingMovies(),
  });

  return (
    <Section id="trending_movies">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-blue-300">
          <BsFire size={30} />
        </span>
        <h2 className="md:text-3xl text-xl font-inter font-bold bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          Hiện đang thịnh hành
        </h2>
      </div>
      <SwiperMovies movies={data?.data.results || []} isLoading={isLoading} />
    </Section>
  );
};

export default TrendingMovies;
