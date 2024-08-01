import React from "react";
import { Link } from "react-router-dom";
import PlantBackground from "./images/Rectangle 16.png";
import Logo from "./images/logo.png";
import { FaSignInAlt } from "react-icons/fa";
import BackgroundImage from "./images/background-image.png";
import './App.css'; // Ensure the CSS file is imported

function LogIn() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 font-poppins"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-16 hidden lg:block">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 xl:w-24" // Only visible on large and larger screens
        />
      </div>

      {/* Image Background */}
      <div
        className="absolute inset-0 flex items-center justify-center hidden lg:flex animate-slide-in-image"
      >
        <img
          src={PlantBackground}
          alt="Plants Background"
          className="object-cover opacity-70 rounded-lg shadow-inner"
          style={{
            width: "400px",
            height: "420px",
            borderRadius: "50px",
          }}
        />
      </div>

      {/* Form Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg p-6 bg-[#6d996e] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] animate-slide-in-form"
        style={{
          borderRadius: "50px",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            LOG IN
          </h2>
          <FaSignInAlt className="text-4xl sm:text-5xl text-black mx-auto bg-white p-3 rounded-full shadow-md" />
        </div>
        <form className="space-y-4 w-full max-w-xs flex flex-col items-center">
          {/* Form Inputs */}
          <div className="flex flex-col space-y-4 w-full">
            <input
              type="email"
              className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
              placeholder="Email"
            />
            <input
              type="tel"
              className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
              placeholder="Phone Number"
            />
            <input
              type="password"
              className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col space-y-4 mt-4 w-full">
            <Link
              to="/dashboard"
              className="w-full py-3 bg-[#6c825a] text-white rounded-full border border-white hover:bg-[#5a6c50] transition text-sm text-center"
            >
              Log In
            </Link>

            <div className="text-center">
              <a
                href="#forgot-password"
                className="text-green-800 hover:underline text-sm"
              >
                Forgot Password?
              </a>
            </div>

            <div className="text-center mt-2 text-sm text-white">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-800 hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;