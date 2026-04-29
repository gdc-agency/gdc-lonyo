
import Link from 'next/link'; 
import React from 'react';

const Breadcrumb = ({title, subtitle} : any) => {
  return (
    <>
      <div className="breadcrumb-wrapper light-bg">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title pb-0">{title}</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><img src="assets/images/blog/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Breadcrumb;