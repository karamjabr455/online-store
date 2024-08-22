import React, { useState } from 'react';
import { useLocation,Link, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch, FaShoppingCart, FaHeart, FaTimes, FaSun, FaMoon, FaFilter, FaChevronLeft ,FaChevronRight , FaStar, FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Logo from "./images/logo.png";
import Rectangle61 from './images/Rectangle 61 .png';
import BackgroundImage from "./images/background-image.png";
import ProductImage from './images/Rectangle 311.png';
import GreenPlantImage from './images/Green Plant.png';
import LanguageSelector from './components/LanguageSwitcher';
import OurProducts from './OurProducts';
import { useTranslation } from 'react-i18next';





function Productsdetails() {
    // State hooks for managing component states
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => setFilterOpen(!filterOpen);
  
  const pricePerUnit = 30.00;

  // Navigation and location hooks
  const location = useLocation();
  const navigate = useNavigate();
// Toggle functions
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);
  // Extract product details from location state
  const { product } = location.state || {};

  // Event handlers
  const handleGoHome = () => {
    navigate('/Home');

  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1);


  const handleDecrease = () => {
    if (quantity > 1) { // Change to > 1 to prevent going below 1
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  const totalPrice = (quantity * pricePerUnit).toFixed(2);
  const { t } = useTranslation();
  return (
    <div
      className={`min-h-screen flex flex-col relative ${isDarkMode ? 'dark' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

           {/* Navigation Bar */}
     <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-4 flex items-center justify-between z-50 border-b border-transparent shadow-md">
  <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-24">
    <div className="flex items-center space-x-4 md:space-x-6">
      <img src={Logo} alt="Logo" className="w-12 h-auto" />
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link to="/" className="text-white font-semibold hover:text-gray-300 transition">
          {t('home')}
        </Link>
        <Link to="/about" className="text-white font-semibold hover:text-gray-300 transition">
          {t('about_us')}
        </Link>
        <Link to="/products" className="text-white font-semibold hover:text-gray-300 transition">
          {t('products')}
        </Link>
        <Link to="/services" className="text-white font-semibold hover:text-gray-300 transition">
          {t('services')}
        </Link>
        <Link to="/contact" className="text-white font-semibold hover:text-gray-300 transition">
          {t('contact_us')}
        </Link>
      </div>
    </div>
     {/* Theme Toggle Button */}
    <div className="flex items-center space-x-4">
      <button
        onClick={handleThemeToggle}
        className="p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <LanguageSelector />

          {/* Search Button */}
      <div className="relative flex items-center">
        <button
          onClick={toggleSearch}
          className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
        >
          <FaSearch className="text-white" />
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

         {/* Cart and Favorites Links */}
      <Link
        to="/cart"
        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaShoppingCart className="text-white" />
      </Link>
      <Link
        to="/favorites"
        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaHeart className="text-white" />
      </Link>
      <button
        onClick={() => alert("Logged out")}
        className="px-4 py-2 border border-white rounded-full text-white font-semibold transition hover:bg-[#4b7c4a]"
        style={{ borderRadius: "46px" }}
      >
        {t('log_out')}
      </button>
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaBars className="text-white" />
      </button>
    </div>
  </div>

   {/* Mobile Menu */}
  {menuOpen && (
    <div className="fixed top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden">
      <button
        onClick={toggleMenu}
        className="absolute top-2 right-2 text-gray-500"
      >
        <FaTimes />
      </button>
      <div className="flex flex-col space-y-4 mt-8">
        <Link
          to="/"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('home')}
        </Link>
        <Link
          to="/about"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('about_us')}
        </Link>
        <Link
          to="/products"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('products')}
        </Link>
        <Link
          to="/services"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('services')}
        </Link>
        <Link
          to="/contact"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('contact_us')}
        </Link>
      </div>
    </div>
  )}
</nav>
   {/*Image background section */}
<div className="relative w-full h-[60vh] flex items-center justify-center">
  <img
    src={GreenPlantImage}
    alt={t('green_plant_alt')}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-4xl font-bold shadow-md shadow-black/50 bg-black/30 p-4 rounded-lg">
      {t('green_plant_title')}
    </div>
  </div>
</div>


 {/* Filter button */}
<div className="relative flex flex-col items-center pt-16 pb-8">
     
      <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
        <button
          onClick={toggleFilter}
          className="flex items-center px-4 py-2 bg-transparent border border-white text-[#1A5319] rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaFilter className="text-xl mr-2" />
          <span className="text-sm font-semibold">{t('filter_button')}</span>
        </button>
      </div>

      {/* Sidebar for filtering */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ${filterOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#1A5319]">{t('filter_title')}</h2>
          <button
            onClick={toggleFilter}
            className="text-[#1A5319] text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-4 mt-6">
          <div className="border-b border-gray-200 mb-4"></div>
          <button className="flex items-center justify-between w-full px-4 py-2 text-[#1A5319] bg-transparent rounded mb-2">
            <span>{t('color')}</span>
            <FaChevronRight />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-2 text-[#1A5319] bg-transparent rounded mb-2">
            <span>{t('name')}</span>
            <FaChevronRight />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-2 text-[#1A5319] bg-transparent rounded mb-2">
            <span>{t('category')}</span>
            <FaChevronRight />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-2 text-[#1A5319] bg-transparent rounded mb-2">
            <span>{t('price')}</span>
            <FaChevronRight />
          </button>
        </div>
      </div>

                  {/*Product details section */}
                  <div className="w-full flex justify-center mb-8">
                  <h2 className="text-4xl font-bold text-[#d0d0d0]">{product?.name || t('product_name')}</h2>
</div>

<div className="flex flex-col md:flex-row justify-center w-full px-4">
  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 max-w-[90%] md:max-w-[70%] mx-auto">
    <div className="flex-shrink-0 w-full md:w-auto">
      <img
       src={product?.image || ProductImage}
        alt={t('product_image_alt')}
        className="w-full md:w-64 h-auto rounded-lg shadow-lg"
      />
    </div>

    <div className="bg-white bg-opacity-0 shadow-lg rounded-lg p-6 w-full max-w-full md:max-w-[500px]">
            <p className="text-[#d0d0d0]">
            Add a touch of nature and liveliness to your garden or office with our planters.
            </p>

           

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { title: t('spec_size'), value: t('spec_size_value') },
          { title: t('spec_height'), value: t('spec_height_value') },
          { title: t('spec_category'), value: t('spec_category_value') },
          { title: t('spec_color'), value: t('spec_color_value') },
        ].map((spec, index) => (
          <div key={index} className="bg-[#98bc97] p-4 rounded-lg border border-transparent hover:border-[#1A5319] transition-all duration-300">
            <h3 className="text-[#1A5319] text-sm font-semibold">{spec.title}</h3>
            <p className="text-white text-lg">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[#d0d0d0] text-lg font-semibold">
        {t('quantity_label')}
      </div>


      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleDecrease}
            className="bg-[#7C8761] text-white p-3 rounded-full border border-black hover:bg-[#6A704F] transition focus:outline-none"
            style={{ backgroundColor: 'rgba(124, 135, 97, 0.1)', borderRadius: '10px' }}
          >
                    <FaMinus />
                  </button>
                  <span className="text-2xl text-white">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="bg-[#7C8761] text-white p-3 rounded-full border border-black hover:bg-[#6A704F] transition focus:outline-none"
                    style={{ backgroundColor: 'rgba(124, 135, 97, 0.1)', borderRadius: '10px' }}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="text-white text-xl font-semibold">
          {t('total_label')}: ${totalPrice}
        </div>

              </div>

          {/* New buttons */}
<div className="flex flex-col md:flex-row md:justify-between gap-4 mt-8">
  <button
    className="flex items-center px-12 py-2 bg-[#D6EFD8] text-[#7C8761] rounded-full shadow-md hover:bg-[#C2D6C2] transition w-full md:w-auto"
    style={{ borderRadius: '45px' }}
  >
    <FaCartPlus className="mr-2 text-lg" />
    <span className="text-sm font-semibold">{t('buy_now')}</span>
  </button>
  <button
    className="flex items-center px-12 py-2 bg-[#7C8761AB] text-white rounded-full shadow-md hover:bg-[#6A704F] transition w-full md:w-auto"
    style={{ borderRadius: '45px' }}
  >
    <FaShoppingCart className="mr-2 text-lg" />
    <span className="text-sm font-semibold">{t('add_to_cart')}</span>
  </button>
</div>

            </div>
          </div>
        </div>

        {/*Star rating section */}

        <div className="flex justify-center md:justify-start mt-6 md:mr-96">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="focus:outline-none"
            >
              <FaStar
                className={`text-2xl ${
                  star <= rating ? 'text-white' : 'text-[#7C8761]'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleGoHome}
          className="absolute top-4 right-4 bg-transparent border border-white text-white rounded-full p-3 transition-transform transform hover:scale-105 hover:translate-x-2 z-10"
          style={{ borderRadius: '30px', transition: 'transform 300ms ease-out' }}
        >
          <FaChevronLeft />
        </button>
      </div>
      {/*Similar Items You May Like */}
      <div id="our-products">
      <OurProducts title={t('similar_items')} />
</div>
{/* Product details */}
<div className="w-full md:w-2/2 mt-20 flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src={Rectangle61}
            alt={t('limited_offer_title')}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="relative flex-1 bg-gradient-to-r from-[#5a9159] via-[#649663] to-[#719d72] p-6 flex flex-col justify-center items-start">
          <h4 className="text-white mb-4 uppercase" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)' }}>
            {t('limited_offer')}
          </h4>
          <p className="text-white font-bold mb-4 uppercase" style={{ fontSize: '30px' }}>
            {t('offer_details')}
          </p>
          <button className="bg-transparent text-white  px-6 py-2 rounded-full flex items-center hover:bg-white hover:text-black transition">
            <span className="mr-2">{t('grab_it_now')}</span>
            
          </button>
        </div>
      
      </div>
      <footer
      className="w-full flex flex-col lg:flex-row items-center lg:items-start font-poppins mt-20"
      style={{
        background: 'linear-gradient(135deg, #809b72, #779b72, #6f966d)',
      }}
    >
      {/* Left section*/}
      <div className="w-full lg:w-1/3 p-8 flex flex-col items-center lg:items-start text-black">
        <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '120px' }} />
        <p className="text-sm text-white" style={{ fontSize: '14px' }}>
          {t('company_description')}
        </p>
      </div>

      {/* Right section*/}
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-evenly p-8 text-white">
        {/*First section*/}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('quick_links')}</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">{t('home')}</a></li>
            <li><a href="#our-products" className="hover:underline">{t('products')}</a></li>
            <li><a href="#about-us" className="hover:underline">{t('about_us')}</a></li>
            <li><a href="#our-services" className="hover:underline">{t('services')}</a></li>
          </ul>
        </div>

        {/*Second section*/}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('contact_us')}</h3>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <span>{t('phone')}: 8979925</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>{t('email')}: info@gmail.com</span>
          </div>
        </div>

        {/*Section Three*/}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('follow_us')}</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaFacebookF className="text-white" />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaTwitter className="text-white" />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaInstagram className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Productsdetails;
