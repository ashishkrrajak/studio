'use client';
import React from 'react';
import Image from 'next/image';
import './preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      {/* Replaced text logo with an Image component, increased size */}
      <Image
        src="/images/logo.png" // Assuming your logo is at public/images/logo.png
        alt="Ashish Kumar Rajak Logo"
        width={200} // Increased from 150
        height={200} // Increased from 150
        priority // Load the logo quickly
        className="preloader-logo"
        data-ai-hint="logo image"
      />
    </div>
  );
};

export default Preloader;
