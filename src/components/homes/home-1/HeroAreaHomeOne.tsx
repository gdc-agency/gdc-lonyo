
import Link from 'next/link';
import React from 'react';

const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="lonyo-hero-section light-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-hero-content" data-aos="fade-up" data-aos-duration="700">
                <h1 className="hero-title">Manage your finances more effectively</h1>
                <p className="text">Track your daily finances automatically. Manage your money in a friendly & flexible way, making it easy to spend guilt-free.</p>
                <div className="mt-50" data-aos="fade-up" data-aos-duration="900">
                  <Link href="/sign-up" className="lonyo-default-btn hero-btn">Create a free account</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-hero-thumb" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/v1/hero-thumb.png" alt="" />
                <div className="lonyo-hero-shape">
                  <img src="assets/images/shape/hero-shape1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;