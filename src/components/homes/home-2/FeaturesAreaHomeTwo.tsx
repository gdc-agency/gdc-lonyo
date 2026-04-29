"use client"
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';


const setting = {
  dots: false,
  speed: 5000,
  slidesToShow: 2,
  centerMode: true,
  arrows: false,
  vertical: true,
  focusOnSelect: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: 'linear',
  verticalSwiping: true
}

const FeaturesAreaHomeTwo = () => {
    useEffect(() => {
      AOS.init({ duration: 800 });
    }, [setting]);
  


  return (
    <>
      <div className="lonyo-section-padding6">
        <div className="container">
          <div className="lonyo-section-title center">
            <h2>Features that make spending smarter</h2>
          </div>
          <div className="row">
            <div className="col-xl-7">
              <div className="lonyo-service-wrap2 light-bg rk-slider">
                <div className="lonyo-service-icon">
                  <img src="assets/images/v2/icon1.svg" alt="" />
                </div>
                <div className="lonyo-service-content">
                  <h4>Reports and analytics:</h4>
                  <p>Tax preparation, profit & loss statements, balance sheets, and customized reports.</p>
                </div>
                <Slider {...setting} className="lonyo-service-vertical-slider">
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card2.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card3.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card4.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card1.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card2.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card3.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card4.svg" alt="" />
                  </div>
                  <div className="lonyo-service-vertical-item">
                    <img src="assets/images/v2/card1.svg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="lonyo-service-wrap3 light-bg">
                <div className="lonyo-service-icon">
                  <img src="assets/images/v2/icon2.svg" alt="" />
                </div>
                <div className="lonyo-service-content2">
                  <h4>Integrate and stay synced</h4>
                  <p>Integration with payment processors like PayPal, Venmo, or business accounting platforms.</p>
                </div>
                <div className="lonyo-service-thumb3" data-aos="fade-up" data-aos-duration="700">
                  <img src="assets/images/v2/bg-shape3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="lonyo-service-wrap4 light-bg">
                <div className="lonyo-service-icon">
                  <img src="assets/images/v2/icon4.svg" alt="" />
                </div>
                <div className="lonyo-service-content">
                  <h4>Swipe cards easily</h4>
                  <p>It connects to all types of cards and spending modes to become smarter over time.</p>
                </div>
                <div className="lonyo-service-thumb" data-aos="fade-up" data-aos-duration="700">
                  <img src="assets/images/v2/card4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="lonyo-service-wrap5 light-bg">
                <div className="lonyo-service-icon">
                  <img src="assets/images/v2/icon1.svg" alt="" />
                </div>
                <div className="lonyo-service-content">
                  <h4>Reports and analytics:</h4>
                  <p>Tax preparation, profit & loss statements, balance sheets, and customized reports.</p>
                </div>
                <div className="lonyo-service-thumb2" data-aos="fade-up" data-aos-duration="700">
                  <img src="assets/images/v2/thumb1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAreaHomeTwo;