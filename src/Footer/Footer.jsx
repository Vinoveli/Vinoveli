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
          <p style={{ marginTop: '2rem' }}>+995591172323</p>
          <p>contact@vinoveli.com</p>
          <p style={{ marginTop: '2rem' }}>Heinrich-Roller str 24</p>
          <p>10405, Berlin, Germany</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">LINKEDIN</a>
        </div>
        <div className="footer-bottom-right">
            <p>© 2024 VINOVELI </p>
            <p>ALL RIGHTS RESERVED</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
