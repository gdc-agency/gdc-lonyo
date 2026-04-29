"use client"
import faq_data from '@/data/faq-data';
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
 

const FinancialDecisionsAreaHomeOne = () => {
  
  const [activeIndex, setActiveIndex] =  useState(0);
      useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
    
      useEffect(() => {
        AOS.refresh(); // Refresh AOS on state change
      }, [activeIndex]);
  

  return (
    <>

      <section className="lonyo-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="lonyo-content-thumb" data-aos="fade-up" data-aos-duration="700">
                <img src="assets/images/v1/content-thumb.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-default-content pl-50" data-aos="fade-up" data-aos-duration="700">
                <h2>It clarifies all strategic financial decisions</h2>
                <p className="data">With this tool, you can say goodbye to overspending, stay on track with your savings goals, and say goodbye to financial worries. Get ready for a clearer view of your finances like never before!</p>
                <div className="lonyo-faq-wrap1 mt-50">

                  {faq_data.map((item, i) => (
                    <div key={i} className={`lonyo-faq-item ${activeIndex === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
                      <div className="lonyo-faq-header">
                        <h4 onClick={() => setActiveIndex(i)}>{item.question}</h4>
                        <div className="lonyo-active-icon">
                          <img className="plasicon" src="assets/images/v1/mynus.svg" alt="" />
                          <img className="mynusicon" src="assets/images/v1/plas.svg" alt="" />
                        </div>
                      </div>
                      <div className="lonyo-faq-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}

                  {/* <div className="lonyo-faq-item" data-aos="fade-up" data-aos-duration="700">
                    <div className="lonyo-faq-header">
                      <h4>Comprehensive Financial Overview:</h4>
                      <div className="lonyo-active-icon">
                        <img className="plasicon" src="assets/images/v1/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/v1/plas.svg" alt="" />
                      </div>
                    </div>
                    <div className="lonyo-faq-body">
                      <p>Automatically and syncs with bank accounts and credit cards to provide instant updates on spending, helping users stay aware of their all daily transactions.</p>
                    </div>
                  </div>
                  <div className="lonyo-faq-item" data-aos="fade-up" data-aos-duration="900">
                    <div className="lonyo-faq-header">
                      <h4>Stress-Reducing Automation:</h4>
                      <div className="lonyo-active-icon">
                        <img className="plasicon" src="assets/images/v1/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/v1/plas.svg" alt="" />
                      </div>
                    </div>
                    <div className="lonyo-faq-body">
                      <p>Automatically and syncs with bank accounts and credit cards to provide instant updates on spending, helping users stay aware of their all daily transactions.</p>
                    </div>
                  </div> */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialDecisionsAreaHomeOne;