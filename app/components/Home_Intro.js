"use client"
import React from "react";
import Skills from "./Skills";

// import { Code2, BrainCircuit, Users2, Sparkles } from "lucide-react";
import { FaCode, FaBrain , FaUser , FaHandSparkles } from "react-icons/fa";

function Home_Intro() {
  return (
    <>
      <div className="min-h-screen mt-20 px-6 sm:px-8 py-16 text-white ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-10 text-lg animate-fade-in">
            <h1 className="text-4xl font-bold text-center sm:text-5xl mt-10 animate-slide-down">
              HERE'S MY <span className="text-pink-500">INTRODUCTION</span>
            </h1>

            <p className="text-2xl mt-12 flex items-center gap-3 hover:scale-105 transition-all duration-300">
              <FaCode className="text-pink-500 icon-bounce" />
              I code in{" "}
              <span className="text-pink-500 italic font-semibold">
                C++, Next JS, Python
              </span>
              .
            </p>

            <p className="text-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300">
              <FaBrain className="text-pink-500 icon-pulse" />
              I am a{" "}
              <span className="text-pink-500 italic font-semibold">
                FULL STACK DEVELOPER
              </span>{" "}
              and also working in{" "}
              <span className="text-pink-500 italic font-semibold">GEN AI</span>.
            </p>

            <p className="text-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300">
              <FaUser className="text-pink-500 icon-wiggle" />
              I always try to participate in{" "}
              <span className="text-pink-500 font-semibold italic">HACKATHONS</span> and{" "}
              <span className="text-pink-500 italic font-semibold">FELLOWSHIPS</span>.
            </p>

            <p className="text-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300">
              <FaHandSparkles
               className="text-pink-500 icon-glow" />
              I am working on{" "}
              <span className="text-pink-500 font-semibold italic">LLM'S</span> and{" "}
              <span className="text-pink-500 font-semibold italic">
                FULL STACK AI APPLICATIONS
              </span>
              .
            </p>
          </div>
        </div>
        <Skills />
      </div>

    
    </>
  );
}


export default Home_Intro;
