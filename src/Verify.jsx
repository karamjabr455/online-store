import React, { useContext } from "react";
import { FaShieldAlt } from "react-icons/fa";
import BackgroundImage from "../src/images/background-image.png";
import PlantBackground from "./images/Rectangle 16.png";
import Logo from "./images/logo.png";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./ThemeContext"; 

function Verify() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext); // Use ThemeContext to check dark mode

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
        backgroundColor: darkMode ? "#081C0B" : "", 
      }}
    >
      {/* Logo */}
      <div
        className={`absolute top-4 left-4 md:top-8 md:left-16 ${
          darkMode ? "text-dark-title" : "text-black"
        }`}
      >
        <img src={Logo} alt="Logo" className="w-24 h-auto md:w-32" />
      </div>

      {/* Image Background */}
      <div
        className={`absolute inset-0 flex justify-center items-center hidden lg:flex ${
          darkMode ? "bg-dark-overlay" : ""
        }`}
        style={{
          backgroundColor: darkMode ? "rgba(0,0,0,0.5)" : "", 
        }}
      >
        <img
          src={PlantBackground}
          alt="Plants Background"
          className={`object-cover opacity-70 rounded-lg shadow-inner ${
            darkMode ? "filter-dark" : ""
          }`}
          style={{
            width: "400px",
            height: "350px",
            transform: "translateX(-50%)",
            borderRadius: "50px",
          }}
        />
      </div>

      {/* Form Container */}
      <div
        className={`relative z-10 ${
          darkMode ? "bg-dark-form" : "bg-[#6d996e]"
        } bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] w-full max-w-lg p-6 sm:p-8 flex flex-col items-center lg:ml-32`}
        style={{
          borderRadius: "50px",
          border: "2px solid rgba(255, 255, 255, 0.7)",
        }}
      >
        <div
          className={`text-center mb-4 ${
            darkMode ? "text-dark-title" : "text-black"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {t("verify.title")}
          </h2>
          <FaShieldAlt
            className={`text-4xl sm:text-5xl mx-auto p-3 rounded-full shadow-md ${
              darkMode ? "text-dark-title bg-gray-700" : "text-black bg-white"
            }`}
          />
          <p
            className={`mt-4 text-base ${
              darkMode ? "text-dark-secondary" : "text-black"
            }`}
            dangerouslySetInnerHTML={{ __html: t("verify.verificationText") }}
          />
          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-dark-secondary" : "text-white"
            }`}
          >
            {t("verify.detailsText")}
          </p>
        </div>
        <form className="space-y-4 w-full flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-center gap-2 w-full max-w-xs">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`p-2 border ${
                  darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-white text-black"
                } placeholder-gray-400 focus:outline-none text-center text-lg rounded`}
                style={{
                  width: "35px",
                  height: "35px",
                }}
                placeholder={t("verify.placeholder")}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4 w-full">
            <button
              type="submit"
              className={`w-full sm:w-80 py-3 rounded-full border transition text-sm ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-[#6c825a] border-white hover:bg-[#5a6c50]"
              } text-white`}
            >
              {t("verify.button")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;