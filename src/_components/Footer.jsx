import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      {/* Get In Touch Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ffd943] mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Join our community of music enthusiasts and take part in exciting
          musical battles. Connect, compete, and collaborate with fellow
          artists.
        </p>
        <button className="bg-[#bc990e] text-white px-4 py-2 rounded hover:bg-[#65561a] transition duration-300 text-sm sm:text-base">
          Join Us Now!
        </button>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center border-t border-gray-800 pt-8">
          {/* Logo and Name */}
          <div className="flex items-center mb-6 sm:mb-8">
            <span className="h-6 w-9 sm:h-8 sm:w-12 mr-2">
              <img
                src="./logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </span>
            <span className="text-lg sm:text-xl font-semibold">
              Euphonious Rivals
            </span>
          </div>

          {/* Social and Navigation */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=100083375049164"
              className="text-blue-500 hover:text-blue-400 mb-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
              <a href="#" className="hover:text-gray-300">
                Features
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact us
              </a>
              <a href="#" className="hover:text-gray-300">
                FAQs
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
          © 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
