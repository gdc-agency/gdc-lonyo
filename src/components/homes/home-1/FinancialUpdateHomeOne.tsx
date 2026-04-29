"use client"
import React, { useState } from 'react';

const tabsData = [
  {
    id: 1,
    title: "Unified Dashboard",
    icon: "assets/images/v1/tv.svg",
    content:
      "View all your accounts, transactions & investments in one central location. See every credit & debit transaction as it happens across all your accounts. Get a complete view of your expenses with expense categories.",
  },
  {
    id: 2,
    title: "Real-Time Updates",
    icon: "assets/images/v1/alerm.svg",
    content:
      "This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard. View all your accounts, transactions, and expenses with categorized breakdowns.",
  },
];


const FinancialUpdateHomeOne = ({ style_2, style_3 }: any) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className={`${style_2 ? 'lonyo-section-padding' : style_3 ? 'lonyo-section-padding3 overflow-hidden' : 'lonyo-section-padding4 position-relative'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <div className={`${style_3 ? 'lonyo-faq-thumb' : 'lonyo-content-thumb'}`} data-aos="fade-up" data-aos-duration="700">
                {style_3 ? 
                <img src="assets/images/v2/faq-thumb.png" alt="" />
                :
                <img src="assets/images/v1/content-thumb2.png" alt="" />
                }
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="lonyo-default-content pr-50" data-aos="fade-right" data-aos-duration="700">
                <h2>Get all your financial updates in one place</h2>
                <p className="data">This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard.</p>
                <div className="mt-50">
                  <ul className="tabs">
                    {tabsData.map((item, i) => (
                      <li className={`${activeTab === item.id ? 'active-tab' : ''}`} key={i} onClick={() => setActiveTab(item.id)}>
                        <img src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                      </li>
                    ))}
                  </ul>
                  <ul className="tabs-content">
                    {tabsData.map((item, i) => (
                      <li style={{ display: activeTab === item.id ? 'block' : 'none' }} key={i}>
                        {item.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lonyo-content-shape2"></div>
      </div>
      {style_2 ? null :
       style_3 ? null :
        <div className="lonyo-content-shape3">
          <img src="assets/images/shape/shape2.svg" alt="" />
        </div>
      }
    </>
  );
};

export default FinancialUpdateHomeOne;