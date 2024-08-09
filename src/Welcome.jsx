import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "./images/background-image.png";
import Logo from "./images/logo.png";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./ThemeContext"; 

const Welcome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext); // Use ThemeContext to check dark mode

  // Module status
  const [showModal, setShowModal] = useState(false);

  // Logout function
  const handleLogout = () => {
    setShowModal(true); // Show the module when you click log out
  };

  // Function that implements the actual exit
  const confirmLogout = () => {
    navigate("/login"); // Direct the user to the login page
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center p-4 font-poppins ${
        darkMode ? "dark-mode" : ""
      }`}
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(to bottom, #334B2A 50%, #081C0B 100%)"
          : `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <img src={Logo} alt="Logo" className="w-20 h-auto md:w-28" />
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 ${
          darkMode ? "bg-dark-form" : "bg-[#6d996e]"
        } bg-opacity-90 backdrop-blur-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] w-full max-w-lg p-6 sm:p-8 flex flex-col items-center rounded-lg`}
        style={{
          borderRadius: "20px",
          border: "2px solid rgba(255, 255, 255, 0.7)",
        }}
      >
        {/* Log out button */}
        <button
          onClick={handleLogout}
          className={`absolute top-4 right-4 ${
            darkMode ? "bg-gray-700 text-white" : "bg-[#7C8761AB] text-white"
          } px-4 py-2 rounded-full hover:bg-[#6b7856] transition`}
        >
          {t("welcome.logoutButton")}
        </button>

        {/* Welcome text */}
        <h1
          className={`text-xl sm:text-2xl font-bold mb-8 mt-6 ${
            darkMode ? "text-dark-title" : "text-black"
          }`}
        >
          {t("welcome.title")}
        </h1>

        {/* View images */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <img
            src={Image1}
            alt="Product 1"
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg ${
              darkMode ? "filter-dark" : ""
            }`}
          />
          <img
            src={Image2}
            alt="Product 2"
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg ${
              darkMode ? "filter-dark" : ""
            }`}
          />
          <img
            src={Image3}
            alt="Product 3"
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg ${
              darkMode ? "filter-dark" : ""
            }`}
          />
        </div>
      </motion.div>

      {/* Modal for logout confirmation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: darkMode
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <motion.div
              className={`p-6 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-800 bg-opacity-90" : "bg-white bg-opacity-90"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "20px",
                width: "280px",
              }}
            >
              <h2
                className="text-center text-lg font-bold mb-4"
                style={{ color: "#80af81" }}
              >
                {t("welcome.modalTitle")}
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={confirmLogout}
                  className={`border px-4 py-2 rounded-full w-full transition ${
                    darkMode
                      ? "bg-transparent border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "bg-transparent border-[#7C8761AB] text-[#7C8761AB] hover:bg-[#7C8761AB] hover:text-white"
                  }`}
                >
                  {t("welcome.modalLogout")}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className={`border px-4 py-2 rounded-full w-full transition ${
                    darkMode
                      ? "bg-transparent border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "bg-transparent border-[#7C8761AB] text-[#7C8761AB] hover:bg-[#7C8761AB] hover:text-white"
                  }`}
                >
                  {t("welcome.modalCancel")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Welcome;