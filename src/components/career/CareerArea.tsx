
import Link from 'next/link';
import React from 'react';

const CareerArea = () => {
  return (
    <>

      <div className="lonyo-section-padding4">
        <div className="container">
          <div className="lonyo-section-title center max-width-750">
            <h2>Explore our exciting opportunities available</h2>
          </div>
          <div className="lonyo-service-table-wrap">
            <div className="lonyo-service-table-item" data-aos="fade-up" data-aos-duration="500">
              <div className="lonyo-service-table-title">
                <h4>Financial Analyst</h4>
                <p>We are looking for a skilled financial analyst to join our team</p>
              </div>
              <div className="lonyo-service-table-body">
                <ul>
                  <li><img src="assets/images/career/clock.svg" alt="" />Full-time (40 hours/week)</li>
                  <li><img src="assets/images/career/location.svg" alt="" />Office-based</li>
                  <li><img src="assets/images/career/dolar.svg" alt="" />$15,000-18,000</li>
                </ul>
              </div>
              <div className="lonyo-service-table-btn">
                <Link className="lonyo-default-btn career-btn" href="/single-career">Apply now</Link>
              </div>
            </div>
            <div className="lonyo-service-table-item" data-aos="fade-up" data-aos-duration="700">
              <div className="lonyo-service-table-title">
                <h4>Software Developer</h4>
                <p>We’re looking for a 3+ year experienced software developer.</p>
              </div>
              <div className="lonyo-service-table-body">
                <ul>
                  <li><img src="assets/images/career/clock.svg" alt="" />Flexible work schedule</li>
                  <li><img src="assets/images/career/location.svg" alt="" />Remote</li>
                  <li><img src="assets/images/career/dolar.svg" alt="" />$32,000-39,000</li>
                </ul>
              </div>
              <div className="lonyo-service-table-btn">
                <Link className="lonyo-default-btn career-btn" href="/single-career">Apply now</Link>
              </div>
            </div>
            <div className="lonyo-service-table-item" data-aos="fade-up" data-aos-duration="900">
              <div className="lonyo-service-table-title">
                <h4>Marketing Specialist</h4>
                <p>We are looking for a skilled financial analyst to join our team</p>
              </div>
              <div className="lonyo-service-table-body">
                <ul>
                  <li><img src="assets/images/career/clock.svg" alt="" />Full-time (40 hours/week)</li>
                  <li><img src="assets/images/career/location.svg" alt="" />Office-based</li>
                  <li><img src="assets/images/career/dolar.svg" alt="" />$8,000-12,000</li>
                </ul>
              </div>
              <div className="lonyo-service-table-btn">
                <Link className="lonyo-default-btn career-btn" href="/single-career">Apply now</Link>
              </div>
            </div>
            <div className="lonyo-service-table-item mb-0" data-aos="fade-up" data-aos-duration="1100">
              <div className="lonyo-service-table-title">
                <h4>UI/UX Designer</h4>
                <p>We’re looking for a 5+ year experienced software developer.</p>
              </div>
              <div className="lonyo-service-table-body">
                <ul>
                  <li><img src="assets/images/career/clock.svg" alt="" />Flexible work schedule</li>
                  <li><img src="assets/images/career/location.svg" alt="" />Remote</li>
                  <li><img src="assets/images/career/dolar.svg" alt="" />$65,000-90,000</li>
                </ul>
              </div>
              <div className="lonyo-service-table-btn">
                <Link className="lonyo-default-btn career-btn" href="/single-career">Apply now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerArea;