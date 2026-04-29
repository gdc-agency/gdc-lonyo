
import React from 'react';

const TestimonialAreaHomeThree = ({style_2} : any) => {
  return (
    <>
      <div className={`${style_2 ? 'lonyo-section-padding6' : 'lonyo-rating-section'}`}>
        <div className="container">
          <div className="lonyo-section-title center">
            <p>We already have 25k+ positive reviews and ratings</p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-rating-wrap pt-0" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-rating-icon">
                  <img src="assets/images/v3/star.svg" alt="" />
                </div>
                <div className="lonyo-rating-content">
                  <p>“Life-changing tool for budgeting! This app has completely transformed how I manage my money. Highly recommend!”</p>
                  <span>4.5/5 rating from Michael Chen</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-rating-wrap pt-24" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-rating-icon">
                  <img src="assets/images/v3/star.svg" alt="" />
                </div>
                <div className="lonyo-rating-content">
                  <p>“It save money more than I expected! With this software, I can stick to my budget. Goal-setting features are highly motivating!”</p>
                  <span>4.5/5 rating from Adam Smith</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-rating-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-rating-icon">
                  <img src="assets/images/v3/star.svg" alt="" />
                </div>
                <div className="lonyo-rating-content">
                  <p>““Great for tracking and organizing finances! I can see all my expenses in one place and set limits. It helped me avoid overspending.”</p>
                  <span>4.5/5 rating from David Nguyen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeThree;