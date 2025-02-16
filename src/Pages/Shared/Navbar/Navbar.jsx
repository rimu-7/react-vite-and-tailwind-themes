import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Logo from "../Logo";
import DropdownMenu from "./DropdownMenu";
import MobileNav from "./MobileNav";
import NavButton from "./NavButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // Don't hide navbar while menu is open
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      setIsHidden(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isOpen]);

  return (
    <div
      className={` sticky bg-opacity-90 backdrop-blur-lg top-0 p-5 mb-2 w-full transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 h-10 sm:px-1">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          {/* <Logo /> */}
        </div>

        {/* Center - Navbar Links (Hidden on small screens) */}
        <div className="hidden sm:flex flex-1 justify-center">
          <DropdownMenu />
        </div>

        {/* Right - Mobile Menu Button */}
        <div className="sm:hidden">
          <NavButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Navigation - Place this right after the main navbar */}
      {isOpen && <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;