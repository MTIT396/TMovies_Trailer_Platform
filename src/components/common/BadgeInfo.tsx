import React from "react";
import { IconType } from "react-icons";

interface BadgeInfoProps {
  icon: IconType;
  info: string;
}
const BadgeInfo = ({ icon: Icon, info }: BadgeInfoProps) => {
  return (
    <div className="flex items-center rounded-full bg-black/70 px-2 sm:px-3 py-1 text-white text-xs sm:text-sm font-semibold backdrop-blur-sm">
      <span className="text-yellow-400 mr-1">
        <Icon size={16} />
      </span>
      <span className="whitespace-nowrap">{info}</span>
    </div>
  );
};

export default BadgeInfo;
