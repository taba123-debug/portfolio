"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaCertificate, FaRegFileAlt, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0 bg-black">
        
        {/* Logo */}
        <div className="text-pink-500 font-extrabold text-2xl">Tabban.</div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav
          className={`flex flex-col md:flex-row md:items-center md:space-x-14 font-medium text-lg md:text-2xl text-white mt-3 ${
            menuOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaHome className="inline-block mr-2 text-3xl" />
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaUser className="inline-block mr-2 text-3xl" />
            About Me
          </Link>
          <Link href="/certificate" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaCertificate className="inline-block mr-2 text-3xl" />
            Certifications
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex items-center mb-4 md:mb-0">
            <FaRegFileAlt className="inline-block mr-2 text-3xl" />
            Projects
          </Link>
        </nav>

      </header>
    </div>
  );
}

export default Header;
