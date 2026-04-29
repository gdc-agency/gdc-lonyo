"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data = [
  {
    id: 1,
    delay: 500,
    question: "Is my financial data safe and secure?",
    answer:
      "Yes, this finance app uses bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    id: 2,
    delay: 700,
    question: "Can I link multiple bank accounts and credit cards?",
    answer:
      "Yes, you can link multiple bank accounts and credit cards to get a complete financial overview in one place.",
  },
  {
    id: 3,
    delay: 900,
    question: "How does the app help me stick to my budget?",
    answer:
      "The app helps you by categorizing your spending, setting budget limits, and providing real-time notifications when you exceed your set budget.",
  },
  {
    id: 4,
    delay: 1100,
    question: "Can I track my investments with the app?",
    answer:
      "Yes, you can track your investments, monitor market trends, and get insights into your portfolio's performance.",
  },
  {
    id: 5,
    delay: 1300,
    question: "Is the app free, or are there subscription fees?",
    answer:
      "The app offers both free and premium subscription plans with additional features in the paid version.",
  },
];
 

const FaqAreaHomeOne = ({style_2, style_3, style_4} : any) => {
  const [activeIndex, setActiveIndex] =  useState(0);

    useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);
  
    useEffect(() => {
      AOS.refresh(); // Refresh AOS on state change
    }, [activeIndex]);


  return (
    <>
      <div className={`lonyo-section-padding4 ${style_4 ? 'section' : ''} ${style_2 ? 'section' : style_3 ? 'section pt-0' : ''}`}>
        <div className="container">
          <div className="lonyo-section-title center">
            <h2>Find answers to all questions below</h2>
          </div>
         {style_3 ? null : style_4 ? null : <div className="lonyo-faq-shape"></div>} 
          <div className="lonyo-faq-wrap1">
            {faq_data.map((item, i) => (
               <div key={i} className={`lonyo-faq-item item2 ${activeIndex === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration="500">
               <div className="lonyo-faq-header" onClick={() => setActiveIndex(i)}>
                 <h4>{item.question}</h4>
                 <div className="lonyo-active-icon">
                   <img className="plasicon" src="assets/images/v1/mynus.svg" alt="" />
                   <img className="mynusicon" src="assets/images/v1/plas.svg" alt="" />
                 </div>
               </div>
               <div className="lonyo-faq-body body2">
                 <p>{item.answer}</p>
               </div>
             </div>
            ))} 
          </div>
          <div className="faq-btn" data-aos="fade-up" data-aos-duration="700">
            <Link className="lonyo-default-btn faq-btn2" href="/faq">Can't find your answer</Link>
          </div>
        </div>
      </div>
      {style_4 ? null :
      <div className={`${style_3 ? 'lonyo-content-shape' : 'lonyo-content-shape3'}`}>
        <img src="assets/images/shape/shape2.svg" alt="" />
      </div>      
      }
    </>
  );
};

export default FaqAreaHomeOne;