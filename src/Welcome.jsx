// src/Welcome.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "./images/background-image.png";
import Logo from "./images/logo.png";

// يمكنك استبدال هذه الصور بالصور المطلوبة في المشروع
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";

const Welcome = () => {
  const navigate = useNavigate();

  // حالة المودال
  const [showModal, setShowModal] = useState(false);

  // دالة تسجيل الخروج
  const handleLogout = () => {
    setShowModal(true); // إظهار المودال عند الضغط على تسجيل الخروج
  };

  // دالة تنفيذ الخروج الفعلي
  const confirmLogout = () => {
    // قم بإجراء عملية تسجيل الخروج هنا (مثل إزالة البيانات من التخزين المحلي)
    navigate("/login"); // توجيه المستخدم إلى صفحة تسجيل الدخول
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 font-poppins"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
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
        className="relative z-10 bg-[#6d996e] bg-opacity-90 backdrop-blur-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] w-full max-w-lg p-6 sm:p-8 flex flex-col items-center rounded-lg"
        style={{
          borderRadius: "20px",
          border: "2px solid rgba(255, 255, 255, 0.7)",
        }}
      >
        {/* زر تسجيل الخروج */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-[#7C8761AB] text-white px-4 py-2 rounded-full hover:bg-[#6b7856] transition"
        >
          Logout
        </button>

        {/* نص الترحيب */}
        <h1 className="text-xl sm:text-2xl font-bold text-black mb-8 mt-6">
          Welcome to our store
        </h1>

        {/* عرض الصور */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <img
            src={Image1}
            alt="Product 1"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg"
          />
          <img
            src={Image2}
            alt="Product 2"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg"
          />
          <img
            src={Image3}
            alt="Product 3"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg"
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
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <motion.div
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
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
                style={{ color: '#80af81' }}
              >
                Are you sure you want to logout?
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={confirmLogout}
                  className="bg-transparent border border-[#7C8761AB] text-[#7C8761AB] px-4 py-2 rounded-full w-full hover:bg-[#7C8761AB] hover:text-white transition"
                >
                  Logout
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-transparent border border-[#7C8761AB] text-[#7C8761AB] px-4 py-2 rounded-full w-full hover:bg-[#7C8761AB] hover:text-white transition"
                >
                  Cancel
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