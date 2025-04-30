import React from 'react';
import './BusinessContinuityBanner.css';
import { ArrowRight } from 'lucide-react';

const BusinessContinuityBanner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Ensure Your Business</h2>
        <h2>Continuity &amp; Service Levels</h2>
      </div>
      <button className="discover-btn">
        Discover More <ArrowRight size={16} />
      </button>
    </section>
  );
};

export default BusinessContinuityBanner;
