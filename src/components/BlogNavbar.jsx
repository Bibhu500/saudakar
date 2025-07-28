import React from 'react';
import { Link } from 'react-router-dom';

const BlogNavbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800">Bibhu Ranjan</Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/#blogs" className="text-gray-600 hover:text-blue-600 transition">Blogs</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogNavbar; 