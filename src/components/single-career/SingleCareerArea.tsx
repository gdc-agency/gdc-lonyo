"use client"
import React from 'react';

const SingleCareerArea = () => {
  return (
    <>
      <div className="lonyo-section-padding9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="lonyo-default-content pb-35">
                <h2>Job description:</h2>
                <p>We’re seeking a detail-oriented & analytical financial analyst to join our team. The successful candidate will play a pivotal role in analyzing financial data, preparing reports, and providing strategic recommendations to support business decisions. </p>
                <p>This is an exciting opportunity for someone passionate about numbers and eager to contribute to organizational growth.</p>
              </div>
              <div className="lonyo-default-content pb-35">
                <h2>Job description:</h2>
                <div className="text">
                  <p><span>1. Financial Reporting:</span> Prepare accurate financial reports, forecasts, and models. Monitor financial performance and compare it to budgets and forecasts.</p>
                  <p><span>2. Data Analysis:</span> Analyze financial data to identify trends, variances, and opportunities for improvement. Evaluate financial risks and develop mitigation strategies.</p>
                  <p><span>3. Budgeting and Forecasting:</span> Assist in the preparation of annual budgets and long-term financial forecasts. Collaborate with teams to ensure alignment with our goals.</p>
                  <p><span>4. Strategic Recommendations:</span> Provide actionable insights & recommendations to improve profitability and operational efficiency.</p>
                  <p><span>5. Market Research:</span> Stay updated on industry trends and competitor performance to inform strategic planning. Analyze economic & market data to assess potential impacts.</p>
                </div>
              </div>
              <div className="lonyo-default-content pb-35">
                <h2>What we are looking for:</h2>
                <ul>
                  <li><span>Education:</span> Bachelor’s degree in Finance, Accounting, Economics, or a related field. A master’s degree or CFA certification is a plus.</li>
                  <li><span>Experience:</span> 2-5 years of experience in financial analysis, budgeting. Skilled with financial modeling and forecasting tools.</li>
                  <li><span>Skills:</span> Strong analytical and problem-solving skills. Proficiency in financial software (e.g., Excel, SAP, QuickBooks). Knowledge of data visualization tools is a plus.</li>
                  <li><span>Communication:</span> Excellent verbal & written communication skills to present complex data effectively. Ability to collaborate with cross-functional teams</li>
                  <li><span>Attention to Detail:</span> Accuracy in handling financial data and preparing reports. Ability to identify and correct discrepancies in financial records.</li>
                </ul>
              </div>
              <div className="lonyo-default-content pb-35 pb-60">
                <h2>What we offer:</h2>
                <div className="text4">
                  <ul>
                    <li>Competitive salary and performance-based incentives.</li>
                    <li>Opportunities for professional growth and development.</li>
                    <li>A collaborative and supportive work environment.</li>
                    <li>Benefits package, including health insurance, retirement plans, and more.</li>
                  </ul>
                  <p>Join us and contribute to driving strategic decisions with impactful financial insights!</p>
                </div>
              </div>
              <div className="lonyo-blog-d-comment-box2">
                <h4>Apply for this position:</h4>
                <div className="lonyo-contact-box">
                  <form onClick={(e) => e.preventDefault()}>
                    <div className="lonyo-main-field">
                      <p>Full name*</p>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="lonyo-main-field">
                          <p>Email address*</p>
                          <input type="email" placeholder="Your email address" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="lonyo-main-field">
                          <p>Contact number*</p>
                          <input type="text" placeholder="Enter contact number" />
                        </div>
                      </div>
                    </div>
                    <p>Message</p>
                    <div className="lonyo-main-field-textarea">
                      <textarea className="button-text" name="textarea" placeholder="Write your message here..."></textarea>
                    </div>
                    <button className="lonyo-default-btn extra-btn2 d-block" type="button">Submit application</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="lonyo-career-d-sidebar">
                <ul>
                  <li>
                    <h4>Salary:</h4>
                    <p>$1,5000- $18,000 mo</p>
                  </li>
                  <li>
                    <h4>Vacancy:</h4>
                    <p>07 Person</p>
                  </li>
                  <li>
                    <h4>Experiences:</h4>
                    <p>2-5 Years</p>
                  </li>
                  <li>
                    <h4>Gender:</h4>
                    <p>Male/Female</p>
                  </li>
                  <li>
                    <h4>Deadline:</h4>
                    <p>18 June, 2025</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCareerArea;