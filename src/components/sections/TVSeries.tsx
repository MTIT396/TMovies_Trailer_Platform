"use client";
import { movieServices } from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";
import { FiChevronRight } from "react-icons/fi";
import SwiperTVSeries from "../common/swipers/SwiperTVSeries";
import Section from "../ui/Section";

const TVSeries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["series_movies"],
    queryFn: () => movieServices.getTVbyCountry(),
  });
  return (
    <Section id="tvshows" className="bg-background">
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 15%,
            rgba(23, 62, 109, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.9) 100%
          )`,
        }}
      />
      <div className="flex flex-col w-full z-20 relative">
        <div className="mb-7">
          <h1 className="sm:text-3xl text-2xl font-bold uppercase tracking-wide text-white">
            <span className="text-red-600 font-bold">Top 10</span> Phim bộ Hàn
            Quốc
          </h1>
          <div className="flex justify-between w-full flex-wrap sm:flex-nowrap items-center">
            <p className="text-gray-300 sm:text-sm text-xs">
              Những bộ phim được xem nhiều nhất
            </p>
            <span className="text-sm flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white w-fit mt-2">
              Xem tất cả{" "}
              <span>
                <FiChevronRight size={18} />
              </span>
            </span>
          </div>
        </div>

        {/* Swiper */}
        <div>
          <SwiperTVSeries
            TVseries={data?.data.results.slice(0, 10) || []}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Section>
  );
};

export default TVSeries;
