const SuggestMovieSkeleton = () => {
  return (
    <div className="cursor-default flex items-center gap-4 rounded-md overflow-hidden p-3 animate-pulse">
      {/* Poster skeleton */}
      <div className="w-12 h-16 bg-zinc-400/40 rounded-sm"></div>

      <div className="flex-1 space-y-2">
        {/* Title skeleton */}
        <div className="h-3 bg-zinc-400/40 rounded-full"></div>

        {/* Genres skeleton */}
        <div className="h-3 w-24 bg-zinc-400/40 rounded-full"></div>

        {/* Release date skeleton */}
        <div className="h-3 w-20 bg-zinc-400/40 rounded-full"></div>
      </div>
    </div>
  );
};

export default SuggestMovieSkeleton;
