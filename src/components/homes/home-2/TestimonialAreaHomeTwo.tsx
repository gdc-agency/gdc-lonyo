"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { LazyLoadTypes } from 'react-slick';
import AOS from "aos";
import "aos/dist/aos.css";

const setting = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  centerPadding: '180px', 
  lazyLoad: 'progressive' as LazyLoadTypes,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      centerPadding: '100px'
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      centerPadding: '0px'
    }
  }]
}
 

const TestimonialAreaHomeTwo = () => {
   useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);
  
    useEffect(() => {
      AOS.refresh(); // Refresh AOS on state change
    }, []);
  return (
    <>

      <div className="lonyo-section-padding7 position-relative overflow-hidden">
        <div className="container">
          <div className="lonyo-section-title">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h2>Don't take our word for it, check user reviews</h2>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="lonyo-title-btn">
                  <Link className="lonyo-default-btn t-btn" href="/contact-us">Read Customer Stories</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider {...setting} className="lonyo-testimonial-slider-init">

          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"This app transformed my budgeting! It has been a clear view longer have to worry of my It has been success expenses and savings goals."</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img7.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Liam Gallagher</p>
                <span>Teacher of Luxe Escapes Hotels</span>
              </div>
            </div>
          </div>          
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“The interface is intuitive, and I love how syncs with my bank accounts. I no longer have to worry about manual tracking. Highly recommend!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img2.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Michael Chen</p>
                <span>Founder of EcoChic Apparel</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“With this app, I’ve been able to stick to my budget and even save for a vacation.The budget alerts are a game changer!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img3.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>David Nguyen</p>
                <span>COO of Luxe Escapes Hotels</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"Having all my accounts in one place gives me complete overspending accounts control over my money. Highly recommend!"</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img5.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Rachel Kim</p>
                <span>CEO of GreenLeaf Organics</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"Having all my accounts in one place gives me complete control over my money. So user-friendly and helpful! Highly recommend!"</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img6.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Aisha Hassan</p>
                <span>CEO of RoyexLeaf Organics</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“I can see all my spending in one place and set limits. It’s really helped me avoid overspending and manage my bills on time.”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img4.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Jason Patel</p>
                <span>Director at Urban Realty</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“I use it for my business accounting, expenses, It has been success and tax prep are all so easier. It saves me time and stress.”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img8.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Elena Rodriguez</p>
                <span>Businessman</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"I love how easy it is to track my spending. It has been success It has been success The real-time updates keep me on top of my finances."</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img1.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Sophia Martinez</p>
                <span>Founder of EcoChic Apparel</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“This app has completely transformed how I manage my money. I can goals easily. It’s like having a personal finance manager in my pocket!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img1.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Saraj Alex</p>
                <span>CEO of RoyexLeaf Organics</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"This app transformed my budgeting! It has been a clear view longer have to worry of my It has been success expenses and savings goals."</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img7.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Liam Gallagher</p>
                <span>Teacher of Luxe Escapes Hotels</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“The interface is intuitive, and I love how syncs with my bank accounts. I no longer have to worry about manual tracking. Highly recommend!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img2.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Michael Chen</p>
                <span>Founder of EcoChic Apparel</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“With this app, I’ve been able to stick to my budget and even save for a vacation.The budget alerts are a game changer!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img3.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>David Nguyen</p>
                <span>COO of Luxe Escapes Hotels</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"Having all my accounts in one place gives me complete overspending accounts control over my money. Highly recommend!"</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img5.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Rachel Kim</p>
                <span>CEO of GreenLeaf Organics</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"Having all my accounts in one place gives me complete control over my money. So user-friendly and helpful! Highly recommend!"</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img6.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Aisha Hassan</p>
                <span>CEO of RoyexLeaf Organics</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“I can see all my spending in one place and set limits. It’s really helped me avoid overspending and manage my bills on time.”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img4.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Jason Patel</p>
                <span>Director at Urban Realty</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“With this app, I’ve been able to stick to my budget and even save for a vacation.The budget alerts are a game changer!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img8.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Elena Rodriguez</p>
                <span>Businessman</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>"I love how easy it is to track my spending. It has been success It has been success The real-time updates keep me on top of my finances."</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img1.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Sophia Martinez</p>
                <span>Founder of EcoChic Apparel</span>
              </div>
            </div>
          </div>
          <div className="lonyo-t-wrap wrap2 light-bg">
            <div className="lonyo-t-ratting">
              <img src="assets/images/shape/star.svg" alt="" />
            </div>
            <div className="lonyo-t-text">
              <p>“This app has completely transformed how I manage my money. I can goals easily. It’s like having a personal finance manager in my pocket!”</p>
            </div>
            <div className="lonyo-t-author">
              <div className="lonyo-t-author-thumb">
                <img src="assets/images/v1/img1.png" alt="" />
              </div>
              <div className="lonyo-t-author-data">
                <p>Saraj Alex</p>
                <span>CEO of RoyexLeaf Organics</span>
              </div>
            </div>
          </div>
        </Slider>
        <div className="lonyo-t-overlay2">
          <img src="assets/images/v2/overlay.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeTwo;