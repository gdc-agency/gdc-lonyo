"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data1 = [
  {
    delay: 500,
    question: "Is my financial data safe and secure?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 700,
    question: "Can I link multiple bank accounts and credit cards?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 900,
    question: "How does the app help me stick to my budget?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 1100,
    question: "Can I track my investments with the app?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 1300,
    question: "Is the app free, or are there subscription fees?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
];

const faq_data2 = [
  {
    delay: 500,
    question: "What is your refund policy?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 700,
    question: "How do you handle my personal and financial data?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 900,
    question: "Is there a contract or commitment?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 1100,
    question: "What happens if I cancel my subscription?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",

  },
  {
    delay: 1300,
    question: "Do you comply with data protection regulations?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",

  },
];

const faq_data3 = [
  {
    delay: 500,
    question: "How can I contact support?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 700,
    question: "Do you offer onboarding or training?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 900,
    question: "Is there a help center or knowledge base?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",
  },
  {
    delay: 1100,
    question: "What should I do if I encounter a technical issue?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",

  },
  {
    delay: 1300,
    question: "Can I request custom features?",
    answer:
      "Yes, this finance apps use bank-level encryption, multi-factor authentication, and other security measures to protect your sensitive information.",

  },
];

const FaqArea = () => {
  const [open, setOpen] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open2]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open3]);



  return <>
    <div className="lonyo-section-padding9">
      <div className="container">
        <div className="lonyo-faq-wrap1">
          <div className="lonyo-faq-title">
            <h2>General FAQs</h2>
          </div>
          {faq_data1.map((item, i) => (
            <div key={i} className={`lonyo-faq-item item2 ${open === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
              <div className="lonyo-faq-header">
                <h4 onClick={() => setOpen(i)}>{item.question}</h4>
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
        <div className="lonyo-faq-wrap1">
          <div className="lonyo-faq-title">
            <h2>Policy FAQs</h2>
          </div>
          {faq_data2.map((item, i) => (
            <div key={i} className={`lonyo-faq-item item2 ${open2 === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
              <div className="lonyo-faq-header">
                <h4 onClick={() => setOpen2(i)}>{item.question}</h4>
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
        <div className="lonyo-faq-wrap1">
          <div className="lonyo-faq-title">
            <h2>Support FAQs</h2>
          </div>
          {faq_data3.map((item, i) => (
            <div key={i} className={`lonyo-faq-item item2 ${open3 === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
              <div className="lonyo-faq-header">
                <h4 onClick={() => setOpen3(i)}>{item.question}</h4>
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
          <Link className="lonyo-default-btn faq-btn2" href="/contact-us">Can't find your answer</Link>
        </div>
      </div>
    </div>
  </>;
};

export default FaqArea;
