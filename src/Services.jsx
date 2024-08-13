import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaTimes, FaBars } from 'react-icons/fa'; 
import Logo from './images/logo.png'; 
import BackgroundImage from './images/background-image.png';
import ServiceImage from './images/service-image.png'; 

function Services() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-4 flex items-center justify-between z-50 border-b border-transparent shadow-none">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-24">
          <div className="flex items-center space-x-4 md:space-x-6">
            <img src={Logo} alt="Logo" className="w-12 h-auto" /> 
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white font-semibold hover:text-gray-300 transition">Home</Link>
              <Link to="/about" className="text-white font-semibold hover:text-gray-300 transition">About Us</Link>
              <Link to="/products" className="text-white font-semibold hover:text-gray-300 transition">Products</Link>
              <Link to="/services" className="text-white font-semibold hover:text-gray-300 transition">Services</Link>
              <Link to="/contact" className="text-white font-semibold hover:text-gray-300 transition">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <button
                onClick={toggleSearch}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <FaSearch className="text-black" />
              </button>
              {searchVisible && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48 md:w-60">
                  <button
                    onClick={toggleSearch}
                    className="absolute top-2 right-2 text-gray-500"
                  >
                    <FaTimes />
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
              )}
            </div>
            <Link to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
              <FaShoppingCart className="text-black" />
            </Link>
            <Link to="/favorites" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
              <FaHeart className="text-black" />
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <FaBars className="text-black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 bg-white shadow-lg rounded-lg p-4 w-64 md:hidden transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-gray-500"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col space-y-4 mt-8">
            <Link to="/" className="text-black font-semibold hover:text-gray-600">Home</Link>
            <Link to="/about" className="text-black font-semibold hover:text-gray-600">About Us</Link>
            <Link to="/products" className="text-black font-semibold hover:text-gray-600">Products</Link>
            <Link to="/services" className="text-black font-semibold hover:text-gray-600">Services</Link>
            <Link to="/contact" className="text-black font-semibold hover:text-gray-600">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow flex flex-col justify-center items-center py-10 md:py-20 relative px-4 md:px-6 lg:px-12 xl:px-24">
        {/* Title Section */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-center">OUR SERVICES</h1>

        {/* Image and Rectangles Section */}
        <div className="relative flex flex-col items-center">
          <img src={ServiceImage} alt="Service" className="w-60 md:w-80 h-auto mb-8 md:mb-12" /> 
          {/* Rectangles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <div className="w-full h-16 bg-[#D9D9D9] flex items-center justify-center rounded-lg text-center text-sm font-poppins">
              Selling accompanying gifts
            </div>
            <div className="w-full h-16 bg-[#D9D9D9] flex items-center justify-center rounded-lg text-center text-sm font-poppins">
              Delivery service
            </div>
            <div className="w-full h-16 bg-[#D9D9D9] flex items-center justify-center rounded-lg text-center text-sm font-poppins">
              Packaging service
            </div>
            <div className="w-full h-16 bg-[#D6EFD8] flex items-center justify-center rounded-lg text-center text-sm font-poppins">
              Selling flower bouquets
            </div>
            <div className="w-full h-16 bg-[#7C8761] flex items-center justify-center rounded-lg text-center text-sm font-poppins">
              Selling houseplants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;