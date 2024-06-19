import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">ORDEM Construction</Link>
        <div className="flex-1 flex justify-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
          <Link to="/upcoming-projects" className="text-white hover:text-gray-300">Upcoming Projects</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
          <Link to="/team" className="text-white hover:text-gray-300">Our Team</Link>
        </div>
        <div>
          <Link to="/account" className="text-white hover:text-gray-300">Account</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
