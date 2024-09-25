import React, { useState } from 'react';
import './Nav.css';
import { FaHome, FaUser, FaServicestack, FaFileAlt, FaFolderOpen, FaComment, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState(''); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavLinkClick = (section) => {
    setActive(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${section} not found.`);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1><span className="dot">G</span>lody<span className="dot">.</span></h1>
        </div>
        <div className="navbar-menu" onClick={toggleSidebar}>
          <div className={`navbar-hamburger ${isSidebarOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>
              <a
                href="#"
                className={`sidebar-link ${active === 'home' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('home')}
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`sidebar-link ${active === 'about' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('about')}
              >
                <FaUser /> About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`sidebar-link ${active === 'services' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('services')}
              >
                <FaServicestack /> Services
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`sidebar-link ${active === 'resume' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('resume')}
              >
                <FaFileAlt /> Resume
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`sidebar-link ${active === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('portfolio')}
              >
                <FaFolderOpen /> Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className={`sidebar-link ${active === 'testimonial' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('testimonial')}
              >
                <FaComment /> Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`sidebar-link ${active === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('contact')}
              >
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;


