"use client";
import { FiChevronRight } from "react-icons/fi";
import SwiperMovies from "../common/swipers/SwiperMovies";
import Section from "../ui/Section";
import { useMoviesByGenre } from "@/hooks/useMovieQuery";

const CartoonMoviesList = () => {
  // 16 is code cartoon
  const { data, isLoading } = useMoviesByGenre(16, 1);
  return (
    <Section id="cartoons" className="bg-background">
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
            <span className="text-red-600 font-bold">Phim hoạt hình</span> mới
            nhất
          </h1>
          <div className="flex justify-between w-full flex-wrap sm:flex-nowrap items-center">
            <p className="text-gray-300 sm:text-sm text-xs">
              Khám phá thế giới anime đầy màu sắc
            </p>
            <span className="text-sm flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white w-fit mt-2">
              Xem tất cả{" "}
              <span>
                <FiChevronRight size={18} />
              </span>
            </span>
          </div>
        </div>

        <div>
          <SwiperMovies
            movies={data?.results.slice(0, 10) || []}
            isLoading={isLoading}
            numberedStyle="diamond"
            showActions
          />
        </div>
      </div>
    </Section>
  );
};

export default CartoonMoviesList;
