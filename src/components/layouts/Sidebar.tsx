import React from "react";
import Logo from "../common/Logo";
import Searchbar from "../common/Searchbar";
import Navbar from "../common/Navbar";
import { X } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";

const Sidebar = () => {
  const { isOpen, handleClose } = useSidebarStore();

  return (
    <>
      <div
        className={`fixed h-screen px-6 py-4 top-0 left-0 max-w-86 sm:max-w-100 w-full bg-[#14161E] shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-9999 flex flex-col`}
      >
        {/* Close Button */}
        <button
          className="cursor-pointer absolute top-4 right-4 text-white"
          onClick={handleClose}
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <Logo />

        {/* Searchbar */}
        <div className="mt-6">
          <Searchbar />
        </div>

        {/* Menu Items */}
        <Navbar isMobile />
      </div>
      {/* Overlay when sidebar open */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen bg-black/50 z-9998"
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default Sidebar;
