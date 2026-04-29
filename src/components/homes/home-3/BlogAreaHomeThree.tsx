
import Link from 'next/link';
import React from 'react';

const BlogAreaHomeThree = () => {
  return (
    <>
      <div className="lonyo-section-padding6 overflow-hidden">
        <div className="container">
          <div className="lonyo-section-title">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h2>Check out the latest articles and news</h2>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="lonyo-title-btn" data-aos="fade-up" data-aos-duration="500">
                  <Link className="lonyo-default-btn blog-title-btn" href="/blog">Browse all articles</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="lonyo-blog-wrap" data-aos="fade-right" data-aos-duration="500">
                <div className="lonyo-blog-thumb">
                  <img src="assets/images/blog/b1.png" alt="" />
                </div>
                <div className="lonyo-blog-meta">
                  <ul>
                    <li>
                      <Link href="/single-blog"><img src="assets/images/blog/date.svg" alt="" />June 15, 2025</Link>
                    </li>
                    <li>
                      <Link href="/single-blog"><img src="assets/images/blog/clock.svg" alt="" />5 min read</Link>
                    </li>
                  </ul>
                </div>
                <div className="lonyo-blog-content">
                  <Link href="/single-blog">
                    <h2>A guide to free personal finance software</h2>
                  </Link>
                  <p>Imagine having a tool that meticulously tracks all income and expenses savings all in one place — sounds like a...</p>
                </div>
                <div className="lonyo-blog-btn">
                  <Link href="/single-blog" className="lonyo-default-btn blog-btn">continue reading</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lonyo-blog-wrap" data-aos="fade-left" data-aos-duration="500">
                <div className="lonyo-blog-thumb">
                  <img src="assets/images/blog/b2.png" alt="" />
                </div>
                <div className="lonyo-blog-meta">
                  <ul>
                    <li>
                      <Link href="/single-blog"><img src="assets/images/blog/date.svg" alt="" />June 10, 2025</Link>
                    </li>
                    <li>
                      <Link href="/single-blog"><img src="assets/images/blog/clock.svg" alt="" />7 min read</Link>
                    </li>
                  </ul>
                </div>
                <div className="lonyo-blog-content">
                  <Link href="/single-blog">
                    <h2>AI-powered tools for increasing productivity</h2>
                  </Link>
                  <p>Artificial Intelligence (AI) has revolutionized many industries, and the field of finance and financial planning and analysis...</p>
                </div>
                <div className="lonyo-blog-btn">
                  <Link href="/single-blog" className="lonyo-default-btn blog-btn">continue reading</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaHomeThree;