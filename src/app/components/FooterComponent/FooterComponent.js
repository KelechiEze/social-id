'use client';

import React from 'react';
import Image from 'next/image';
import './FooterComponent.css';
import { MessageSquare, Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <Image 
              src="/whitelogo.png" 
              alt="IQConnetik Logo" 
              width={120}
              height={40}
              className="logo-image"
            />
          </div>
        </div>
        
        <div className="footer-links-section">
          <ul className="footer-links">
            <li className="footer-link-item">Management</li>
            <li className="footer-link-item">Appointment</li>
            <li className="footer-link-item">News</li>
          </ul>
        </div>
        
        <div className="footer-contact-section">
          <div className="contact-block">
            <h4 className="contact-title">Give Us A Call</h4>
            <p className="contact-detail">1-800-765-4321</p>
          </div>
          
          <div className="contact-block">
            <h4 className="contact-title">Email Us</h4>
            <p className="contact-detail">info@iqconnetik.com</p>
          </div>
        </div>
        
        <div className="footer-social-section">
          <h4 className="social-title">Join Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <MessageSquare />
            </a>
            <a href="#" className="social-icon">
              <Facebook />
            </a>
            <a href="#" className="social-icon">
              <Instagram />
            </a>
            <a href="#" className="social-icon">
              <Mail />
            </a>
            <a href="#" className="social-icon">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
