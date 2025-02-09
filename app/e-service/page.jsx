"use client"; // Ensures this component runs in a client-side environment

import React, { useEffect } from 'react';

const EServiceRedirect = () => {
  useEffect(() => {
    // Check if the current URL path is '/e-service'
    if (window.location.pathname === '/e-service') {
      // Open the NEA e-Portal in a new browser tab
      window.open('https://www.eportal.nea.gov.sg', '_blank');
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return null; // This component does not render any UI
};

export default EServiceRedirect;
