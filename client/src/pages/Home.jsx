import React from 'react';
import { FaShoppingCart, FaPills, FaHandHoldingHeart, FaUserFriends, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import bgImage from "../assets/bgimage.jpeg";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`, backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          ELDER CARE SERVICES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <a href="#order-groceries" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            Order Groceries
          </a>
          <a href="#order-medicines" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaPills className="mr-2" />
            Order Medicines
          </a>
          <a href="#request-volunteer" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaCalendarAlt className="mr-2" />
            Calendar
          </a>
          <a href="#our-volunteers" className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaUserFriends className="mr-2" />
            Our Volunteers
          </a>
          <a href="#find-services" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            Find Nearby Services
          </a>
          <a href="#contact-us" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center">
            <FaEnvelope className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
