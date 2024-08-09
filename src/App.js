import React from 'react';
import './App.css';
import './index.css';
import '../src/animations.css';
import './i18n'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Verify from "./Verify";
import Welcome from "./Welcome";
import Home from "./Home";
import Services from './Services';
import LanguageSwitcher from './components/LanguageSwitcher'; 
import { ThemeProvider, ThemeContext } from './ThemeContext'; 

const ThemeToggleButton = () => {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext); //( Use useContext here)

  return (
    <button
      onClick={toggleDarkMode}
      className="theme-toggle-button"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <nav>
            <LanguageSwitcher /> {/* Use LanguageSwitcher here */}
            <ThemeToggleButton /> {/* Switch button between dark and light mode */}
          </nav>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;