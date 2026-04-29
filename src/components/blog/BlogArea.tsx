"use client";
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
        <div className="lonyo-section-padding9 overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="lonyo-blog-wrap" data-aos="fade-up" data-aos-duration="500">
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
              <h2><Link href="/single-blog">A guide to free personal finance software</Link></h2>
              <p>Imagine having a tool that meticulously tracks all income and expenses savings all in one place — sounds like a...</p>
            </div>
            <div className="lonyo-blog-btn">
              <Link href="/single-blog" className="lonyo-default-btn blog-btn">continue reading</Link>
            </div>
          </div>
          <div className="lonyo-blog-wrap" data-aos="fade-up" data-aos-duration="700">
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
              <h2><Link href="/single-blog">AI-powered tools for increasing productivity</Link></h2>
              <p>Artificial Intelligence (AI) has revolutionized many industries, and the field of finance and financial planning and analysis...</p>
            </div>
            <div className="lonyo-blog-btn">
              <Link href="/single-blog" className="lonyo-default-btn blog-btn">continue reading</Link>
            </div>
          </div>
          <div className="lonyo-blog-wrap mb-0" data-aos="fade-up" data-aos-duration="900">
            <div className="lonyo-blog-thumb">
              <img src="assets/images/blog/b3.png" alt="" />
            </div>
            <div className="lonyo-blog-meta">
              <ul>
                <li>
                  <Link href="/single-blog"><img src="assets/images/blog/date.svg" alt="" />June 05, 2025</Link>
                </li>
                <li>
                  <Link href="/single-blog"><img src="assets/images/blog/clock.svg" alt="" />10 min read</Link>
                </li>
              </ul>
            </div>
            <div className="lonyo-blog-content">
              <h2><Link href="/single-blog">Using finance software to boost your income</Link></h2>
              <p>Are you aware of the fact that what is the most significant stress cause in the United States of America? If your...</p>
            </div>
            <div className="lonyo-blog-btn">
              <Link href="/single-blog" className="lonyo-default-btn blog-btn">continue reading</Link>
            </div>
          </div>
          <div className="lonyo-pagination center">
            <Link className="pagi-btn btn2" href="/single-blog">
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75L6 6L0.75 11.25" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <ul>
              <li><a className="current" href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
            <Link className="pagi-btn" href="/single-blog">
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75L6 6L0.75 11.25" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="lonyo-blog-sidebar" data-aos="fade-left" data-aos-duration="700">
            <div className="lonyo-blog-widgets">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="lonyo-search-box">
                  <input type="search" placeholder="Type keyword here" />
                  <button id="lonyo-search-btn" type="button"><i className="ri-search-line"></i></button>
                </div>
              </form>
            </div>
            <div className="lonyo-blog-widgets">
              <h4>Categories:</h4>
              <div className="lonyo-blog-categorie">
                <ul>
                  <li><Link href="/single-blog">Finance <span>10</span></Link></li>
                  <li><Link href="/single-blog">Business <span>18</span></Link></li>
                  <li><Link href="/single-blog">Technology <span>03</span></Link></li>
                  <li><Link href="/single-blog">Development <span>07</span></Link></li>
                  <li><Link href="/single-blog">Uncategorized <span>49</span></Link></li>
                </ul>
              </div>
            </div>
            <div className="lonyo-blog-widgets">
              <h4>Recent Posts</h4>
              <Link className="lonyo-blog-recent-post-item" href="/single-blog">
                <div className="lonyo-blog-recent-post-thumb">
                  <img src="assets/images/blog/b4.png" alt="" />
                </div>
                <div className="lonyo-blog-recent-post-data">
                  <ul>
                    <li><img src="assets/images/blog/date.svg" alt="" />June 15, 2025</li>
                  </ul>
                  <div>
                    <h4>7 businesses for easy money</h4>
                  </div>
                </div>
              </Link>
              <Link className="lonyo-blog-recent-post-item" href="/single-blog">
                <div className="lonyo-blog-recent-post-thumb">
                  <img src="assets/images/blog/b5.png" alt="" />
                </div>
                <div className="lonyo-blog-recent-post-data">
                  <ul>
                    <li><img src="assets/images/blog/date.svg" alt="" />June 12, 2025</li>
                  </ul>
                  <div>
                    <h4>10 Finance apps for you to use</h4>
                  </div>
                </div>
              </Link>
              <Link className="lonyo-blog-recent-post-item" href="/single-blog">
                <div className="lonyo-blog-recent-post-thumb">
                  <img src="assets/images/blog/b6.png" alt="" />
                </div>
                <div className="lonyo-blog-recent-post-data">
                  <ul>
                    <li><img src="assets/images/blog/date.svg" alt="" />June 08, 2025</li>
                  </ul>
                  <div>
                    <h4>How to create a stock market</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="lonyo-blog-widgets">
              <h4>Tags</h4>
              <div className="lonyo-blog-tags">
                <ul>
                  <li><Link href="/single-blog">Software</Link></li>
                  <li><Link href="/single-blog">Business</Link></li>
                  <li><Link href="/single-blog">App</Link></li>
                  <li><Link href="/single-blog">Solutions</Link></li>
                  <li><Link href="/single-blog">Finance</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default BlogArea;