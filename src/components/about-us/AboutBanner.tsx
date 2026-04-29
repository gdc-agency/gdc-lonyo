
import React from 'react';

const AboutBanner = () => {
  return (
    <>
      <div className="lonyo-section-padding10">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="lonyo-about-us-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-about-us-thumb">
                  <img src="assets/images/about-us/img1.png" alt="" />
                </div>
                <div className="lonyo-about-us-thumb">
                  <img src="assets/images/about-us/img2.png" alt="" />
                  <div className="lonyo-about-us-card">
                    <img src="assets/images/about-us/card1.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="lonyo-about-us-thumb" data-aos="zoom-in" data-aos-duration="700">
                <img src="assets/images/about-us/img3.png" alt="" />
                <div className="lonyo-about-us-card2">
                  <img src="assets/images/about-us/card2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="lonyo-about-us-wrap">
                <div className="lonyo-about-us-thumb" data-aos="zoom-in" data-aos-duration="500">
                  <img src="assets/images/about-us/img4.png" alt="" />
                </div>
                <div className="lonyo-about-us-thumb-wrap">
                  <div className="lonyo-about-us-thumb">
                    <img src="assets/images/about-us/img5.png" alt="" />
                  </div>
                  <div className="lonyo-about-us-thumb" data-aos="fade-up" data-aos-duration="700">
                    <img src="assets/images/about-us/img6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;