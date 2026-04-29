 

"use client";
import Link from "next/link";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    monthlyPrice: "$40",
    annualPrice: "$20",
    features: [
      "Unlimited cards and smart controls",
      "Access to 15+ payment methods",
      "Automated expense management", 
      "Access to 15+ payment methods",
      "Automated expense management", 
    ],
    ctaText: "Start your free 14-day trial",
  },
  {
    name: "Pro Plan",
    monthlyPrice: "$99",
    annualPrice: "$49",
    active: true,
    features: [
      "Everything included in Basic",
      "Access to 35+ payment methods",
      "Automated expense management",
      "Unlimited customizable workflows",
      "Multi-currency card limits",
    ],
    ctaText: "Get started now",
  },
  {
    name: "Enterprise Plan",
    monthlyPrice: "$299",
    annualPrice: "$199",
    features: [
      "Everything included in Pro",
      "Access to 100+ payment methods",
      "Invoice tracking and payments",
      "Enterprise ERP integrations",
      "Automated reports on cashflow",
    ],
    ctaText: "Get started now",
  },
];


const PricingOne = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const togglePricing = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <>
      <div className="lonyo-section-padding10 position-relative">
        <div className="container">
          <div className="lonyo-section-title center">
            <h2 className="title">Pick from one of our ready packages</h2>
            <p className="mb-0">
              Starts at just $20/month, with no ads or hidden fees, after a 14-day
              free trial. Your card will not be charged until your free trial
              ends.
            </p>
            <div className="pricing-btn mt-50">
              <label htmlFor="toggle" className="toggle-switch">
                <input
                  id="toggle"
                  type="checkbox"
                  checked={isMonthly}
                  onChange={togglePricing}
                />
                <span>Monthly</span>
                <span>Yearly</span>
              </label>
            </div>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-xl-4 col-lg-6">
                <div className={`lonyo-pricing-wrap aos-init aos-animate ${plan.active ? "active" : ""}`}>
                  <div className="lonyo-pricing-header">
                    <h4>{plan.name}</h4>
                  </div>
                  <div className={`lonyo-pricing-price ${isMonthly ? "" : "d-none"}`}>
                    <h2>{plan.monthlyPrice}</h2>
                    <span>/per user/month</span>
                  </div>
                  <div className={`lonyo-pricing-price ${isMonthly ? "d-none" : ""}`}>
                    <h2>{plan.annualPrice}</h2>
                    <span>/per user/year</span>
                  </div>
                  <div className="lonyo-pricing-body">
                    <p>What’s included:</p>
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <img src="assets/images/v2/icon7.svg" alt="" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lonyo-pricing-footer mt-50">
                    <Link className="lonyo-default-btn d-block pricing-btn2" href="/contact-us">
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default PricingOne;
