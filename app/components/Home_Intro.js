import React from "react";
import Image from "next/image";
import Skills from "./Skills";

function Home_Intro() {
  return (
    <div className="min-h-screen  mt-20 px-8 py-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="space-y-6 text-lg">
          <h1 className="text-4xl font-bold text-center mt-10 sm:text-5xl ">
            HERE'S MY <span className="text-pink-500">INTRODUCION</span>
          </h1>

          <p className="text-2xl mt-16 flex items-center gap-2">
            I code in {""}
            <span className="text-pink-500 italic text-2xl font-semibold">
              C++, Next JS, Python
            </span>
            .
          </p>

          <p className="text-2xl mt-8 flex items-center gap-2  ">
          
            I am a{" "}
            <span className="text-pink-500 italic font-semibold text-2xl">
              FULL STACK DEVELOPER
            </span>{" "}
            and also working in{" "}
            <span className="text-pink-500 italic font-semibold">GEN AI</span>.
          </p>

          <p className="text-2xl mt-8 flex items-center gap-2 ">
       
            I always try to participate in{" "}
            <span className="text-pink-500 font-semibold italic">HACKATHONS</span> and{" "}
            <span className="text-pink-500 italic font-semibold">
              FELLOWSHIPS
            </span>{" "}
            .
          </p>
          <p className="text-2xl mt-8 flex items-center gap-2 ">
        
            I am working on{" "}
            <span className="text-pink-500 font-semibold italic">LLM'S</span> and{" "}
            <span className="text-pink-500 font-semibold italic">
              FULL STACK AI APPLICATIONS
            </span>
            .
          </p>
        </div>

        {/* Profile Image */}
        <div>
          <Image
            src="/images/portfolio.png"
            alt="intro"
            width={280}
            height={280}
            className="sm:w-52 sm:h-52 object-cover rounded-2xl "
          />
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Home_Intro;
