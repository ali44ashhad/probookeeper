import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";  // <-- Call icon
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="bg-[#007c19] p-3 sm:p-4 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between px-4">

        {/* Title - Left Side */}
        <div className="text-left">
          <Link to='/'>
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold">
           Probookeeper
          </h2>
          </Link>
        </div>

       {/* Phone Number - Right Side */}
        <a href="tel:+18888710037" className="flex items-center gap-2 text-right" aria-label="Call Probookeeper at 1-888-871-0037">
          <FaPhoneAlt className="text-white text-base sm:text-xl md:text-2xl" />

          <span
            className="
              text-white
              text-lg
              sm:text-2xl
              md:text-3xl
              lg:text-2xl
              font-semibold
              leading-none
              select-none
            "
          >
            1-888-871-0037
          </span>
        </a>

      </div>
    </nav>
  );
};

export default Header;
