import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="font-opensans relative inline-block w-fit ">
        <span className="font-extrabold bg-linear-to-br from-primary to-[#ffecba] bg-clip-text text-transparent tracking-tight text-2xl">
          TMovies
        </span>
        <svg
          className="absolute left-0 right-0 -bottom-2 h-3 w-full"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M5,9 C30,1 70,1 95,9"
            fill="none"
            stroke="#fed56d"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
