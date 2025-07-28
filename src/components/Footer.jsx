import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Bibhu Ranjan</h3>
            <p className="text-gray-400">AI Product Manager (IELTSAPPEAL)</p>
            <p className="text-gray-400">bibhuranjan621@gmail.com</p>
            <p className="text-gray-400">+918789698369</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://in.linkedin.com/in/bibhu-ranjan" target="_blank" className="text-gray-400 hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Bibhu Ranjan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 