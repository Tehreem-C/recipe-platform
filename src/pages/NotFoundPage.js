// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // For general styling or central content wrapper

const NotFoundPage = () => {
  return (
    <div className="main-content not-found-container" style={{ textAlign: 'center', padding: '50px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '4em', color: '#1C2529', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '1.5em', color: '#575757', marginBottom: '30px' }}>Page Not Found</p>
      <p style={{ fontSize: '1.1em', color: '#7A7A7A' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="button-primary" style={{ marginTop: '30px' }}>Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;