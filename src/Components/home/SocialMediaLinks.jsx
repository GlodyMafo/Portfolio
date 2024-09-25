import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <div className="icons">
        <a href="https://web.facebook.com/p/MAFO-K-GLODI-100067189136344/?locale=fr_FR&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://github.com/GlodyMafo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/mafokis_official243/?hl=fr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
