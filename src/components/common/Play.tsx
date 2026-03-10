import React, { forwardRef } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
type ButtonPlayProps = React.ComponentProps<"button"> & {
  className?: string;
  children?: React.ReactNode;
};

const Play = forwardRef<HTMLButtonElement, ButtonPlayProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center justify-center">
        {/* Radar ripple 1 */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-yellow-400 opacity-40 animate-ping"></span>
        {/* Radar ripple 2 (delay) */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-yellow-500 opacity-30 animate-ping [animation-delay:0.7s]"></span>

        {/* Actual button */}
        <button
          ref={ref}
          {...props}
          className="group relative flex items-center gap-2 p-3 sm:p-4 bg-linear-to-r from-yellow-300 to-yellow-600 
                   hover:from-yellow-500 hover:to-yellow-700 cursor-pointer text-white font-bold 
                   rounded-full transition-all duration-300 
                   shadow-[0_0_18px_rgba(250,204,21,0.8)] 
                   hover:shadow-[0_0_25px_rgba(250,204,21,1)] 
                   hover:scale-110 active:scale-95"
        >
          <span className="text-yellow-950 group-hover:text-yellow-900 transition-colors duration-300">
            <BiSolidRightArrow size={18} />
          </span>
          {children}
        </button>
      </div>
    );
  }
);

Play.displayName = "ButtonPlay";

export default Play;
