'use client';

import React from 'react';
import './StepsComponent.css';

const StepsComponent = () => {
  return (
    <div className="steps-container">
      <div className="steps-content">
        <div className="steps-header">
          <p className="steps-subtitle">FOUR EASY STEPS</p>
          <h2 className="steps-title">How To Get <br></br><span>Started</span></h2>
        </div>

        <div className="steps-timeline">
          <div className="step-item">
            <div className="step-label">Setup Your<br></br> Campaign</div>
            <div className="step-circle">01</div>
            <p className="step-description">
              Name your Campaign and choose your country
            </p>
          </div>

          <div className="step-item">
            <div className="step-label">Get a Tracking<br></br> Number</div>
            <div className="step-circle">02</div>
            <p className="step-description">
              Get a unique Tracking Number where you can send calls
            </p>
          </div>

          <div className="step-item">
            <div className="step-label">Add a Target<br></br> Line</div>
            <div className="step-circle">03</div>
            <p className="step-description">
              Forward your calls to buyers or anywhere you'd like them to go
            </p>
          </div>

          <div className="step-item">
            <div className="step-label">Launch Your <br></br>Campaign</div>
            <div className="step-circle">04</div>
            <p className="step-description">
              Start receiving calls and tracking your results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
