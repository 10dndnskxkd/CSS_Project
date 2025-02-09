"use client";
import React, { useEffect } from 'react';

const EServiceRedirect = () => {
  useEffect(() => {
    // Check if the user is on the '/e-service' page
    if (window.location.pathname === '/e-service') {
      window.open('https://www.eportal.nea.gov.sg', '_blank');
    }
  }, []);

  return null; // No need to render anything
};

export default EServiceRedirect;