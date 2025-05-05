"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCertificate,
  FaRegFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-10 w-full py-6 bg-black shadow-md ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="text-white font-extrabold text-2xl tracking-wide">
          <span className="text-pink-500">T</span>abban
          <span className="text-pink-500">.</span>
        </div>

        {/* Hamburger for Mobile */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav
          className={`w-full md:w-auto flex flex-col md:flex-row md:items-center md:space-x-14 font-medium text-lg md:text-2xl text-white transition-all duration-300 ease-in-out ${
            menuOpen ? "flex mt-3" : "hidden"
          } md:flex`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaHome className="inline-block mr-2 text-2xl" />
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaUser className="inline-block mr-2 text-2xl" />
            About Me
          </Link>
          <Link href="/certificate" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaCertificate className="inline-block mr-2 text-2xl" />
            Certifications
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaRegFileAlt className="inline-block mr-2 text-2xl" />
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
