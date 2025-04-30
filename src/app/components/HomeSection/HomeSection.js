'use client';

import React from 'react';
import './HomeSection.css';
import { FaArrowRight } from 'react-icons/fa';

const HomeSection = () => {
  return (
    <section className="homeSection">
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
      </div>
    </section>
  );
};

export default HomeSection;
