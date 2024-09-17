import React, { useState } from 'react';
import { FaShieldAlt } from "react-icons/fa";
import BackgroundImage from "../src/images/background-image.png";
import PlantBackground from "./images/Rectangle 16.png";
import Logo from "./images/logo.png";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from 'react-router-dom';

function Verify() {
  const { t } = useTranslation();
  const { darkMode } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const [isResendSuccess, setIsResendSuccess] = useState(false);
  const [isResendError, setIsResendError] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isVerifySuccess, setIsVerifySuccess] = useState(false);
  const [isVerifyError, setIsVerifyError] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For the loading state...

  const [isResending, setIsResending] = useState(false); //For status loading during retransmission


// Retrieve email from localStorage
const email = localStorage.getItem('userEmail');

  const handleResendCode = () => {
    if (!email) {
      setIsResendSuccess(false);
      setIsResendError(true);
      console.log("No email found in localStorage.");
      return;
    }

    setIsResending(true); // start downloading


    const formData = new FormData();
    formData.append('email', email);

    fetch('https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/resend-verification-code', {
      method: "POST",
      body: formData,
    })
    .then(response => {
      console.log("Response Status:", response.status);
      setIsResending(false);

      switch (response.status) {
        case 200:
          return response.json(); 
        case 404:
          setIsResendSuccess(false);
          setIsResendError(true);
          console.log("Endpoint not found.");
          return Promise.reject("Endpoint not found.");
        case 400:
          setIsResendSuccess(false);
          setIsResendError(true);
          console.log("Bad request.");
          return Promise.reject("Bad request.");
        default:
          setIsResendSuccess(false);
          setIsResendError(true);
          console.log("An error occurred.");
          return Promise.reject("An error occurred.");
      }
    })
    .then(data => {
      console.log("Resend Response Data:", data);
      if (data.access_token) {
        localStorage.setItem('authToken', data.access_token); // Store the token in localStorage

        setIsResendSuccess(true);
        setIsResendError(false);
      } else {
        setIsResendSuccess(false);
        setIsResendError(true);
      }
    })
    .catch(error => {
      console.error("Resend Error:", error);
      setIsResendError(true);
    });
  };

  const handleVerifyCode = () => {
    if (!email || verificationCode.join('') === '') {
      setIsVerifySuccess(false);
      setIsVerifyError(true);
      console.log("No email or verification code entered.");
      return;
    }

    setIsLoading(true); // بدء التحميل

    const formData = new FormData();
    formData.append('email', email);
    formData.append('verification_code', verificationCode.join(''));

    fetch('https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/verify-code', {
      method: "POST",
      body: formData,
    })
    .then(response => {
      console.log("Verify Response Status:", response.status);
      setIsLoading(false); 

      switch (response.status) {
        case 200:
          return response.json(); // Convert the response to JSON

        case 400:
          setIsVerifySuccess(false);
          setIsVerifyError(true);
          console.log("Bad request.");
          return Promise.reject("Bad request.");
        case 404:
          setIsVerifySuccess(false);
          setIsVerifyError(true);
          console.log("Endpoint not found.");
          return Promise.reject("Endpoint not found.");
        case 402:
          setIsVerifySuccess(false);
          setIsVerifyError(true);
          console.log("Payment required.");
          return Promise.reject("Payment required.");
        default:
          setIsVerifySuccess(false);
          setIsVerifyError(true);
          console.log("An error occurred.");
          return Promise.reject("An error occurred.");
      }
    })
    .then(data => {
      console.log("Verify Response Data:", data);
      if (data.access_token) {
        localStorage.setItem('authToken', data.access_token); // Store the token in localStorage

        setIsVerifySuccess(true);
        setIsVerifyError(false);
        setIsRedirecting(true);

// Go to the login page
setTimeout(() => {
          navigate('/login');
        }, 5000);
      } else {
        setIsVerifySuccess(false);
        setIsVerifyError(true);
      }
    })
    .catch(error => {
      console.error("Verify Error:", error);
      setIsVerifyError(true);
      setIsLoading(false);// Stop downloading in case of error
    });
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
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
            dangerouslySetInnerHTML={{ __html: t("verify.verificationText").replace("*****@gmail.com", email) }}
          />
          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-dark-secondary" : "text-white"
            }`}
          >
            {t("verify.detailsText")}
          </p>
          {isRedirecting && (
            <p className="mt-4 text-yellow-500">
              {t("verify.redirectingMessage")}
            </p>
          )}
        </div>
        <form className="space-y-4 w-full flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-center gap-2 w-full max-w-xs">
            {verificationCode.map((code, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
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
              type="button"
              onClick={handleVerifyCode}
              disabled={isLoading}    
              className={`w-full sm:w-80 py-3 rounded-full border transition text-sm ${
                isLoading
                  ? "opacity-50 cursor-not-allowed" 
                  : darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-[#6c825a] border-white hover:bg-[#5a6c50]"
              } text-white`}
            >
              {isLoading ? t("loading") : t("button")}
            </button>
          </div>

          <div className="flex justify-center mt-4 w-full">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending} 
              className={`w-full sm:w-80 py-3 rounded-full border transition text-sm ${
                isResending
                  ? "opacity-50 cursor-not-allowed" 
                  : darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-[#6c825a] border-white hover:bg-[#5a6c50]"
              } text-white`}
            >
              {isResending ? t("resending") : t("resendButton")}
            </button>
          </div>

          {/* Success/Failure Message */}
          {isResendSuccess && (
            <p className="mt-4 text-green-500">
              {t("resendSuccess")}
            </p>
          )}
          {isResendError && (
            <p className="mt-4 text-red-500">
              {t("resendError")}
            </p>
          )}
          {isVerifySuccess && (
            <p className="mt-4 text-green-500">
              {t("verifySuccess")}
            </p>
          )}
          {isVerifyError && (
            <p className="mt-4 text-red-500">
              {t("verifyError")}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Verify;



