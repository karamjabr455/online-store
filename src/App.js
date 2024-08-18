import React from 'react';
import './App.css';
import './index.css';
import '../src/animations.css';
import './i18n';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignUp from './SignUp';
import LogIn from './LogIn';
import Verify from "./Verify";
import Welcome from "./Welcome";
import Productsdetails from './Productsdetails'
import Home from './components/Home'; 

import { ThemeProvider } from './ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Router> 
        <div className="app-container">
          <Routes>
           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Productsdetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;