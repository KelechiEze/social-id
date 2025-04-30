'use client';

import React from 'react';
import Image from 'next/image';
import './TestimonialsComponent.css';

const TestimonialsComponent = () => {
  const testimonials = [
    {
      id: 1,
      quote: "You made it so simple. My new site is so much faster and easier to work with than my old",
      name: "Albert M. Doyle",
      position: "Customer",
      image: "/customer1.jpg"
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit maecenas vitae sagittis sapien.",
      name: "Robert C. Wilson",
      position: "Customer",
      image: "/testyy.jpg"
    },
    {
      id: 3,
      quote: "Morbi et risus tortor. Suspendisse eu varius sem cras consequat commodo.",
      name: "Jacob B. Ginley",
      position: "Customer",
      image: "/customer2.jpg"
    }
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <p className="testimonials-subtitle">TESTIMONIALS</p>
          <h2 className="testimonials-title">What People Say About Our Services</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === 1 ? 'center-card' : ''}`}
            >
              {index === 1 ? (
                <>
                  <div className="center-image">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="testimonial-image"
                    />
                  </div>
                  <p className="testimonial-text center-text">{testimonial.quote}</p>
                  <div className="center-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                  <div className="center-quote">❝</div>
                </>
              ) : (
                <>
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="testimonial-image"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
