"use client";
import React, { useEffect } from 'react';

const SpendingSmarterAreaHomeThree = () => {

  useEffect(() => {
    const stats = document.querySelectorAll('.lonyo-counter-data');
    stats.forEach((stat) => {
      const patt = /([\D]+)?(\d+)([\D]+)?(\d+)?([\D]+)?/;
      const time = 1000;
      let fresh = true;
      const result = Array.from(patt.exec(stat.textContent || '') || []);
      
      result.shift();
      const filteredResult = result.filter((res) => res != null);
      
      stat.innerHTML = '';
      
      filteredResult.forEach((res) => {
        if (isNaN(Number(res))) {
          stat.insertAdjacentHTML('beforeend', `<span>${res}</span>`);
        } else {
          for (let i = 0; i < res.length; i++) {
            stat.insertAdjacentHTML(
              'beforeend',
              `<span data-value="${res[i]}">
                <span>&ndash;</span>
                ${Array.from({ length: parseInt(res[i]) + 1 }, (_, j) => `<span>${j}</span>`).join('')}
              </span>`
            );
          }
        }
      });
      
      const ticks = Array.from(stat.querySelectorAll('span[data-value]')) as HTMLElement[];
      
      
      
      const activate = () => {
        const top = stat.getBoundingClientRect().top;
        const offset = window.innerHeight * 0.8;
        
        setTimeout(() => {
          fresh = false;
        }, time);
        
        if (top < offset) {
          setTimeout(() => {
            ticks.forEach((tick) => {
              const dist = parseInt(tick.getAttribute('data-value') || '0') + 1;
              tick.style.transform = `translateY(-${dist * 100}%)`;
            });
          }, fresh ? time : 0);
          
          window.removeEventListener('scroll', activate);
        }
      };
      
      window.addEventListener('scroll', activate);
      activate();
    });
  }, []);

  return (
    <>
      <div className="lonyo-section-padding3">
        <div className="container">
          <div className="lonyo-section-title center">
            <h2>Features that make spending smarter</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="lonyo-service-wrap light-bg" data-aos="fade-right" data-aos-duration="500">
                <div className="lonyo-service-title">
                  <h4>Expense Tracking</h4>
                  <img src="assets/images/v1/feature1.svg" alt="" />
                </div>
                <div className="lonyo-service-data">
                  <p>Allows users to record and categorize daily transactions such as income, expenses, bills, and savings.</p>
                </div>
              </div>
              <div className="lonyo-service-wrap light-bg" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-service-title">
                  <h4>Tax Management</h4>
                  <img src="assets/images/v1/feature4.svg" alt="" />
                </div>
                <div className="lonyo-service-data">
                  <p>This tool integrate with tax software to help users prepare for tax season, deduct expenses, and file returns.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 order-xl-2">
              <div className="lonyo-service-wrap light-bg" data-aos="fade-left" data-aos-duration="500">
                <div className="lonyo-service-title">
                  <h4>Investment Tracking</h4>
                  <img src="assets/images/v1/feature3.svg" alt="" />
                </div>
                <div className="lonyo-service-data">
                  <p>For users interested in investing, finance apps often provide tools to track stocks, bonds or mutual funds.</p>
                </div>
              </div>
              <div className="lonyo-service-wrap light-bg" data-aos="fade-left" data-aos-duration="700">
                <div className="lonyo-service-title">
                  <h4>Security Features</h4>
                  <img src="assets/images/v1/feature6.svg" alt="" />
                </div>
                <div className="lonyo-service-data">
                  <p>Provides bank-level encryption to ensure user data and financial information remain safe, MFA and biometric logins.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="lonyo-service-thumb3 thumb4" data-aos="zoom-in" data-aos-duration="700">
                <img src="assets/images/v3/app.png" alt="" />
              </div>
            </div>
          </div>
          <section className="lonyo-counter-wrap" data-aos="fade-up" data-aos-duration="700">
            <div className="lonyo-counter-item">
              <h2 className="lonyo-counter-data" aria-label="25K+">25K+</h2>
              <p>Users Worldwide</p>
            </div>
            <div className="lonyo-counter-item">
              <h2 className="lonyo-counter-data" aria-label="0%">0%</h2>
              <p>Transaction Fees</p>
            </div>
            <div className="lonyo-counter-item">
              <h2 className="lonyo-counter-data" aria-label="4.8/5">4.8/5</h2>
              <p>Download Rating</p>
            </div>
            <div className="lonyo-counter-item">
              <h2 className="lonyo-counter-data" aria-label="3X">3X</h2>
              <p>Faster Transaction</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SpendingSmarterAreaHomeThree;