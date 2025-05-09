"use client";
import React from "react";
import Skills from "./Skills";
import { FaCode, FaBrain, FaUser, FaHandSparkles } from "react-icons/fa";

function Home_Intro() {
  return (
    <>
      <div className="min-h-screen mt-20 px-4 sm:px-6 lg:px-12 py-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full space-y-8 sm:space-y-10 text-base sm:text-lg lg:text-xl animate-fade-in">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center animate-slide-down mt-6">
              HERE'S MY <span className="text-pink-500">INTRODUCTION</span>
            </h1>

            {/* Line 1 */}
            <p className="flex items-start sm:items-center gap-3 text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300">
              <FaCode className="text-pink-500 shrink-0" />
              I code in{" "}
              <span className="text-pink-500 italic font-semibold">
                C++, Next JS, Python
              </span>
              .
            </p>

            {/* Line 2 */}
            <p className="flex items-start sm:items-center gap-3 text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300">
              <FaBrain className="text-pink-500 shrink-0" />
              I am a{" "}
              <span className="text-pink-500 italic font-semibold">FULL STACK DEVELOPER</span>{" "}
              and also working in{" "}
              <span className="text-pink-500 italic font-semibold">GEN AI</span>.
            </p>

            {/* Line 3 */}
            <p className="flex items-start sm:items-center gap-3 text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300">
              <FaUser className="text-pink-500 shrink-0" />
              I always try to participate in{" "}
              <span className="text-pink-500 font-semibold italic">HACKATHONS</span> and{" "}
              <span className="text-pink-500 italic font-semibold">FELLOWSHIPS</span>.
            </p>

            {/* Line 4 */}
            <p className="flex items-start sm:items-center gap-3 text-lg sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300">
              <FaHandSparkles className="text-pink-500 shrink-0" />
              I am working on{" "}
              <span className="text-pink-500 font-semibold italic">LLM'S</span> and{" "}
              <span className="text-pink-500 font-semibold italic">
                FULL STACK AI APPLICATIONS
              </span>
              .
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Skills />
        </div>
      </div>
    </>
  );
}

export default Home_Intro;
