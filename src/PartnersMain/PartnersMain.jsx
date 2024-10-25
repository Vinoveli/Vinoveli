import React from 'react';
import './PartnersMain.css'; // We will use a CSS file for styling
import MsWalker from '../assets/UntitledDesign.png';
import partner2 from '../assets/new-logo-new.png';
import partner4 from '../assets/new-logo3.png';
import partner3 from '../assets/partner3.png';

import newMsWalker from '../assets/new-logo.png';

const PartnersMain = () => {
  return (
    <div className='White-Background'>
      <div className="Partner-background-container">
        <div className="Partner-overlay">
          <h2>PARTNERS</h2>
          <div className='Partners-Partners'>
            {/* First Row of Partners */}
            <div className='Partners-row'>
              <a href="/partner/1" className="partner-link">
                <img src={newMsWalker} alt="Ms. Walker" className="partner-logo" />
              </a>
              <a href="/partner/2" className="partner-link">
                <img src={partner4} alt="Partner 2" className="partner-logo" />
              </a>
              <a href="/partner/3" className="partner-link">
                <img src={partner3} alt="Partner 3" className="partner-logo" />
              </a>
            </div>
            {/* Second Row with Partner2 */}
            {/* <div className='Partners-row single'>
              <a href="/partner/4" className="partner-link">
                <img src={partner2} alt="Partner 4" className="partner-logo" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMain;
