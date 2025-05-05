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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white pt-30 ">
      <Header />
      <section className=" text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-3xl flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-6 mt-20">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-pink-500">WHO </span> I'M ?
            </h2>

            <p className=" text-2xl">
              <FaMapMarkerAlt className="inline text-pink-500 mr-2 text-2xl" />I
              am{" "}
              <span className="text-pink-500 text-2xl font-semibold">
                Tabban Ghani
              </span>
              , currently pursuing a BS in Software Engineering from Lahore,
              Pakistan.
            </p>

            <p className="text-2xl">
              <FaGraduationCap className="inline text-pink-500 mr-2 text-2xl" />
              My current CGPA is{" "}
              <span className="text-pink-500 font-semibold">3.67</span>.
            </p>

            <p className="text-2xl">
              <FaBriefcase className="inline text-pink-500 mr-2 text-2xl" />
              I've worked as a{" "}
              <span className="text-pink-500 font-light">
                SWE at Headstarters
              </span>{" "}
              and a{" "}
              <span className="text-pink-500 font-light">
                Intern at Web Dev Masters
              </span>
              .
            </p>

            <p className="text-2xl">
              <FaRobot className="inline text-pink-500 mr-2" />
              Currently building my skills in{" "}
              <span className="text-pink-500 font-light">
                Full-Stack AI Applications
              </span>
              .
            </p>

            <p className="text-2xl">
              <MdComputer className="inline text-pink-500 mr-2" />
              Actively participating in{" "}
              <span className="text-pink-500 font-light">
                Hackathons and Competitions.
              </span>
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
  <div className="relative w-48 h-48 md:w-72 md:h-72 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40">
    <Image
      src="/images/Image_3.png"
      alt="Tabban Ghani"
      fill
      className="object-cover rounded-full border-8 border-pink-500"
      sizes="(max-width: 768px) 12rem, 18rem" 
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
