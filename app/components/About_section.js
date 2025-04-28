import React from 'react';

const achievements = [
  {
    title: 'Frontend Based Hackathon 2025',
    image: '/certificates/hackathon1.PNG', 
    downloadLink: '/certificates/hackathon completion.pdf',
  },
  {
    title: 'CS50 Puzzle Challenge 2025',
    image: '/certificates/CS50.PNG',
    downloadLink: '/certificates/CS50 Tabban Ghani.pdf',
  },
];

function About_Section() {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-pink-500">HACKATHONS </span>COMPLETION
        </h1>
        <p className='text-gray-400 text-light text-2xl text-center mb-10'> 'Here's some details of my recent completion of hackthons !'</p>

        <div className="grid md:grid-cols-2 gap-8 ">
          {achievements.map((item, index) => (
            <div key={index} className=" p-6 rounded-xl shadow-lg border-2 border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 hover:shadow-2xl mb-10 cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-pink-500">{item.title}</h2>
              <a
                href={item.downloadLink}
                download
                className="inline-block mt-2 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Download Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About_Section;
