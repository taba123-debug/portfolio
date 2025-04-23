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

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }
        .icon-bounce {
          animation: bounce 2s infinite;
        }
        .icon-pulse {
          animation: pulse 2s infinite;
        }
        .icon-wiggle {
          animation: wiggle 1.5s infinite ease-in-out;
        }
        .icon-glow {
          animation: glow 2s infinite ease-in-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px #ec4899);
          }
          50% {
            filter: drop-shadow(0 0 20px #ec4899);
          }
        }
      `}</style>
    </>
  );
}


export default Home_Intro;
