import React, { useState } from "react";
import { Link } from "react-router-dom";
export const TopNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`transition-colors duration-300 ${
        isHovered ? "bg-gray-800" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-4 sm:px-6 lg:px-12 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-10 w-16 sm:h-14 sm:w-20"
            />

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#" className="text-white hover:text-[#ffd943]">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943]">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943]">
                  MEMBERS
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943]">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white mr-4 focus:outline-none"
              onClick={toggleMenu}
            >
              MENU
            </button>

            <Link to="/application">
              <button className="bg-[#bc990e] text-white px-4 py-2 rounded hover:bg-[#65561a] transition-colors duration-300">
                Join Us Now!
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2 text-center">
              <li>
                <a href="#" className="text-white hover:text-[#ffd943] block">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943] block">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943] block">
                  MEMBERS
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ffd943] block">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
