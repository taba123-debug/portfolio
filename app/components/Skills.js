import React from 'react';
import {
  SiCplusplus,
  SiPython,
  SiFlask,
//   SiJava,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiStrapi,
  SiOpenai,
} from 'react-icons/si';

const skills = [
  { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
  { name: 'Python', icon: <SiPython className="text-blue-800" /> },
  { name: 'Flask', icon: <SiFlask className="text-white" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-300" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-300" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Strapi', icon: <SiStrapi className="text-violet-400" /> },
  { name: 'Gen AI', icon: <SiOpenai className="text-green-300" /> },
];

function Skills() {
  return (
    <section className=" text-white py-16 px-6 mt-30 mb-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-pink-500">Skills</span> I Have
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-2 border-pink-500 rounded-xl p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-[#1a1a1a] shadow-md"
            >
              <div className="text-5xl">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
