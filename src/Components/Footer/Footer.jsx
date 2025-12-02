import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {

  //smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId)
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        {/* Name / logo */}
        <h2 className='text-xl font-semibold text-purple-500'>Jayesh Mour</h2>

        {/* Navigation link - Responsive */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name: "About", id: "about"},
            {name: "Skills", id: "skills"},
            {name: "Experience", id: "experience"},
            {name: "Projects", id: "work"},
            {name: "Education", id: "education"},
          ].map((item, index) => (
            <button
            key={index}
            onClick={() =>  handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social media icons - responsive */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            { icon: <FaFacebook />},
            { icon: <FaTwitter />},
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jayesh-mour-3bab5b227" },
            { icon: <FaInstagram />},
            { icon: <FaYoutube />},

          ].map((item, index) => (
            <a 
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-purple-500 transition:transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Cpoyright text */}
        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Jayesh Mour. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
