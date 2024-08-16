import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    if (window.confirm(t('confirmSaveChanges'))) {
      i18n.changeLanguage(lng);
      localStorage.setItem('language', lng);
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n]);

  return (
    <div className="fixed top-16 right-[-20px] md:top-6 md:right-[0px] z-50">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="px-3 py-1 bg-transparent text-white rounded-lg hover:bg-gray-700 transition flex items-center space-x-1 text-sm"
      >
        <span>Language</span>
        {dropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>
      {dropdownOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-lg py-1">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-3 py-1 hover:bg-gray-200 transition text-sm"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className="block w-full text-left px-3 py-1 hover:bg-gray-200 transition text-sm"
          >
            AR
          </button>
          <button
            onClick={() => changeLanguage('de')}
            className="block w-full text-left px-3 py-1 hover:bg-gray-200 transition text-sm"
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="block w-full text-left px-3 py-1 hover:bg-gray-200 transition text-sm"
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;