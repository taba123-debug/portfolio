'use client';
import React from 'react';
// import  '../styles/animation.css'; 
import Image from 'next/image';
import '../style/animation.css'; 
import { FaDownload, FaLinkedin } from "react-icons/fa";
function Home() {
  return (
    <div className="pt-40 px-6 text-white flex items-center justify-center  ">
    <div className="max-w-4xl text-center">
    <div className="flex justify-center items-center">
  <Image
    src="/images/Portfolio.jpg"
    alt="intro"
    width={0}
    height={0}
    sizes="100vw"
    className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-pink-500 shadow-lg"
  />
</div>


      {/* Greeting */}
      <h1 className="ml-10 mt-10 text-3xl sm:text-4xl font-semibold fade-in delay-50">
        Hi, THERE{" "}
        <span className="wave text-yellow-400 inline-block">👋</span>
      </h1>

      {/* Name */}
      <h2 className="mt-8 text-4xl sm:text-5xl font-bold text-pink-500 fade-in delay-100 ">
      <span className='text-white'>I'M</span>  Tabban Ghani
      </h2>

      {/* Roles -pending */}
      <div className="mt-6 text-xl sm:text-2xl font-medium flex flex-wrap justify-center items-center gap-4">
        <span className="fade-in delay-500 text-pink-500 font-bold">Software Engineer</span>
        <span className="fade-in delay-700 text-pink-500 font-bold">AI Enthusiast</span>
        <span className="fade-in delay-900 text-pink-500 font-bold">Web Developer</span>
        <span className="fade-in delay-1100 text-pink-500 font-bold">A Learner</span>
      </div>
      <div className=" gap-4 mt-8 flex justify-center items-center">

    <button
      onClick={() => window.open("/Resume/TabbanGhani Resume.pdf", "_blank")}
      className="flex items-center gap-2 bg-white text-black text-2xl font-bold px-5 py-2 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
    >
      <FaDownload className="text-xl" />
      HIRE ME 
    </button>

      <button
        href="https://www.linkedin.com/in/tabban-ghani"  
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-black font-bold text-xl px-5 py-2 rounded-full hover:bg-pink-400 hover:text-white transition duration-300"
      >
        <FaLinkedin className="text-xl" />
        CONNECT ME
      </button>
    </div>
    </div>
  </div>
  );
}

export default Home;
