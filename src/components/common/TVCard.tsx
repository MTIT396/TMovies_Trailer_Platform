"use client";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { BASE_IMG_URL } from "@/lib/constant";
import { TVDetail } from "@/types/tv";
import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";

type TVCardProps = {
  TVseries: TVDetail;
  index?: number;
  numberedStyle?: "big-stroke" | "diamond";
  size?: "small" | "medium" | "large";
  showActions?: boolean;
};

const TVCard = ({
  TVseries,
  index,
  numberedStyle,
  size = "medium",
  showActions = true,
}: TVCardProps) => {
  const sizeMap = {
    small: { w: "w-[95px]", h: "h-[140px] sm:h-[270px]" },
    medium: {
      w: "w-[120px] sm:w-[160px] md:w-[188px]",
      h: "h-[180px] sm:h-[250px]",
    },
    large: {
      w: "w-[90px] md:w-[140px] lg:w-[180px]",
      h: "h-[140px] md:h-[280px]",
    },
    free: {
      w: "w-full",
      h: "h-[280px]",
    },
  };
  const { handlePlayTrailer } = useModalStore();

  const { name, poster_path, id, original_name } = TVseries;

  return (
    <div className={`relative flex flex-col ${sizeMap[size].w}`}>
      {/* Number Badge */}
      {index !== undefined && numberedStyle === "big-stroke" && (
        <span
          className="absolute -left-6 sm:top-[140px] top-[90px] z-10 text-[80px] lg:text-[100px] font-extrabold text-black leading-none
           [-webkit-text-stroke:3px_white] [paint-order:stroke_fill]"
          style={{
            textShadow:
              "0 0 5px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
          }}
        >
          {index + 1}
        </span>
      )}
      {/* Diamond Style Badge */}
      {index !== undefined && numberedStyle === "diamond" && (
        <div className="absolute border-2 border-white top-4 -left-3 w-6 h-6 md:w-8 md:h-8 bg-red-600 rotate-45 flex items-center justify-center z-10 shadow-md">
          <span className="-rotate-45 text-white font-extrabold text-base">
            {index + 1}
          </span>
        </div>
      )}

      {/* Image */}
      <div
        className={`group overflow-hidden shadow-2xl relative ${sizeMap[size].h} rounded-xl mb-2 cursor-pointer transition duration-300`}
      >
        <Image
          width={86}
          height={86}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-500 ease-in-out"
          src={BASE_IMG_URL + poster_path}
          alt={name}
        />

        {showActions && (
          <button
            onClick={(e) => handlePlayTrailer(id.toString(), e)}
            className="cursor-pointer group-hover:bottom-4 md:group-hover:opacity-100 opacity-0 absolute -bottom-1 transition-all duration-300 flex w-full gap-2 px-4"
          >
            <div className="transition duration-300 rounded-md bg-white hover:bg-red-700 flex flex-1 items-center justify-center gap-1 text-black hover:text-white">
              <MdOutlinePlayCircle size={18} />
              <span className="text-[13px] font-opensans">Xem ngay</span>
            </div>

            <div className="hover:text-red-600 text-white transition duration-300 rounded-full p-2 bg-gray-500">
              <FaHeart size={16} />
            </div>
          </button>
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col font-medium">
        <h1 className="text-white text-sm sm:text-base text-center text-ellipsis overflow-hidden whitespace-nowrap">
          {original_name}
        </h1>
        {name && (
          <p className="text-center text-white/50 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </p>
        )}
      </div>
    </div>
  );
};

export default TVCard;
