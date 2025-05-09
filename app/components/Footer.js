import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiDatacamp, SiKaggle  } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-5 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold mt-0">
          CONTACT
          <span className="text-pink-500 italic font-bold"> TABBAN </span> ON
        </h1>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/tabban-ghani"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/taba123-debug"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.datacamp.com/portfolio/tabbanghani0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <SiDatacamp />
        </a>
        <a
          href="https://www.kaggle.com/tabaghani"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <SiKaggle className="text-3xl sm:text-4xl" />
        </a>
      </div>

      <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Tabban's Portfolio.
      </p>
      <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
        email at:{'tabbanghani0@gmail.com '}
      </p>
    </footer>
  );
}

export default Footer;
