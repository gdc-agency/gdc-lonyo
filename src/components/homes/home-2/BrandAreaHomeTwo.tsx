"use client"
import React from 'react';
import Slider from "react-slick";

const setting = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1699,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 1399,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2
    }
  }]
}

const BrandAreaHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <div className={`${style_2 ? 'lonyo-section-padding7' : ''}`}>
        <div className={`${style_2 ? 'container' : ''}`}>
          {style_2 ?
            <div className="lonyo-career-d-thumb" data-aos="fade-up" data-aos-duration="700">
              <img src="assets/images/career/c1.png" alt="" />
            </div>
            : null
          }

          <div className={`lonyo-brand-section ${style_2 ? 'section2' : ''}`}>
            <div className="container">
              <p className="title">Leading brands around the world have saved millions of hours with it.</p>
            </div>
            <Slider {...setting} className="brand-slider-js-init">
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item ml-10">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand6.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand7.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item ml-10">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item ml-10">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand6.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand7.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item ml-10">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
              <div className="lonyo-brand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
            </Slider>
            <div className="lonyo-brand-shape">
              <img src="assets/images/brand/overlay.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeTwo;