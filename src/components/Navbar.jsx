import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">Bibhu Ranjan</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#fun-projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
            <a href="#achievements" className="text-gray-600 hover:text-blue-600 transition">Achievements</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="#home" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#fun-projects" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#achievements" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              className="text-xl text-gray-600 hover:text-blue-600 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 