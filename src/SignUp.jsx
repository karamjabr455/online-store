import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlantBackground from "./images/Rectangle 16.png";
import BackgroundImage from "./images/background-image.png";
import Logo from "./images/logo.png";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggleButton from './components/ThemeToggleButton';

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSignUpClick = () => {
    // Check if all fields are filled
    if (!email || !password || !userName || !phoneNumber || !passwordConfirmation || !profilePhoto || !certificate) {
      console.log("All fields must be filled, including the profile photo and certificate!");
      setModalMessage("All fields must be filled, including the profile photo and certificate!");
      setShowModal(true);
      return;
    }

    // Print the data to the console for debugging
    console.log("Form Data:");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Name:", userName);
    console.log("Phone Number:", phoneNumber);
    console.log("Password Confirmation:", passwordConfirmation);
    console.log("Profile Photo:", profilePhoto ? profilePhoto.name : "No file selected");
    console.log("Certificate:", certificate ? certificate.name : "No file selected");

    // Prepare form data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("user_name", userName);
    formData.append("phone_number", phoneNumber);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("profile_photo", profilePhoto);
    formData.append("certificate", certificate);

    console.log("FormData Entries:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Send POST request
    fetch('https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/register', {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData,
    })
    .then(response => {
      console.log("Response Status:", response.status);
      if (response.ok) {
        console.log("Success:", response.status);

        // Save email to localStorage
        localStorage.setItem('userEmail', email);

        setModalMessage("Account registered successfully! A verification email has been sent.");
        setShowModal(true);
        setTimeout(() => {
          navigate("/Verify");
        }, 2000);
      } else {
        return response.json().then(errorData => {
          console.log("Error Response Data:", errorData);
          setModalMessage(`Error: ${response.status} - ${errorData.message || "Unknown error"}`);
          setShowModal(true);
        });
      }
    })
    .catch(error => {
      console.log("Request failed:", error.message);
      setModalMessage("Request failed: " + error.message);
      setShowModal(true);
    });
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
      <nav className="navbar">
        <LanguageSwitcher />
        <ThemeToggleButton />
      </nav>

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
              height: "500px",
              borderRadius: "50px",
            }}
          />
        </motion.div>

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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="tel"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.phonePlaceholder')}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="email"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <input
                  type="password"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
                  placeholder={t('signup.passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <input
                  type="password"
                  className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-gray-300'}`}
                  placeholder={t('signup.confirmPasswordPlaceholder')}
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>

            {/* Profile Photo Upload Field */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="w-full">
                <input
                  id="profile-photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setProfilePhoto(e.target.files[0])}
                />
                <label
                  htmlFor="profile-photo-upload"
                  className={`flex items-center justify-start w-full border-b bg-transparent focus:outline-none text-sm cursor-pointer ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-gray-300'}`}
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                  }}
                >
                  {profilePhoto ? profilePhoto.name : t('uploadProfilePhoto')}
                </label>
              </div>
            </div>

            {/* Certificate Upload Field */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="w-full">
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => setCertificate(e.target.files[0])}
                />
                <label
                  htmlFor="file-upload"
                  className={`flex items-center justify-start w-full border-b bg-transparent focus:outline-none text-sm cursor-pointer ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-gray-300'}`}
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                  }}
                >
                  {certificate ? certificate.name : t('signup.uploadCertificate')}
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

      {/* Modal Component */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="bg-transparent p-6 rounded-lg"
            style={{ border: "2px solid rgba(255, 255, 255, 0.7)" }}
          >
            <p className="text-white text-lg">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-white border border-white rounded-lg px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
