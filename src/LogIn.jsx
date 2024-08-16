import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // تأكد من استيراد Link هنا
import PlantBackground from './images/Rectangle 16.png';
import Logo from './images/logo.png';
import { FaSignInAlt } from 'react-icons/fa';
import BackgroundImage from './images/background-image.png';
import './App.css';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const ThemeToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="theme-toggle-button"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

function LogIn() {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate(); // تهيئة useNavigate

  const handleLogin = (event) => {
    event.preventDefault(); // منع التحديث التلقائي للصفحة
    // التوجيه إلى صفحة الهوم
    navigate('/home');
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center p-4 font-poppins ${darkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(to bottom, #334B2A 50%, #081C0B 100%)"
          : `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <nav className="navbar">
        <LanguageSwitcher />
        <ThemeToggleButton />
      </nav>

      <div className={`absolute top-4 left-4 md:top-8 md:left-16 hidden lg:block ${darkMode ? 'text-dark-title' : 'text-black'}`}>
        <img
          src={Logo}
          alt="Logo"
          className="w-20 xl:w-24"
        />
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center hidden lg:flex animate-slide-in-image ${darkMode ? 'bg-dark-overlay' : ''}`}
      >
        <img
          src={PlantBackground}
          alt="Plants Background"
          className={`object-cover opacity-70 rounded-lg shadow-inner ${darkMode ? 'filter-dark' : ''}`}
          style={{
            width: "400px",
            height: "420px",
            borderRadius: "50px",
          }}
        />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center w-full max-w-lg p-6 ${darkMode ? 'bg-dark-form' : 'bg-[#6d996e]'} bg-opacity-90 backdrop-blur-lg rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] animate-slide-in-form`}
        style={{
          borderRadius: "50px",
        }}
      >
        <div className={`text-center mb-4 ${darkMode ? 'text-dark-title' : 'text-black'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {t('login.title')}
          </h2>
          <FaSignInAlt className={`text-4xl sm:text-5xl mx-auto p-3 rounded-full shadow-md ${darkMode ? 'text-dark-title bg-gray-700' : 'text-black bg-white'}`} />
        </div>
        <form className="space-y-4 w-full max-w-xs flex flex-col items-center" onSubmit={handleLogin}>
          <div className="flex flex-col space-y-4 w-full">
            <input
              type="email"
              className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
              placeholder={t('login.emailPlaceholder')}
            />
            <input
              type="tel"
              className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
              placeholder={t('login.phonePlaceholder')}
            />
            <input
              type="password"
              className={`mt-1 p-2 w-full border-b bg-transparent placeholder-white focus:outline-none text-sm ${darkMode ? 'text-dark-title border-gray-600 placeholder-gray-400' : 'text-white border-gray-300 placeholder-white'}`}
              placeholder={t('login.passwordPlaceholder')}
            />
          </div>

          <div className="flex flex-col space-y-4 mt-4 w-full">
            <button
              type="submit"
              className={`w-full py-3 rounded-full border border-white hover:bg-[#5a6c50] transition text-sm text-center ${darkMode ? 'bg-dark-button text-white' : 'bg-[#6c825a] text-white'}`}
            >
              {t('login.button')}
            </button>

            <div className={`text-center ${darkMode ? 'text-dark-title' : 'text-green-800'}`}>
              <a
                href="#forgot-password"
                className={`hover:underline text-sm ${darkMode ? 'text-dark-title' : 'text-green-800'}`}
              >
                {t('login.forgotPassword')}
              </a>
            </div>

            <div className={`text-center mt-2 text-sm ${darkMode ? 'text-dark-title' : 'text-white'}`}>
              {t('login.noAccount')}{" "}
              <Link to="/signup" className={`text-green-800 hover:underline ${darkMode ? 'text-dark-title' : ''}`}>
                {t('login.signupLink')}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
