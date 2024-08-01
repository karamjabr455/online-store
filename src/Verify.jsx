import React from "react";
import { Link } from "react-router-dom";
import PlantBackground from "./images/Rectangle 16.png";
import Logo from "./images/logo.png";
import { FaShieldAlt } from 'react-icons/fa';
import BackgroundImage from '../src/images/background-image.png'; 
import './animations.css';

function Verify() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 font-poppins" 
         style={{ 
           backgroundImage: `url(${BackgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-16">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-auto md:w-32" 
        />
      </div>

      {/* Image Background */}
      <div className="absolute inset-0 flex justify-center items-center hidden lg:flex">
        <img
          src={PlantBackground}
          alt="Plants Background"
          className="object-cover opacity-70 rounded-lg shadow-inner"
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
        className="relative z-10 bg-[#6d996e] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] w-full max-w-lg p-6 sm:p-8 flex flex-col items-center lg:ml-32"
        style={{
          borderRadius: "50px", 
          border: "2px solid rgba(255, 255, 255, 0.7)", 
        }}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">Enter Code</h2>
          <FaShieldAlt className="text-4xl sm:text-5xl text-black mx-auto bg-white p-3 rounded-full shadow-md" />
          <p className="mt-4 text-base text-black">
            The verification code has been sent to your email: <span className="font-bold text-white">*****@gmail.com</span>
          </p>
          <p className="mt-2 text-sm text-white">
            The code consists of 6 digits containing letters<br /> and numbers and is valid for 10 minutes.
          </p>
        </div>
        <form className="space-y-4 w-full flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-center gap-2 w-full max-w-xs">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="p-2 border border-white bg-white text-black placeholder-gray-400 focus:outline-none text-center text-lg rounded"
                style={{
                  width: "35px", 
                  height: "35px", 
                }}
                placeholder=""
              />
            ))}
          </div>

          <div className="flex justify-center mt-4 w-full">
            <button
              type="submit"
              className="w-full sm:w-80 py-3 bg-[#6c825a] text-white rounded-full border border-white hover:bg-[#5a6c50] transition text-sm"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;