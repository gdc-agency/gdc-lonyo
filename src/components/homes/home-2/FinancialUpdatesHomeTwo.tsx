"use client";
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data = [
  {
    id: 1,
    delay: 500,
    question: "Accurate Budgeting Tool:",
    answer:
      "This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard.",
  },
  {
    id: 2,
    delay: 700,
    question: "Bill Management Benefits:",
    answer:
      "Users can set budget limits for different categories. This tool provides visual insights such as graphs to show how much has been spent.",
  },
  {
    id: 3,
    delay: 900,
    question: "Tracking All Your Investments:",
    answer:
      "Users can set budget limits for different categories. This tool provides visual insights such as graphs to show how much has been spent.",
  },
]


const FinancialUpdatesHomeTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
      useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
    
      useEffect(() => {
        AOS.refresh(); // Refresh AOS on state change
      }, [activeIndex]);
  

  return (
    <>
      <div className="lonyo-section-padding3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <div className="lonyo-faq-thumb" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/v2/faq-thumb.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-default-content pr-100" data-aos="fade-up" data-aos-duration="700">
                <h2>Get all your financial updates in one place</h2>
                <p>This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard.</p>
                <div className="mt-50">
                  <div className="lonyo-faq-wrap1">
                    {faq_data.map((item, i) => (
                      <div key={i} className={`lonyo-faq-item ${activeIndex === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
                        <div className="lonyo-faq-header" onClick={() => setActiveIndex(i)}>
                          <h4>{item.question}</h4>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialUpdatesHomeTwo;