import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PlantBackground from "./images/Rectangle 16.png";
import BackgroundImage from "./images/background-image.png";
import Logo from "./images/logo.png"; 
import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Verify");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4 font-poppins"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo - hidden on screens smaller than large */}
      <div className="absolute top-4 left-4 flex items-center hidden lg:flex">
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
          className="relative flex-1 flex justify-center items-center hidden lg:block"
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
            className="object-cover opacity-70 rounded-lg shadow-inner"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50px",
            }}
          />
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="relative flex-1 bg-[#6d996e] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] p-6 sm:p-8 flex flex-col items-center"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: "50px",
            border: "2px solid rgba(255, 255, 255, 0.7)",
          }}
        >
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              SIGN UP
            </h2>
            <FaUserPlus className="text-4xl sm:text-5xl text-black mx-auto bg-white p-3 rounded-full shadow-md" />
          </div>
          <form className="space-y-4 w-full">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="tel"
                  className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="email"
                  className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="password"
                  className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="password"
                  className="mt-1 p-2 w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="w-full flex items-center mt-4 sm:mt-0">
                <input id="file-upload" type="file" className="hidden" />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-start w-full border-b border-gray-300 bg-transparent text-white placeholder-white focus:outline-none text-sm cursor-pointer"
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                  }}
                >
                  Upload Certificate
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="w-full py-3 text-sm text-white transition bg-[#6c825a] border border-white rounded-full sm:w-80 hover:bg-[#5a6c50]"
                onClick={handleSignUpClick}
              >
                Register
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-green-800 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUp;