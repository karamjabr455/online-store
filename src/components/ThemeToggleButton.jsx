import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { darkMode, setPendingDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setPendingDarkMode(!darkMode);//( Set the mode)
    toggleDarkMode(); //Display confirmation message
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle-button"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggleButton;