import React from 'react';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaRobot } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import Image from 'next/image';
import Header from '../components/Header';
import About_Section from '../components/About_section';
import Footer from '../components/Footer';
// import Tools from '../components/Tools';
function About() {
  return (
   <div className='min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white'>
    <Header/>
    <section className=" text-white py-16 px-6">
       
       <div className="max-w-6xl mx-auto text-3xl flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
  
         <div className="md:w-1/2 space-y-6 mt-20">
           <h2 className="text-4xl font-bold mb-4">
             <span className="text-pink-500">WHO </span> I'M ?
           </h2>
 
           <p className=" text-2xl">
             <FaMapMarkerAlt className="inline text-pink-500 mr-2 text-2xl" />
             I am <span className="text-pink-500 text-2xl font-semibold">Tabban Ghani</span>, currently pursuing a BS in Software Engineering from Lahore, Pakistan.
           </p>
 
           <p className="text-2xl">
             <FaGraduationCap className="inline text-pink-500 mr-2 text-2xl" />
             My current CGPA is <span className="text-pink-500 font-semibold">3.67</span>.
           </p>
 
           <p className="text-2xl">
             <FaBriefcase className="inline text-pink-500 mr-2 text-2xl" />
             I've worked as a <span className="text-pink-500 font-light">SWE at Headstarters</span> and 
             a <span className="text-pink-500 font-light">Intern at Web Dev Masters</span>.
           </p>
 
           <p className="text-2xl">
             <FaRobot className="inline text-pink-500 mr-2" />
             Currently building my skills in <span className="text-pink-500 font-light">Full-Stack AI Applications</span>.
           </p>
 
           <p className="text-2xl">
             <MdComputer className="inline text-pink-500 mr-2" />
             Actively participating in <span className="text-pink-500 font-light">Hackathons and Competitions</span>.
           </p>
         </div>
 
        
         <div className="md:w-1/2 flex justify-center">
     
           <Image
             src="/images/Image_3.png"
             alt="Tabban Ghani"
             width={280}
             height={280}
             className="w-75 h-78 object-cover rounded-full border-8 border-pink-500"/>
         </div>
       </div>
     </section>
     <About_Section/>
     {/* <Tools/> */}
     <Footer/>
   </div>
   
  );
}

export default About;
