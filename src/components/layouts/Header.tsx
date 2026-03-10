"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Logo from "../common/Logo";
import Searchbar from "../common/Searchbar";
import Sidebar from "./Sidebar";
import { useSidebarStore } from "@/store/useSidebarStore";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const { handleOpen } = useSidebarStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isFixed
          ? "bg-[#14161E]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)] py-2"
          : "bg-transparent py-3 border-b border-transparent shadow-none"
      } font-poppins transition-all ease-in-out duration-300 w-full px-6 md:px-30 xl:px-[200px]  z-50 font-medium fixed top-0 left-0 right-0 flex items-center justify-between text-white`}
    >
      {/* Desktop */}
      <Logo />
      <Navbar />
      <div className="hidden xl:block max-w-[280px] w-full">
        <Searchbar />
      </div>

      {/* Mobile */}

      <button
        className="xl:hidden cursor-pointer text-white"
        onClick={handleOpen}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar (Mobile) */}
      <Sidebar />
    </header>
  );
};

export default Header;
