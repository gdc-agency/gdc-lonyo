"use client";

import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const BannerAreaHomeTwo = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="lonyo-dasyboard-shape">
        <img src="assets/images/shape/shape5.svg" alt="" />
      </div>
      <div className="lonyo-video-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-hero-dashbord" data-aos="fade-right" data-aos-duration="700">
                <img src="assets/images/hero/dashboard.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-video-thumb2" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/hero/video1.png" alt="" />
                <a className="play-btn video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="assets/images/shape/play-icon.svg" alt="" />
                  <div className="waves waves2 wave-1"></div>
                  <div className="waves waves2 wave-2"></div>
                  <div className="waves waves2 wave-3"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default BannerAreaHomeTwo;