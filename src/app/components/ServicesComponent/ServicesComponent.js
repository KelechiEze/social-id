'use client';

import React from 'react';
import './ServicesComponent.css';
import { MessageCircle, Phone, User } from 'lucide-react';

const ServicesComponent = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-left">
          <p className="services-subtitle">OUR EXPERTISE</p>
          <h2 className="services-title">The Services We Offer</h2>
          <p className="services-description">
            Call Center Services Internationals management team has over 35-years of
            expertise in successfully establishing U.S.
          </p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
        
        <div className="services-right">
          <div className="service-card">
            <div className="service-icon debt-icon">
              <Phone className="icon" />
            </div>
            <h3 className="service-title">Debt Collection</h3>
            <p className="service-description">We will allow you to establish a world-class</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon it-icon">
              <User className="icon" />
            </div>
            <h3 className="service-title">IT Development</h3>
            <p className="service-description">We provide nearshore IT staff in Mexico</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon customer-icon">
              <Phone className="icon" />
            </div>
            <h3 className="service-title">Customer Service</h3>
            <p className="service-description">Center with bicultural & bilingual agents</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon lead-icon">
              <MessageCircle className="icon" />
            </div>
            <h3 className="service-title">Lead Generation</h3>
            <p className="service-description">Improve direct response time, increase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
