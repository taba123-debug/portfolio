import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaRobot,
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Image from "next/image";
import Header from "../components/Header";
import About_Section from "../components/About_section";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white">
      <Header />
      <section className="text-white py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6 mt-40 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-pink-500">WHO</span> I'M?
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl">
              <FaMapMarkerAlt className="inline text-pink-500 mr-2" />
              I am <span className="text-pink-500 font-semibold">Tabban Ghani</span>, currently pursuing a BS in Software Engineering from Lahore, Pakistan.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl">
              <FaGraduationCap className="inline text-pink-500 mr-2" />
              My current CGPA is <span className="text-pink-500 font-semibold">3.67</span>.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl">
              <FaBriefcase className="inline text-pink-500 mr-2" />
              I've worked as a <span className="text-pink-500 font-light">SWE at Headstarters</span> and an <span className="text-pink-500 font-light">Intern at Web Dev Masters</span>.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl">
              <FaRobot className="inline text-pink-500 mr-2" />
              Currently building my skills in <span className="text-pink-500 font-light">Full-Stack AI Applications</span>.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl">
              <MdComputer className="inline text-pink-500 mr-2" />
              Actively participating in <span className="text-pink-500 font-light">Hackathons and Competitions.</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50">
              <Image
                src="/images/aboutsection.png"
                alt="Tabban Ghani"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 14rem, 20rem"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <About_Section />
      <Footer />
    </div>
  );
}

export default About;
