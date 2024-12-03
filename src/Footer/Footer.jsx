import React from 'react';
import './Footer.css';
import logo from '../assets/Emblem-White.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <img src={logo} alt="Logo" className="footer-logoImage" />

        <div className="footer-right">
          <h1>CONTACT</h1>
          <p style={{ marginTop: '2rem' }}>+1 (857) 272-5099</p>
          <p>+1 (617) 877-0301</p>
          <p>Info@vinoveli.com</p>
          <p>33 Broad St, Boston, MA 02109</p>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Uncomment the following block if you want to include these links */}
        {/* 
        <div className="footer-bottom-left">
          <a href="https://www.otcwines.com/">Old Town Cellars</a>
          <a href="https://mswalker.com">MS Walker</a>
          <a href="https://affinitybrandsus.com">Affinity</a>
        </div> 
        */}
        <div className="footer-bottom-right">
          <p>© 2024 VINOVELI</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
