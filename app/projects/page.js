import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const projects = [
  {
    title: "AI Resume Builder",
    description: "Create ATS-friendly resumes with AI suggestions.",
    tech: ["Next.js", "Flask", "Tailwind", "OpenAI"],
    liveLink: "https://yourdomain.com/ai-resume",
    githubLink: "https://github.com/yourusername/ai-resume",
  },
];

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white">
      <Header />
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h1 className="text-4xl font-bold text-center mt-20 mb-12">
            MY RECENT
            <span className="text-pink-500"> WORK </span>COMPLETION !
          </h1>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className=" p-6 rounded-2xl border border-pink-500 hover:shadow-pink-500/40 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-pink-600 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default page;
