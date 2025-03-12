import React from 'react';
import './PartnersMain.css'; // Ensure this file includes styles
import newMsWalker from '../assets/new-logo.png';
import partner2 from '../assets/new-logo-new.png';
import partner4 from '../assets/new-logo3.png';
import partner3 from '../assets/partner3.png';

const PartnersMain = () => {
  return (
    <div className='White-Background'>
      <div className="Partner-background-container">
        <div className="Partner-overlay">
          <h2>PARTNERS</h2>
          <div className='Partners-Partners'>
            {/* First Row of Partners */}
            <div className='Partners-row'>
              <a href="https://mswalker.com" className="partner-link partner-box">
                <img src={newMsWalker} alt="Ms. Walker" className="partner-logo" />
              </a>
              <div className="partner-box">
                <img src={partner4} alt="Partner 2" className="partner-logo" />
              </div>
              <a href="https://affinitybrandsus.com" className="partner-link partner-box">
                <img src={partner3} alt="Partner 3" className="partner-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMain;
