
import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export const ThemeContext = createContext();

//( Provider of the topic that will wrap the application)
export const ThemeProvider = ({ children }) => {
  const { t } = useTranslation(); //Use hook to translate
  // Retrieve dark mode from localStorage on load
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    // Show alert for confirmation in the user's language
    if (window.confirm(t('confirmSaveChanges'))) {
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    }

    setDarkMode(newDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};