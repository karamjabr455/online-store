import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM.render
import App from './App';
import './index.css'; 
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);