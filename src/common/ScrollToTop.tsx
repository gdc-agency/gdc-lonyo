"use client"
import React, { useEffect, useRef, useState } from 'react';

const ScrollToTop = () => { 
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <>
      <div className="paginacontainer">
        <div className={`progress-wrap ${isActive ? "active-progress" : ""}`} onClick={scrollToTop}>
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path ref={progressPathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <div className="top-arrow">
            <svg width="12" height="20" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 1L8 8L1 15" stroke="#142D6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollToTop;