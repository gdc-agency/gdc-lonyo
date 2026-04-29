
import Link from 'next/link';
import React from 'react';

const AboutTeam = () => {
  return (
    <>
      <div className="lonyo-section-padding10 team-section">
        <div className="shape">
          <img src="assets/images/about-us/shape1.svg" alt="" />
        </div>
        <div className="container">
          <div className="lonyo-section-title center max-width-750">
            <h2>We always believe in the strength of our team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t1.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Michael Chen</h6>
                  </Link>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t2.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Alex Jonny</h6>
                  </Link>
                  <p>Head of Product</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t3.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>William Smith</h6>
                  </Link>
                  <p>Lead Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="1100">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t4.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Frederick Taylor</h6>
                  </Link>
                  <p>Data Security Officer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t5.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Robert Arauco</h6>
                  </Link>
                  <p>VP of Sales</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t6.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Neil Hodgson</h6>
                  </Link>
                  <p>Marketing Director</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t7.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Clarke Kress</h6>
                  </Link>
                  <p>Customer Success Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="lonyo-team-wrap" data-aos="fade-up" data-aos-duration="1100">
                <div className="lonyo-team-thumb">
                  <Link href="/single-team"><img src="assets/images/about-us/t8.png" alt="" /></Link>
                </div>
                <div className="lonyo-team-content">
                  <Link href="/single-team">
                    <h6>Martine Smith</h6>
                  </Link>
                  <p>Marketing Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;