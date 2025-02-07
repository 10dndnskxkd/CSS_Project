'use client';


import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds, then hide loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div id="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <div id="main-content">
          <h1>Welcome to the Page!</h1>
          <p>The page content has loaded successfully.</p>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
