"use client";
import React, { useEffect } from 'react';

const EServiceRedirect = () => {
  useEffect(() => {
    // Check if the user is on the '/e-service' page
    if (window.location.pathname === '/e-service') {
      window.location.href = 'https://www.eportal.nea.gov.sg';
    }
  }, []);

  return null; // No need to render anything
};

export default EServiceRedirect;
