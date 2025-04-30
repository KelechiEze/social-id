'use client';

import React, { useEffect, useState } from 'react';
import './HomeSection.css';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const images = ['/brownsmile.jpg', '/smile2.png', '/smilr3.png'];

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = () => {
    alert('Play video');
  };

  return (
    <section
      className="homeSection"
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      <div className="overlay">
        <div className="homeContent">
          <h1>Convert Leads With Integrated Call Center</h1>
          <p>
            Our Mexican debt collectors helped us handle three-times the amount of placements.
          </p>
          <button className="ctaButton">
            Request Pricing
            <span className="separator"></span>
            <FaArrowRight className="arrowIcon" />
          </button>
        </div>

        <div className="playButtonContainer" onClick={handlePlayClick}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`ripple ripple-${i}`}></div>
          ))}
          <FaPlay className="playButton" />
        </div>

        <div className="dotsContainer">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
