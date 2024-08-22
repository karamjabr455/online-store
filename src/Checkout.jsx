// src/pages/Checkout.jsx

import React, { useState } from 'react';
import { Link ,useNavigate  } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaMoon, FaSun,FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from './images/logo.png'; 
import LanguageSelector from './components/LanguageSwitcher'; 
import BackgroundImage from './images/background-image.png';
import { useTranslation } from 'react-i18next';


const Checkout = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex flex-col relative ${isDarkMode ? 'dark' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     {/* navigation bar */}

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
          <div className="flex items-center space-x-4">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <LanguageSelector />
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
            <Link to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <FaShoppingCart className="text-white" />
            </Link>
            <Link to="/favorites" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md">
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
        {menuOpen && (
          <div className="fixed top-0 right-0 w-2/3 md:w-1/4 h-full bg-white shadow-lg z-50 p-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-black font-semibold hover:text-gray-600 transition">
                {t('home')}
              </Link>
              <Link to="/about" className="text-black font-semibold hover:text-gray-600 transition">
                {t('about_us')}
              </Link>
              <Link to="/products" className="text-black font-semibold hover:text-gray-600 transition">
                {t('products')}
              </Link>
              <Link to="/services" className="text-black font-semibold hover:text-gray-600 transition">
                {t('services')}
              </Link>
              <Link to="/contact" className="text-black font-semibold hover:text-gray-600 transition">
                {t('contact_us')}
              </Link>
            </div>
          </div>
        )}
      </nav>

{/* Main content of the page here */}
<div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#D6EFD83B] p-8 rounded-[50px] w-full max-w-5xl flex flex-col lg:flex-row h-auto lg:h-[500px]">
{/*left section*/}
<div className="flex-1 lg:w-1/2 lg:pr-4 flex flex-col justify-center">
{/* billing address */}
<h2 className="text-[#1A5319] text-2xl font-bold mb-4 text-center">{t('billing_address')}</h2>

{/* Billing form */}
<form className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input
                type="text"
                placeholder={t('full_name')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white w-full"
              />
              <input
                type="email"
                placeholder={t('email')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white w-full"
              />
              <input
                type="text"
                placeholder={t('city')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white w-full"
              />
              <input
                type="text"
                placeholder={t('address')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white w-full"
              />
            </div>

{/* Payment details address */}
<h2 className="text-[#1A5319] text-2xl font-bold mt-8 mb-4 text-center">{t('payment_details')}</h2>

{/* Payment details */}
<div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0 w-full">
              <input
                type="text"
                placeholder={t('name_on_card')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white flex-1"
              />
              <input
                type="text"
                placeholder={t('credit_card_number')}
                className="p-3 border-b border-gray-300 bg-transparent placeholder-white flex-1"
              />
            </div>

{/*buttons*/}
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 w-full justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-20 py-2 bg-[#7C8761AB] text-white border border-white rounded-full"
                style={{ borderRadius: '45px' }}
              >
                  {t('send')}
              </button>
              <button
                type="button"
                className="w-full md:w-auto px-20 py-2 bg-[#7C8761AB] text-white border border-white rounded-full"
                style={{ borderRadius: '45px' }}
                onClick={() => navigate(-1)} // This line makes the button return to the previous page

              >
                   {t('back')}
              </button>
            </div>
          </form>
        </div>

{/* Right section of the map */}
<div className="flex-1 lg:w-1/2 lg:pl-4 h-[400px] lg:h-full mt-6 lg:mt-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.3522995073862!2d36.22752015544162!3d33.568764246267136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518dd7e166c6e53%3A0xb2995cb7aad22bcb!2sHome!5e0!3m2!1sar!2s!4v1724099082900!5m2!1sar!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '20px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>




    <footer
      className="w-full flex flex-col lg:flex-row items-center lg:items-start font-poppins"
      style={{
        background: 'linear-gradient(135deg, #809b72, #779b72, #6f966d)',
      }}
    >
{/*left section*/}
<div className="w-full lg:w-1/3 p-8 flex flex-col items-center lg:items-start text-black">
        <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '120px' }} />
        <p className="text-sm text-white" style={{ fontSize: '14px' }}>
          {t('company_description')}
        </p>
      </div>

{/* right section */}
<div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-evenly p-8 text-white">
{/* First section */}
<div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('quick_links')}</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">{t('home')}</a></li>
            <li><a href="#our-products" className="hover:underline">{t('products')}</a></li>
            <li><a href="#about-us" className="hover:underline">{t('about_us')}</a></li>
            <li><a href="#our-services" className="hover:underline">{t('services')}</a></li>
          </ul>
        </div>

{/* Second Section */}
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

{/* Section Three */}
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
};

export default Checkout;
