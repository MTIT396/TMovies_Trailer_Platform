import Image from "next/image";
import React from "react";

type BannerCardProps = {
  id: number;
  image: string;
  onImageChange:
    | React.Dispatch<React.SetStateAction<number>>
    | ((prev: number) => void);
  isActive: boolean;
  index: number;
};

const BannerCard = ({
  image,
  onImageChange,
  isActive,
  index,
}: BannerCardProps) => {
  const handleClick = () => {
    onImageChange(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative cursor-pointer rounded-lg overflow-hidden
        w-[90px] h-[50px] transition-all duration-300
        ${
          isActive
            ? "ring-2 ring-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] scale-105"
            : "hover:shadow-[0_0_10px_rgba(233,232,229,0.6)] hover:scale-102"
        }
      `}
    >
      <Image
        width={80}
        height={80}
        className="w-full h-full object-cover"
        src={image}
        alt=""
      />
      {/* Active indicator overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-yellow-400/20 pointer-events-none" />
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
    </div>
  );
};
export default BannerCard;
