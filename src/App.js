import React from 'react';
import './App.css'; 
import './index.css';
import '../src/animations.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Verify from "./Verify";
import Welcome from "./Welcome";
import Home from "./Home";
import Services from './Services';  // استيراد صفحة Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/verify" element={<Verify />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />  {/* إضافة مسار صفحة Services */}
      </Routes>
    </Router>
  );
}

export default App;