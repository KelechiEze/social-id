'use client';

import React from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          className="map-image"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.815707512937!2d7.497545774017935!3d4.846711995098065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdee87b5d307%3A0x33a5cb8d90a5f42e!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1684351234567"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="form-container">
          <div className="form-content">
            <h2 className="form-title">Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
