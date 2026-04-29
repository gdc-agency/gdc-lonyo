 
import Link from 'next/link';
import React from 'react';

const PriceingAreaHomeTwo = () => {
  return (
    <>
      <div className="lonyo-section-padding10">
        <div className="container">
          <div className="lonyo-section-title center">
            <h2>Simple pricing plans with no added fees</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-pricing-wrap" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Basic plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2>$20</h2>
                  <p>/per user/mo</p>
                </div>
                <div className="lonyo-pricing-body">
                  <p>What’s included:</p>
                  <ul>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Unlimited cards and smart controls</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Access to 15+ payment methods</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Automated expense management</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer extra-mt">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Start your free 14-day trial</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-pricing-wrap active" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Pro plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2>$49</h2>
                  <p>/per user/mo</p>
                </div>
                <div className="lonyo-pricing-body">
                  <p>What’s included:</p>
                  <ul>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Everything included in Basic</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Access to 35+ payment methods</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Automated expense management</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Unlimited customizable workflows</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Multi-currency card limits</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer mt-50">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Get started now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="lonyo-pricing-wrap" data-aos="fade-left" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Basic plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2>$20</h2>
                  <p>/per user/mo</p>
                </div>
                <div className="lonyo-pricing-body">
                  <p>What’s included:</p>
                  <ul>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Everything included in Pro</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Access to 100+ payment methods</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Invoice tracking and payments</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Enterprise ERP integrations</li>
                    <li><img src="assets/images/v2/icon7.svg" alt="" />Automated reports on cashflow</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer mt-50">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Get started now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceingAreaHomeTwo;