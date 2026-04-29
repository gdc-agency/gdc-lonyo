
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
    <HeaderOne />
    <div className="lonyo-error-section light-bg">
    <div className="container">
      <div className="lonyo-error-content" data-aos="fade-up" data-aos-duration="700">
        <div className="lonyo-error-thumb aos-init aos-animate" data-aos="fade-up" data-aos-duration="700">
          <img src="assets/images/404/404.svg" alt="" />
        </div>
        <h1>Page not found</h1>
        <p>Oops! The page you're trying to access has been relocated, given a new name, or is currently unavailable.</p>
        <Link className="lonyo-default-btn career-btn mt-50" data-aos="fade-up" data-aos-duration="900" href="/">Back to Home</Link>
      </div>
    </div>
  </div>
      
    </>
  );
};

export default NotFound;