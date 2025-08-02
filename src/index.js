// frontend/src/index.js (CONFIRM THIS)
import React from 'react';
import ReactDOM from 'react-dom/client';
// No './styles/index.css' import unless you have a good reason for it and it exists
import './styles/App.css'; // This is your main global CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();