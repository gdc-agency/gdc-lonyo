
import React from 'react';

const AboutFeatures = () => {
  return (
    <>
      <section className="lonyo-section-padding3 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-default-content pr-50 feature-wrap">
                <h2>Our core values ​​serve as our driving force</h2>
                <p className="max-w616">Our core values ​​are at the core of everything we do. Ensuring the integrity, security and privacy of your data. Innovation, providing cutting-edge tools to simplify financial management. </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-about-us-feature-wrap one" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-about-us-feature-icon">
                  <img src="assets/images/about-us/icon1.svg" alt="" />
                </div>
                <div className="lonyo-about-us-feature-content">
                  <h4>User-Centric Innovation</h4>
                  <p>We design our apps and software with our users in mind, constantly evolving to meet their financial needs and solutions.</p>
                </div>
              </div>
              <div className="lonyo-about-us-feature-wrap two" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-about-us-feature-icon">
                  <img src="assets/images/about-us/icon2.svg" alt="" />
                </div>
                <div className="lonyo-about-us-feature-content">
                  <h4>Transparency</h4>
                  <p>We believe in clear communication and full transparency in all our practices, providing users with accurate financial insights.</p>
                </div>
              </div>
              <div className="lonyo-about-us-feature-wrap three" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-about-us-feature-icon">
                  <img src="assets/images/about-us/icon3.svg" alt="" />
                </div>
                <div className="lonyo-about-us-feature-content">
                  <h4>Integrity & Trust</h4>
                  <p>We build lasting relationships with our users by consistently delivering reliable, ethical, and also trustworthy services.</p>
                </div>
              </div>
              <div className="lonyo-about-us-feature-wrap mb-0 four" data-aos="fade-up" data-aos-duration="1100">
                <div className="lonyo-about-us-feature-icon">
                  <img src="assets/images/about-us/icon4.svg" alt="" />
                </div>
                <div className="lonyo-about-us-feature-content">
                  <h4>Security You Can Trust</h4>
                  <p>Your financial data is protected with top-level encryption and security protocols to ensure your information is always secure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lonyo-feature-shape shape2"></div>
      </section>
    </>
  );
};

export default AboutFeatures;