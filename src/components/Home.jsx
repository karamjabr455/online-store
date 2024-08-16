import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurServices from '../OurServices';
import OurProducts from '../OurProducts';
import ContactUs from '../ContactUs';
import Footer from '../Footer'; 

import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaTimes,
  FaBars,
  FaGooglePlay,
  FaApple,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Logo from "../images/logo.png";
import BackgroundImage from "../images/background-image.png";
import FlowerImage from "../images/flower-image.png";
import { useSpring, animated } from "@react-spring/web";
import AboutUsSection from "../AboutUsSection";
import LanguageSelector from "./LanguageSwitcher"; // تأكد من المسار الصحيح
import ThemeToggleButton from "./ThemeToggleButton"; // تأكد من المسار الصحيح
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Spring animation for sliding in from the top
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-50px)",
    config: { tension: 170, friction: 26 },
  }));

  useEffect(() => {
    set({ opacity: 1, transform: "translateY(0)" });

    // قراءة حالة الوضع الداكن من localStorage وتطبيقها
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [set]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col relative ${isDarkMode ? 'dark' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-4 flex items-center justify-between z-50 border-b border-transparent shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-24">
          <div className="flex items-center space-x-4 md:space-x-6">
            <img src={Logo} alt="Logo" className="w-12 h-auto" />
            <div className={`hidden md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
              <Link
                to="/"
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {t("about_us")}
              </Link>
              <Link
                to="/products"
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {t("products")}
              </Link>
              <Link
                to="/services"
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {t("services")}
              </Link>
              <Link
                to="/contact"
                className="text-white font-semibold hover:text-gray-300 transition"
              >
                {t("contact_us")}
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
                    placeholder={t("search_placeholder")}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
              )}
            </div>
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
              onClick={() => alert("Logged out")} // استبدلها بوظيفة تسجيل الخروج الخاصة بك
              className="px-4 py-2 border border-white rounded-full text-white font-semibold transition hover:bg-[#4b7c4a]"
              style={{ borderRadius: "46px" }}
            >
              {t("log_out")}
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
              <Link
                to="/"
                className="text-black font-semibold hover:text-gray-600 transition"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="text-black font-semibold hover:text-gray-600 transition"
              >
                {t("about_us")}
              </Link>
              <Link
                to="/products"
                className="text-black font-semibold hover:text-gray-600 transition"
              >
                {t("products")}
              </Link>
              <Link
                to="/services"
                className="text-black font-semibold hover:text-gray-600 transition"
              >
                {t("services")}
              </Link>
              <Link
                to="/contact"
                className="text-black font-semibold hover:text-gray-600 transition"
              >
                {t("contact_us")}
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="flex-grow flex flex-col justify-center items-center relative">
        <animated.section
          style={props}
          className="py-8 px-4 md:py-12 md:px-8 lg:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between container mx-auto"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white text-xs md:text-sm lg:text-base font-semibold mb-1 md:mb-2">
              <span className="text-black">|</span> {t("artificial_flowers")}
            </h2>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              {t("unique_flowers")}
            </h3>
            <p className="text-white mb-4 md:mb-6 lg:mb-8">
              {t("flower_description")}
            </p>
            <Link
              to="/shop"
              className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#ACB39B] text-black font-semibold rounded-lg shadow-md hover:bg-[#9e9e9e] transition"
            >
              {t("shop_now")}
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-end mt-8">
            <img
              src={FlowerImage}
              alt={t("flower_image_alt")}
              className="w-80 h-auto md:w-96 lg:w-[400px] hidden md:block mt-10"
            />
          </div>
        </animated.section>

        <animated.section
          style={props}
          className="py-4 px-4 md:px-8 lg:px-12 xl:px-24 mt-4 container mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start justify-start text-white text-center md:text-left">
            <p className="text-lg font-semibold flex items-center space-x-2 md:mr-8 mb-4 md:mb-0">
              <span
                className="text-5xl text-black"
                style={{ height: "2rem", width: "0.5rem" }}
              >
                |
              </span>
              <span>
                {t("experience_years")} <br />
                {t("experience")}
              </span>
            </p>
            <p className="text-lg font-semibold flex items-center space-x-2 md:mr-8 mb-4 md:mb-0">
              <span
                className="text-5xl text-black"
                style={{ height: "2rem", width: "0.5rem" }}
              >
                |
              </span>
              <span>
                {t("gifts_sent")} <br />
                {t("gifts_last_year")}
              </span>
            </p>
            <p className="text-lg font-semibold flex items-center space-x-2">
              <span
                className="text-5xl text-black"
                style={{ height: "2rem", width: "0.5rem" }}
              >
                |
              </span>
              <span>
                {t("customer_satisfaction")} <br />
                {t("satisfaction")}
              </span>
            </p>
          </div>

          {/* App Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mt-12">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent border-2 border-[#ACB39B] text-[#FFFFFF] font-semibold rounded-lg shadow-md hover:bg-[#ACB39B] hover:text-white transition px-6 py-3"
            >
              <FaGooglePlay
                className="mr-3"
                style={{ width: "2.5rem", height: "2.5rem", color: "#3DDC84" }}
              />
              <span className="text-lg">
                {t("get_it_on")} <br />
                {t("google_play")}
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent border-2 border-[#ACB39B] text-[#FFFFFF] font-semibold rounded-lg shadow-md hover:bg-[#ACB39B] hover:text-white transition px-6 py-3"
            >
              <FaApple
                className="mr-3"
                style={{ width: "2.5rem", height: "2.5rem", color: "white" }}
              />
              <span className="text-lg">
                {t("available_on")} <br />
                {t("app_store")}
              </span>
            </a>
          </div>
        </animated.section>

        <div id="about-us">
  <AboutUsSection />
</div>
<div id="our-services">
  <OurServices />
</div>
<div id="our-products">
  <OurProducts />
</div>

  <ContactUs />

        <Footer />

        
      </div>
      
    </div>
  );
}

export default Home;