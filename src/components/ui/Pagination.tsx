import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useState,
  useEffect,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  href: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages = 10,
  href,
  currentPage: initialPage = 1,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [inputValue, setInputValue] = useState("");

  // Sync currentPage với URL query
  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.target.select();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = parseInt(inputValue);
      if (!isNaN(value) && value >= 1 && value <= totalPages) {
        setCurrentPage(value);
        setInputValue("");
        router.push(`${href}?page=${value}`);
      } else {
        setInputValue("");
      }
    }
  };

  return (
    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-2 w-fit mx-auto my-10">
      {/* Previous Button */}
      {currentPage === 1 ? (
        <span className="flex items-center justify-center w-10 h-10 rounded-full transition-all bg-zinc-700 text-zinc-500 cursor-not-allowed">
          <ChevronLeft size={20} />
        </span>
      ) : (
        <Link href={`${href}?page=${currentPage - 1}`}>
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all bg-zinc-700 text-white hover:bg-zinc-600 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
        </Link>
      )}

      {/* Page Info */}
      <div className="flex items-center gap-2 px-2">
        <span className="text-white text-sm font-medium">Trang</span>

        {/* Current Page Input */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          placeholder={currentPage.toString()}
          className="w-12 h-8 bg-zinc-700 text-white text-center rounded border border-zinc-600 focus:outline-none focus:border-blue-500"
        />

        <span className="text-zinc-400 text-sm">/ {totalPages}</span>
      </div>

      {/* Next Button */}
      {currentPage === totalPages ? (
        <span className="flex items-center justify-center w-10 h-10 rounded-full transition-all bg-zinc-700 text-zinc-500 cursor-not-allowed">
          <ChevronRight size={20} />
        </span>
      ) : (
        <Link href={`${href}?page=${currentPage + 1}`}>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all bg-zinc-700 text-white hover:bg-zinc-600 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
