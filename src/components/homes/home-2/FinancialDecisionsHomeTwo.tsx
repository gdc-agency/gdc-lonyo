"use client"
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data = [
  {
    id: 1,
    delay: 500,
    question: "Real-Time Expense Tracking",
    answer:
      "Yes, this finance app uses bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    id: 2,
    delay: 700,
    question: "Comprehensive Financial Overview",
    answer:
      "Yes, you can link multiple bank accounts and credit cards to get a complete financial overview in one place.",
  },
  {
    id: 3,
    delay: 900,
    question: "Stress-Reducing Automation",
    answer:
      "The app helps you by categorizing your spending, setting budget limits, and providing real-time notifications when you exceed your set budget.",
  },
]

const FinancialDecisionsHomeTwo = ({style_2, style_3} : any) => {
  const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);
  
    useEffect(() => {
      AOS.refresh(); // Refresh AOS on state change
    }, [activeIndex]);


  return (
    <>
      <section className={`${style_2 ? 'lonyo-section-padding' : style_3 ? 'lonyo-section-padding7' : 'lonyo-section-padding5'} `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="lonyo-content-thumb2" data-aos="fade-right" data-aos-duration="700">
                <img src="assets/images/v2/content1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-default-content pl-50" data-aos="fade-up" data-aos-duration="500">
                <h2>It clarifies all strategic financial decisions</h2>
                <p className="data">With this tool, you can say goodbye to overspending, stay on track with your savings goals, and say goodbye to financial worries. Get ready for a clearer view of your finances like never before!</p>
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
      </section>
    </>
  );
};

export default FinancialDecisionsHomeTwo;