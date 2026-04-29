"use client";
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, { useState } from 'react';

const VideoAreaHomeOne = ({style_2} : any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className={`lonyo-section-padding bg-heading  ${style_2 ? '' : 'position-relative sectionn'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="lonyo-video-thumb">
                <img src="assets/images/v1/video-thumb.png" alt="" />
                <a className="play-btn video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}>
                  <img src="assets/images/v1/play-icon.svg" alt="" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-default-content lonyo-video-section pl-50" data-aos="fade-up" data-aos-duration="500">
                <h2>Its usability is simple and intuitive for users</h2>
                <p>It's a cloud-based accounting tool ideal for individuals & businesses to easily manage finances, invoices & payroll. Unlock the 3-step path to enhanced financial control. </p>
                <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
                  <Link className="lonyo-default-btn video-btn" href="/contact-us">Download the app</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="lonyo-process-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-process-number">
                  <img src="assets/images/v1/n1.svg" alt="" />
                </div>
                <div className="lonyo-process-title">
                  <h4>Connect Your Accounts</h4>
                </div>
                <div className="lonyo-process-data">
                  <p>Link your bank, credit card or investment accounts to automatically track transactions and get a complete financial overview</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="lonyo-process-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-process-number">
                  <img src="assets/images/v1/n2.svg" alt="" />
                </div>
                <div className="lonyo-process-title">
                  <h4>Set Budgets & Goals</h4>
                </div>
                <div className="lonyo-process-data">
                  <p>Define your spending limits and savings goals for categories like groceries, bills or future investments to stay on track.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="lonyo-process-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-process-number">
                  <img src="assets/images/v1/n3.svg" alt="" />
                </div>
                <div className="lonyo-process-title">
                  <h4>Monitor & Automate</h4>
                </div>
                <div className="lonyo-process-data">
                  <p>Check your financial dashboard for regular updates and set up automatic payments or savings to simplify management.</p>
                </div>
              </div>
            </div>
            <div className="border-bottom" data-aos="fade-up" data-aos-duration="500"></div>
          </div>
        </div>
      </div>
      {style_2 ? null :
      <div className="lonyo-content-shape1">
        <img src="assets/images/shape/shape3.svg" alt="" />
      </div>
      
      }

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoAreaHomeOne;