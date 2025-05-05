import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiDatacamp } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-5">
      <div className="text-center mb-4">
     
        <h1 className="text-2xl mt-0">
            CONTACT
          <span className="text-pink-500 italic font-bold"> TABBAN </span> ON
        </h1>
      </div>
      <div className="flex justify-center space-x-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/tabban-ghani"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.datacamp.com/profile/your-datacamp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <SiDatacamp />
        </a>
        <a
          href="https://www.instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()}   Tabban's Portfolio.
      </p>
    </footer>
  );
}

export default Footer;
