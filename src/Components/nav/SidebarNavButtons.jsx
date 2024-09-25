import React, { useState } from 'react';
import './SidebarNavButtons.css';

const SidebarNavButtons = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="sidebar-nav-buttons">
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={`nav-button ${activeNav === '#home' ? 'active' : ''}`}
      >
        <span className="tooltip">Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={`nav-button ${activeNav === '#about' ? 'active' : ''}`}
      >
        <span className="tooltip">About</span>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={`nav-button ${activeNav === '#services' ? 'active' : ''}`}
      >
        <span className="tooltip">Services</span>
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav('#resume')}
        className={`nav-button ${activeNav === '#resume' ? 'active' : ''}`}
      >
        <span className="tooltip">Resume</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={`nav-button ${activeNav === '#portfolio' ? 'active' : ''}`}
      >
        <span className="tooltip">Portfolio</span>
      </a>
      <a
        href="#testimonial"
        onClick={() => setActiveNav('#testimonial')}
        className={`nav-button ${activeNav === '#testimonial' ? 'active' : ''}`}
      >
        <span className="tooltip">Testimonial</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={`nav-button ${activeNav === '#contact' ? 'active' : ''}`}
      >
        <span className="tooltip">Contact</span>
      </a>
    </div>
  );
};

export default SidebarNavButtons;



