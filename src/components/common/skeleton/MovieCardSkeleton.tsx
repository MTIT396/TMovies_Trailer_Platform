import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div className="relative flex flex-col w-full">
      {/* Image skeleton */}
      <div className="relative h-[180px] sm:h-[250px] rounded-xl bg-zinc-400/40 mb-2 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-200/30 to-transparent shimmer"></div>
      </div>

      {/* Title skeleton with shimmer */}
      <div className="flex flex-col gap-1">
        <div className="relative h-3 bg-zinc-400/40 rounded-full w-[90%] mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-200/30 to-transparent shimmer"></div>
        </div>
        <div className="relative h-3 bg-zinc-400/40 rounded-full w-[80%] mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-200/30 to-transparent shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
