"use client";
import { category_colos } from "@/lib/data";
import { Genre } from "@/types/movie";
import { SwatchBook } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ genre, index }: { genre: Genre; index: number }) => {
  const color = category_colos[index] ?? ["#000", "#333"];
  return (
    <Link href={`/genre/${genre.id}`}>
      <div
        className={`w-full h-[120px] md:h-34 cursor-pointer text-white font-bold transition-all duration-300 lg:hover:scale-105 active:scale-95 rounded-lg flex flex-col justify-between p-3`}
        style={{
          background: `linear-gradient(to bottom left, ${color[0]}, ${color[1]})`,
          boxShadow: `0 0 0px transparent`, // default
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 25px ${color[0]}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0px transparent`;
        }}
      >
        <div className="flex w-full justify-between items-center">
          <span className="font-inter line-clamp-1 text-white font-bold md:text-xl text-base">
            {genre.name}
          </span>
          <span className="hidden md:flex size-10 shrink-0 bg-white/50 items-center justify-center rounded-full hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
            <SwatchBook size={20} />
          </span>
        </div>
        <div className="flex w-full justify-between items-center flex-wrap">
          <span className="font-inter text-gray-300 font-medium text-xs sm:text-sm text-nowrap">
            Khám phá ngay ---
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
