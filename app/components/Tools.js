import React from 'react';
// import {
//   SiVisualstudiocode,
//   SiKaggle,
//   SiJupyter,
// } from 'react-icons/si';
import { FaCode, FaDatabase, FaGoogle } from 'react-icons/fa'; 
import { DiNetbeans } from 'react-icons/di'; 
import {
    // FaVisualStudioCode,
    // FaKaggle,
    // FaJupyter
} from 'react-icons/fa';

const tools = [
//   { name: 'VS Code', icon: <FaVisualStudioCode className="text-blue-400" /> },
//   { name: 'Kaggle', icon: <FaKaggle className="text-white" /> },
//   { name: 'Jupyter', icon: <FaJupyter className="text-orange-400" /> },
  { name: 'Dev C++', icon: <FaCode className="text-gray-300" /> },
  { name: 'Apache NetBeans', icon: <DiNetbeans className="text-blue-500" /> },
  { name: 'SQL Server', icon: <FaDatabase className="text-red-400" /> },
  { name: 'Google Colab', icon: <FaGoogle className="text-yellow-400" /> },
];

function Tools() {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-pink-500">Tools</span> I Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="border-2 border-pink-500 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 bg-[#1a1a1a] shadow-md"
            >
              <div className="text-5xl mb-2">{tool.icon}</div>
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
