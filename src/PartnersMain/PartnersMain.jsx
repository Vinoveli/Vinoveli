import React from 'react';
import './PartnersMain.css'; // We will use a CSS file for styling
import MsWalker from '../assets/UntitledDesign.png';
import partner2 from '../assets/logo-transparent-gold@4x.png';
import partner3 from '../assets/partner3.png';
import newMsWalker from '../assets/new-logo.png';

const PartnersMain = () => {
  return (
    <>
      <div className='White-Background'>
        <div className="Partner-background-container">
          <div className="Partner-overlay">
            <p>PARTNERS</p>
            <div className='Partners-Partners'>
              <a href="/partner/1">
                <img src={newMsWalker} alt="Ms. Walker" />
              </a>
              <a href="/partner/2">
                <img src={partner2} alt="Partner 2" />
              </a>
              <a href="/partner/3">
                <img src={partner3} alt="Partner 3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersMain;
