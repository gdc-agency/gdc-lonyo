"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const SingleServiceArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="lonyo-section-padding9 overflow-hidden">
        <div className="container">
          <div className="lonyo-section-title" data-aos="fade-up" data-aos-duration="700">
            <img src="assets/images/service/dashboard.png" alt="" />
          </div>
          <div className="lonyo-default-content max-1100 pb-35">
            <h2>Key Features of expense tracking:</h2>
            <p>Expense tracking is a core feature of finance apps that helps users monitor and categorize their spending. It provides a clear picture of where your money goes, enabling smarter financial decisions and better budgeting.</p>
            <div className="text text2">
              <p><span>1. Automatic Transaction Syncing:</span> Link your bank accounts and credit cards to automatically import transactions in real-time.</p>
              <p><span>2. Categorization of Expenses:</span> Transactions are sorted into categories like food, transportation, utilities, and entertainment, making it easy to understand spending patterns.</p>
              <p><span>3. Customizable Categories:</span> Create custom categories tailored to your lifestyle for a more personalized tracking experience.</p>
              <p><span>4. Spending Trends Analysis:</span>Get insights into your spending habits through monthly summaries, trends, and charts.</p>
              <p><span>5. Searchable Transaction History:</span> Easily find past transactions with a searchable history, ensuring you never lose track of specific expenses.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-hero-dashbord" data-aos="fade-right" data-aos-duration="700">
                <img src="assets/images/hero/dashboard.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-video-thumb2" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/hero/video1.png" alt="" />
                <a className="play-btn video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="assets/images/shape/play-icon.svg" alt="" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="lonyo-default-content max-1100 pt-40">
            <h2>Key Features of expense tracking:</h2>
            <p>Integration Feature means any Service feature that collects metrics by means other than through an OSCI, has an interface for displaying information collected via an OSCI that is separate from the Service's or exports metrics to other Google or third party products or services.</p>
            <ul>
              <li><span>Improved Financial Awareness:</span> Know exactly where your money is going.</li>
              <li><span>Better Budgeting:</span> Use detailed data to set realistic budgets and control overspending.</li>
              <li><span>Savings Optimization:</span> Identify unnecessary expenses to redirect funds toward savings.</li>
              <li><span>Effortless Organization:</span> Automate the tracking process and reduce manual bookkeeping efforts.</li>
            </ul>
            <p className="text3">Whether you're managing personal finances or tracking business expenses, an expense tracking service ensures you stay on top of your financial goals effortlessly.</p>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}
    </>
  );
};

export default SingleServiceArea;