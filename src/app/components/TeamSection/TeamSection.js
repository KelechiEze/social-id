'use client';

import Image from 'next/image';
import React from 'react';
import './TeamSection.css';

import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Robert C. Wilson',
    role: 'Manager',
    image: '/Robert.jpg',
  },
  {
    name: 'Barbra J. Zambrano',
    role: 'Manager',
    image: '/Barba.jpg',
  },
  {
    name: 'Roger M. Howell',
    role: 'Manager',
    image: '/roger.jpg',
  },
  {
    name: 'Joyce V. Garcia',
    role: 'Manager',
    image: '/alice.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <p className="team-subtitle">OUR TEAM</p>
      <h2 className="team-title">
        Our Best Specialists <br /> Work For You
      </h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            {/* Add this wrapper for hover effect */}
            <div className="team-image-wrapper">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="team-image"
              />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-icons">
              <FaFacebookF />
              <FaTelegramPlane />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
