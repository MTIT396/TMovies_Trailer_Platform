import { NavbarMenus } from "@/lib/data";
import { useSidebarStore } from "@/store/useSidebarStore";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  isMobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const { handleClose } = useSidebarStore();
  const isActive = (id: string) => id === activeSection;
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // first call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return !isMobile ? (
    <div className="hidden xl:flex items-center gap-8 font-inter">
      {NavbarMenus.map((nav) => (
        <button
          key={nav.id}
          onClick={() => handleScrollTo(nav.id.replace("#", ""))}
        >
          <div
            className={`${
              isActive(nav.id) ? "text-primary font-semibold after:w-full" : ""
            } relative text-sm cursor-pointer hover:text-primary transition duration-300   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
            after:-bottom-1 after:h-px after:bg-primary after:w-0
            after:transition-all after:duration-300
            hover:after:w-full`}
          >
            {nav.label}
          </div>
        </button>
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-6 mt-8 font-inter">
      {NavbarMenus.map((nav) => (
        <button
          onClick={() => {
            handleScrollTo(nav.id.replace("#", ""));
            handleClose();
          }}
          key={nav.id}
          className="text-sm cursor-pointer hover:opacity-50 w-fit transition duration-300"
        >
          {nav.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
