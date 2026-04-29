
import Link from 'next/link';
import React from 'react';

const CtaAreaHomeTwo = () => {
  return (
    <>
      <section className="lonyo-section-padding7 light-bg position-relative overflow-hidden">
        <div className="lonyo-cta-shape1">
          <img src="assets/images/shape/shape7.svg" alt="" />
        </div>
        <div className="container">
          <div className="lonyo-section-title center max-width-750 pb-40">
            <h2 className="title">Let's transform your relationship with money</h2>
            <p>Our finance apps and software are powerful tools for managing personal or business finances, helping users stay organized, track financial health, make and informed decisions.</p>
            <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
              <Link className="lonyo-default-btn cta-btn" href="/sign-up">Create a free account</Link>
            </div>
          </div>
        </div>
        <div className="lonyo-cta-shape2">
          <img src="assets/images/shape/shape8.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeTwo;