'use client';

import React from 'react';
import Image from 'next/image';
import './StepsComponent.css';

const StepsComponent = () => {
  return (
    <div className="steps-container">
      <div className="steps-content">
        <div className="steps-header">
          <p className="steps-subtitle">FOUR EASY STEPS</p>
          <h2 className="steps-title">How To Get Started</h2>
        </div>

        <div className="steps-timeline">
          <div className="step-item">
            <Image
              src="/images/step1.png"
              alt="Setup Your Campaign"
              width={80}
              height={80}
              className="step-image"
            />
            <h3 className="step-title">
              <div className="step-circle">01</div>
              Setup Your Campaign
            </h3>
            <p className="step-description">Name your Campaign and choose your country</p>
          </div>

          <div className="step-item">
            <Image
              src="/images/step2.png"
              alt="Get a Tracking Number"
              width={80}
              height={80}
              className="step-image"
            />
            <h3 className="step-title">
              <div className="step-circle">02</div>
              Get a Tracking Number
            </h3>
            <p className="step-description">Get a unique Tracking Number where you can send calls</p>
          </div>

          <div className="step-item">
            <Image
              src="/images/step3.png"
              alt="Add a Target Line"
              width={80}
              height={80}
              className="step-image"
            />
            <h3 className="step-title">
              <div className="step-circle">03</div>
              Add a Target Line
            </h3>
            <p className="step-description">Forward your calls to buyers or anywhere youd like them to go</p>
          </div>

          <div className="step-item">
            <Image
              src="/images/step4.png"
              alt="Launch Your Campaign"
              width={80}
              height={80}
              className="step-image"
            />
            <h3 className="step-title">
              <div className="step-circle">04</div>
              Launch Your Campaign
            </h3>
            <p className="step-description">Name your Campaign and choose your country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
