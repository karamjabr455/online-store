
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // يمكنك إضافة هذا إذا كان لديك تنسيقات CSS مخصصة
import App from './App'; // التأكد من مسار الملف حسب هيكلة المشروع
import'./index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);