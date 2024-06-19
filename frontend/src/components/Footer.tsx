import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>1234 Example Street</p>
          <p>City, State ZIP</p>
          <p>Email: info@ordem.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} ORDEM. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
