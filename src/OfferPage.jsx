import React, { useState ,useEffect  } from 'react';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch, FaTimes, FaShoppingCart, FaHeart, FaBars, FaStar , FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from "./images/logo.png";
import BackgroundImage from "./images/background-image.png";
import LanguageSelector from './components/LanguageSwitcher';
import OurProducts from './OurProducts';


// Import images that will be used in the cards
import PlantImage1 from './images/plant1.png';
import PlantImage2 from './images/plant2.png';
import PlantImage3 from './images/plant3.png'; 
import PlantImage4 from './images/plant4.png';

function OfferPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const { t } = useTranslation(); 

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  
  const products = [
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage4,
      description: 'green plant pot mockup',
      oldPrice: '$50',
      newPrice: '$30',
    },
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage2,
      description: 'Another beautiful plant for your home.',
      oldPrice: '$45',
      newPrice: '$25',
    },
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage3,
      description: 'A stunning plant to brighten up your room.',
      oldPrice: '$60',
      newPrice: '$35',
    },
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage4,
      description: 'A lovely plant for garden decoration.',
      oldPrice: '$70',
      newPrice: '$40',
    },
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage2,
      description: 'Perfect plant for indoor spaces.',
      oldPrice: '$55',
      newPrice: '$28',
    },
    {
      name: 'lavender',
      image1: PlantImage1,
      image2: PlantImage3,
      description: 'Great plant for any occasion.',
      oldPrice: '$65',
      newPrice: '$32',
    },
  ];
  



  return (
    <div
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
          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-gray-500"
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

      {/* Special Plants Section */}
      <div className="p-6 md:p-8 lg:p-16 bg-opacity-70">
      <h2 className="text-3xl font-bold text-center mt-20 mb-20 text-white"> {t('special_plants_with_offer')}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div key={index} className="relative bg-[#D6EFD8BA] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] shadow-lg p-4 md:p-6 lg:p-8 pt-12">
{/* Pictures at the top of the card */}
<div className="relative flex justify-center items-start -mt-16">
            <img
              src={product.image1}
              alt={product.name}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-md"
              style={{ position: 'relative', top: '-50%',right:'50%' }}
            />
            <img
              src={product.image2}
              alt={product.name}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-md absolute"
              style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)' }}
            />
          </div>

{/* Product name, rating, favorite icon */}
<div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  text-[#1A5319]">{product.name}</h3>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-[${star <= 4 ? '#7C8761' : 'gray-400'}]`}
                />
              ))}
              <FaHeart className="text-[#7C8761] ml-4 cursor-pointer" />
            </div>
          </div>

{/* Product Description */}
<p className="text-[#7C8761] mt-2 text-sm md:text-base lg:text-lg">{product.description}</p>

{/* Price and discount */}
<div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-left flex flex-col md:flex-row items-center space-y-2 md:space-x-20">
              <span className="text-gray-500 line-through text-sm md:text-base lg:text-lg">{product.oldPrice}</span>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold  text-[#1A5319]">{product.newPrice}</span>
            </div>
            <FaShoppingCart className="text-[#7C8761] cursor-pointer mt-4 md:mt-0" />
          </div>
        </div>
      ))}
    </div>
  </div>
    {/*Slider products section*/}
  <div id="our-products">
  <OurProducts />
</div>

  {/* Footer section*/}
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
}

export default OfferPage;