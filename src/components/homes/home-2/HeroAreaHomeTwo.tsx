
import React from 'react';

const HeroAreaHomeTwo = () => {
  return (
    <>
      <div className="lonyo-hero-section2 bg-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-hero-content2" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-hero-rating">
                  <ul>
                    <li>
                      <img src="assets/images/v1/rating.svg" alt="ratting-stat" />
                    </li>
                    <li>4.8 / 5 rating by users</li>
                  </ul>
                </div>
                <h1 className="hero-title">Take control of your finances</h1>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="lonyo-hero-text2" data-aos="fade-up" data-aos-duration="700">
                <p className="text">Track your daily automatically. Manage your money in a friendly and way, making it easy to guilt-free and save effortlessly.</p>
                <div className="mt-50" data-aos="fade-up" data-aos-duration="900">
                  <ul>
                    <li>
                      <a href="https://www.apple.com/app-store/"><img src="assets/images/v1/app-store.svg" alt="" /></a>
                    </li>
                    <li>
                      <a href="https://playstore.com/"><img src="assets/images/v1/play-store.svg" alt="" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lonyo-hero-shape2"></div>
      </div>
    </>
  );
};

export default HeroAreaHomeTwo;