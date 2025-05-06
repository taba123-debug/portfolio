import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Home_Intro from './components/Home_Intro'
import Footer from './components/Footer'
import './globals.css';
// import ContactForm from './components/Contact_form'
function page() {
  return (
    
<div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0f1f] to-[#2b1436] text-white">
  <Header/>
  <Home/>
  <Home_Intro/>
  {/* <ContactForm/> */}
  <Footer/>
  </div>
  )
}

export default page
