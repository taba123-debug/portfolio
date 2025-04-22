import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import {FaExperience} from 'react-icons/fa';
import { FaRegFileAlt } from 'react-icons/fa';


function Header() {
  return (
    <div>
      <header className="w-full flex justify-between items-center px-8 py-4 p-10">
      <div className="text-pink-500 font-extrabold text-2xl">Tabban.</div>
      <nav className="space-x-14 text-white font-medium text-2xl  mt-3">
        <Link href="/">
        <FaHome className="inline-block mr-2 text-3xl" />
        Home
        </Link>
        <Link href="/about">
        <FaUser className="inline-block mr-2 mt-0 text-3xl" />
        About Me
        </Link>
        <Link href="#experience">
        <FaProjectDiagram className="inline-block mr-2 mt-0 text-3xl" />
        Experience
        </Link>
        <Link href="/certificate">
        
        <FaCertificate className="inline-block mr-2 mt-0 text-3xl" />
        Certifications</Link>
        <Link href="/projects">
        <FaRegFileAlt className="inline-block mr-2 mt-0 text-3xl" />
        
        Projects</Link>
      </nav>
    </header>
    </div>
  )
}

export default Header
