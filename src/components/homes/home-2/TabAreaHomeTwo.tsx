"use client"
import React, { useState } from 'react';

const tabsData = [
  {
    id: 1,
    title: "Unified Dashboard",
    icon: "assets/images/v2/icon5.svg",
    img: "assets/images/v2/dashboard.png",
    content:
      "View all your accounts, transactions & investments in one central location. See every credit & debit transaction as it happens across all your accounts. Get a complete view of your expenses with expense categories.",
  },
  {
    id: 2,
    title: "Real-Time Updates",
    icon: "assets/images/v2/icon6.svg",
    img: "assets/images/hero/dashboard.png",
    content:
      "This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard. View all your accounts, transactions, and expenses with categorized breakdowns.",
  },
  {
    id: 3,
    title: "Savings Contributions",
    icon: "assets/images/v2/icon5.svg",
    img: "assets/images/v2/dashboard.png",
    content:
      "View all your accounts, transactions & investments in one central location. See every credit & debit transaction as it happens across all your accounts. Get a complete view of your expenses with expense categories.",
  },
  {
    id: 4,
    title: "Daily Summary",
    icon: "assets/images/v2/icon6.svg",
    img: "assets/images/hero/dashboard.png",
    content:
      "This feature ensures you can easily stay on top of your finances by consolidating all updates into a single dashboard. View all your accounts, transactions, and expenses with categorized breakdowns.",
  },
];



const TabAreaHomeTwo = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <section className="lonyo-section-padding7 lonyo-tab-section">
        <div className="container">
          <div className="lonyo-section-title center max-width-700">
            <h2>Automatically keep track of your finances</h2>
          </div>
          <div className="lonyo-tab-wrap">
            <ul className="tabs tab2">
              {tabsData.map((item, i) => (
                <li className={`${activeTab === item.id ? 'active-tab' : ''}`} key={i} onClick={() => setActiveTab(item.id)}>
                  <img src={item.icon} alt="" />
                  <h4>{item.title}</h4>
                </li>
              ))} 
            </ul>
            <ul className="tabs-content content2" data-aos="fade-up" data-aos-duration="700">
              {tabsData.map((item, i) => (
                <li style={{ display: activeTab === item.id ? 'block' : 'none' }} key={i}>
                  <img src={item.img} alt="" />
                </li>
              ))} 
            </ul>
          </div>
          <div className="lonyo-tab-shape">
            <img src="assets/images/shape/shape6.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabAreaHomeTwo;