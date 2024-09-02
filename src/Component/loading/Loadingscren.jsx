// src/components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css'; // Styling for the loading screen

const logoUrl = 'https://example.com/path-to-logo.svg'; // Logotipning URL manzili

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={'https://autozoomrental.com/logo192.png'} alt="Logo" className="loading-logo" />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
