import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label:"Contact"}
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-[#050414]/50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Jayesh</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Mour</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                className="cursor-pointer hover:text-[#8245ec]" 
                onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/jayeshmour44"
              target="_blank"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayesh-mour-3bab5b227"
              target="_blank"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Toggle Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU — moved OUTSIDE nav so blur works */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/50 backdrop-blur-lg z-40 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/jayeshmour44"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jayesh-mour-3bab5b227"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
