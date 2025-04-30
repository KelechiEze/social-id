'use client';

import React, { useState } from 'react';
import './Navbar.css';
import { FaComments, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Image
            src="/whitelogo.png"
            alt="Logo"
            fill
            priority
            sizes="(max-width: 800px) 120px, 180px"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <ul className="navLinks">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <button className="navButton desktop-only heartbeat-button">
          <FaComments className="chatIcon" />
          Request a number
        </button>
      </nav>

      {menuOpen && (
        <div className="mobileMenu">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>
              <button className="navButton heartbeat-button">
                <FaComments className="chatIcon" />
                Request a number
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
