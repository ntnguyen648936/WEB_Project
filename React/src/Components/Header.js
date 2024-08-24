import React from 'react';
import './Header.css';

const Header = () => (
  <header className="bg-gray-900 text-white p-4 fixed w-screen">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Freelancer team</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Courses</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
