import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
   //(// Show alert for confirmation in the user's language)
    if (window.confirm(t('confirmSaveChanges'))) {
      i18n.changeLanguage(lng);
      localStorage.setItem('language', lng); // Save the selected language

     //( Change location orientation based on language)
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    }
  };

//(Retrieve the saved language when loading)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n]);

  return (
    <div className="fixed top-16 right-4 md:top-4 md:right-8 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 z-50">
      <button
        onClick={() => changeLanguage('en')}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        AR
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;