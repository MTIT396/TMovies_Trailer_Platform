import useDebounce from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import SuggestMovie from "./SuggestMovie";
import { movieServices } from "@/services/movie.service";
import SuggestMovieSkeleton from "./skeleton/SuggestMovieSkeleton";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebarStore } from "@/store/useSidebarStore";
const Searchbar = () => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const { handleClose } = useSidebarStore();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Get All Genres
  const genresQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => movieServices.getGenres(),
  });

  const genres = genresQuery.data?.data.genres || [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(e.target.value);
    setIsOpen(true);
  };

  const keyword = useDebounce(searchTerms.trim(), 500);

  // Get Movies By Searching
  const { data, isFetching } = useQuery({
    queryKey: ["search_movies", keyword],
    queryFn: () => movieServices.searchMovies(keyword),
    enabled: keyword.trim().length > 0,
  });
  const movies = data?.data.results;

  const handleSearch = () => {
    const query = searchTerms.trim();
    if (query) {
      router.push(`/search?q=${query}`);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      handleClose();
    }
  };

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Focus Again
  const handleFocus = () => {
    if (searchTerms.trim().length > 0) {
      setIsOpen(true);
    }
  };
  return (
    <div
      ref={containerRef}
      className="relative font-inter flex items-center w-full bg-layout/90 rounded-full px-4 py-2.5 border border-gray-600 transition duration-300 focus-within:ring-2 focus-within:ring-primary"
    >
      <Search size={18} className="text-gray-400 mr-2" />
      <input
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        value={searchTerms}
        type="text"
        placeholder="Tìm kiếm phim..."
        className="flex-1 bg-transparent outline-none placeholder-gray-400 text-gray-100 text-sm"
      />
      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && keyword.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="max-h-[620px] shadow-2xl overflow-auto p-2 absolute left-0 top-full translate-y-2 bg-layout rounded-md w-full z-50"
          >
            {isFetching ? (
              <>
                <h2 className="text-sm font-inter font-light text-gray-400 pl-3 mt-2 mb-1">
                  Danh sách phim
                </h2>
                {Array.from({ length: 4 }).map((_, index) => (
                  <SuggestMovieSkeleton key={index} />
                ))}
              </>
            ) : movies && movies.length > 0 ? (
              <>
                <h2 className="text-sm font-inter font-light text-gray-400 pl-3 mt-2 mb-1">
                  Danh sách phim
                </h2>
                {movies?.slice(0, 5).map((movie) => (
                  <SuggestMovie key={movie.id} movie={movie} genres={genres} />
                ))}
              </>
            ) : (
              <span className="text-sm font-inter font-light text-gray-400 pl-3 mt-2 mb-1">
                Không thể tìm thấy phim...
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Searchbar;
