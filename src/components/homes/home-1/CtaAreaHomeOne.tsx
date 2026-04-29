
import React from 'react';

const CtaAreaHomeOne = ({style_2} : any) => {
  return (
    <>
    {style_2 && 
      <div className="lonyo-content-shape">
      <img src="assets/images/shape/shape2.svg" alt="" />
    </div>
    
    }
      <section className="lonyo-cta-section bg-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lonyo-cta-thumb" data-aos="fade-up" data-aos-duration="500">
                <img src="assets/images/v1/cta-thumb.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lonyo-default-content lonyo-cta-wrap" data-aos="fade-up" data-aos-duration="700">
                <h2>Start a new level of money management</h2>
                <p>Our finance apps and software are powerful tools for managing personal or business finances, helping users stay organized, track financial health, and make informed decisions.</p>
                <div className="lonyo-cta-info mt-50" data-aos="fade-up" data-aos-duration="900">
                  <ul>
                    <li>
                      <a target='_blank' href="https://www.apple.com/app-store/"><img src="assets/images/v1/app-store.svg" alt="" /></a>
                    </li>
                    <li>
                      <a target='_blank' href="https://playstore.com/"><img src="assets/images/v1/play-store.svg" alt="" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeOne;