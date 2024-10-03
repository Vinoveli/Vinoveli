

import React from 'react';
import './MainBackground.css';
import backgroundImage from '../assets/marnaveli-5.jpg';

const MarnaveliBackground = () => {
  

  return (
    <div>
      <div
        className="background-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
     
      </div>
    </div>
  );
};

export default MarnaveliBackground;
