"use client";
import React, { useState } from "react";
import { MdOutlineExplore } from "react-icons/md";
import SwiperGenres from "../common/swipers/SwiperGenres";
import CategoryCard from "../common/CategoryCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Loading from "../ui/Loading";
import Section from "../ui/Section";
import { useGenres } from "@/hooks/useMovieQuery";

const DEFAULT_COUNTS = 8;

const Categories = () => {
  const { data: genres = [], isLoading } = useGenres();
  const [countShowMore, setCountShowMore] = useState<number>(DEFAULT_COUNTS);
  const handleShowMore = () => {
    setCountShowMore((prev) => prev + DEFAULT_COUNTS);
  };
  const handleCollapse = () => {
    setCountShowMore(DEFAULT_COUNTS);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <Section id="genres" className="bg-background">
      <div className="flex items-center justify-between mb-8 flex-wrap  gap-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-300">
            <MdOutlineExplore size={30} />
          </span>
          <h2 className="font-inter text-nowrap md:text-3xl text-xl font-bold bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Khám phá thể loại
          </h2>
        </div>
      </div>

      <div
        className={`hidden md:grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        <AnimatePresence>
          {genres.slice(0, countShowMore).map((genre, index) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <CategoryCard genre={genre} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="block md:hidden">
        <SwiperGenres genres={genres} />
      </div>
      {/* Button Show More */}
      {countShowMore < genres.length ? (
        <div className="mt-4 hidden md:block  ">
          <button
            onClick={handleShowMore}
            type="button"
            className="flex items-center justify-center text-sm gap-1 text-white bg-white/10 rounded-xl py-2 px-3 cursor-pointer hover:bg-white/20 transition duration-200 font-inter"
          >
            Xem thêm
            <ChevronDown size={20} />
          </button>
        </div>
      ) : (
        <div className="mt-4 hidden md:block  ">
          <button
            onClick={handleCollapse}
            type="button"
            className="flex items-center justify-center text-sm gap-1 text-white bg-white/10 rounded-xl py-2 px-3 cursor-pointer hover:bg-white/20 transition duration-200 font-inter"
          >
            Thu gọn
            <ChevronUp size={20} />
          </button>
        </div>
      )}
    </Section>
  );
};

export default Categories;
