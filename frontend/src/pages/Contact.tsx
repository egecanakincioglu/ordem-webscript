import React from 'react';
import HeaderElement from '../components/HeaderElement';

const Contact: React.FC = () => {
  return (
    <HeaderElement>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">ORDEM Construction</h2>
          <p className="text-gray-700 mb-4">123 Main Street, City, Country</p>
          <p className="text-gray-700 mb-4">Phone: +123 456 7890</p>
          <p className="text-gray-700 mb-4">Email: info@ordemconstruction.com</p>
        </div>
        <form className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
        </form>
      </div>
    </HeaderElement>
  );
}

export default Contact;
