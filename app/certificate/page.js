import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const achievements = [
 
    {
      title: 'CS50 Puzzle Challenge 2025',
      image: '/certificates/CS50.PNG',
      downloadLink: '/certificates/CS50 Tabban Ghani.pdf',
    },
    {
      title: 'SQL Basics Certificate 2024',
      image: '/images/sql_1.PNG',
      downloadLink: '/certificates/SQL Basics.pdf',
    },
    {
      title: 'SQL Completion Certificate 2025',
      image: '/images/SQL_BASICS.PNG',
      downloadLink: '/certificates/SQL Completion.pdf',
    },
    {
      title: 'GEN AI Certificate 2024',
      image: '/images/GENAI.PNG',
      downloadLink: '/certificates/GEN AI.pdf',
    },
    {
      title: 'Python  Certificate 2025',
      image: '/images/Python_1.PNG',
      downloadLink: '/certificates/python completion.pdf',
    },
    {
      title: 'Workshop Certificate 2025',
      image: '/images/Image_decontral.PNG',
      downloadLink: '/certificates/Certicate_1.pdf',
    }
  ];
  
function page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white'>
      <Header/>
        <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-20 mb-12">
          <span className="text-pink-500">CERTIFICATIONS </span>COMPLETION
        </h1>
        <p className='text-gray-400 text-light text-2xl text-center mb-20'> 'Here's some details about my achievements !'</p>

        <div className="grid md:grid-cols-3 gap-4 ">
          {achievements.map((item, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg border-2 border-pink-500 mt-10 ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-cover rounded-lg mb-4"
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
    <Footer/>
    </div>
  )
}

export default page
