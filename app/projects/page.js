import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Remote Job Hunt",
    description: "A platform to find remote jobs and connect with recruiters. Users can find Business domain Job and can apply , admin has all the access to manage Dashboard.",
    tech: ["NextJs", "Tailwind CSS", "Strapi"],
    liveLink: "https://github.com/taba123-debug/JobHumt",
    githubLink: "",
  },
  {
    title: "Job Junction",
    description: "Connect with HR of your dream company for resume suggestions schedule for interview preps.Connect with peers for Hackathons ",
    tech: ["Next.js", "Tailwind CSS", "React"],
    liveLink: "https://github.com/taba123-debug/Job-Junction",
    githubLink: "",
  },

  {
    title: "Basic Portfolio Website",
    description: "A basic portfolio website to showcase my projects and skills.",
    tech: ["HTML", "CSS" , "JavaScript" , "Vercel"],
    liveLink: "https://porfolio-name.vercel.app/",
    githubLink: "https://github.com/yourusername/ai-resume",
  },
  // {
  //   title: "Recipe Website Project ",
  //   description: "A recipe website project using HTML5 , CSS and Javascript.User can filter the recipes by cuisine and type.",
  //   tech: ["HTML5", "CSS" , "Javascript"],
  //   liveLink: "https://yourdomain.com/ai-resume",
  //   githubLink: "https://github.com/yourusername/ai-resume",
  // },
  {
    title: "Software Company Frontend",
    description: "A Frontend for a software company showcasing their services and portfolio.Shwocasing frontend skills",
    tech: ["HTML 5", "CSS", "vercel"],
    liveLink: "https://github.com/taba123-debug/Hackathon",
    // githubLink: "https://github.com/taba123-debug/Hackathon",
  }
];


function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white">
      <Header />
      <section>

        <div
        className="max-w-6xl mx-auto pt-40">
        <h1 className="text-4xl font-bold text-center mt-22 mb-15">
         MY RECENT <span className="text-pink-500">PROJECTS ! </span>
        </h1>
        <p className='text-gray-400 text-light text-2xl text-center mb-20'> 'Here's some detail about my recent work completion and the technologies I've used !'</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
      

          {projects.map((project, index) => (
            <div
              key={index}
              className=" p-6 rounded-2xl border border-pink-500 hover:shadow-pink-500/40 hover:shadow-2xl transition duration-300 mb-10 cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
              <p className=" text-gray-300 text-sm mb-4 mt-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-600 mt-7 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-pink-700 transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {/* <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600"
                >
                  Live Demo
                </a> */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mt-7 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 text-2xl"
                >
                  <FaGithub className="inline mr-2 text-2xl" />
                  Link
                </a>
              </div>
            </div>
          ))}
       
        </div>
        
        </div>
      </section>
      

      <Footer />
    </div>
  );
}

export default page;
