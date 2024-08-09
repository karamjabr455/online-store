import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PlantBackground from "./images/Rectangle 16.png";
import BackgroundImage from "./images/background-image.png";
import Logo from "./images/logo.png";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext); // Use ThemeContext to check dark mode

  const handleSignUpClick = () => {
    navigate("/Verify");
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center p-4 font-poppins ${darkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(to bottom, #334B2A 50%, #081C0B 100%)"
          : `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo - hidden on screens smaller than large */}
      <div className={`absolute top-4 left-4 flex items-center hidden lg:flex ${darkMode ? 'text-dark-title' : 'text-black'}`}>
        <img
          src={Logo}
          alt="Logo"
          className="w-32 h-auto mr-4 max-w-full"
          style={{
            transform: "translateX(20px)", 
          }}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl">
        {/* Background Image - visible only on large screens and above */}
        <motion.div
          className={`relative flex-1 flex justify-center items-center hidden lg:block ${darkMode ? 'bg-dark-overlay' : ''}`}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            transform: "translateX(20px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src={PlantBackground}
            alt="Plants Background"
            className={`object-cover opacity-70 rounded-lg shadow-inner ${darkMode ? 'filter-dark' : ''}`}
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50px",
            }}
          />
        </motion.div>

        {/* Form Container */}
        <motion.div
          className={`relative flex-1 ${darkMode ? 'bg-dark-form' : 'bg-[#6d996e]'} bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] p-6 sm:p-8 flex flex-col items-center`}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: "50px",
            border: "2px solid rgba(255, 255, 255, 0.7)",
          }}
        >
          <div className={`text-center mb-4 ${darkMode ? 'text-dark-title' : 'text-black'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {t('signup.title')}
            </h2>
            <FaUserPlus className={`text-4xl sm:text-5xl mx-auto p-3 rounded-full shadow-md ${darkMode ? 'text-dark-title bg-gray-700' : 'text-black bg-white'}`} />
          </div>
          <form className="space-y-4 w-full">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="text"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.usernamePlaceholder')}
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="tel"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.phonePlaceholder')}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="email"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.emailPlaceholder')}
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="password"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.passwordPlaceholder')}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="password"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.confirmPasswordPlaceholder')}
                />
              </div>
              <div className="w-full flex items-center mt-4 sm:mt-0">
                <input id="file-upload" type="file" className="hidden" />
                <label
                  htmlFor="file-upload"
                  className={`flex items-center justify-start w-full border-b bg-transparent focus:outline-none text-sm cursor-pointer ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                  }}
                >
                  {t('signup.uploadCertificate')}
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className={`w-full py-3 text-sm text-white transition border border-white rounded-full sm:w-80 hover:bg-[#5a6c50] ${darkMode ? 'bg-dark-button' : 'bg-[#6c825a]'}`}
                onClick={handleSignUpClick}
              >
                {t('signup.registerButton')}
              </button>
            </div>
            <p className={`mt-4 text-sm text-center ${darkMode ? 'text-dark-title' : 'text-white'}`}>
              {t('signup.loginText')}{" "}
              <Link to="/login" className={`hover:underline ${darkMode ? 'text-dark-title' : 'text-green-800'}`}>
                {t('signup.loginLink')}
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUp;