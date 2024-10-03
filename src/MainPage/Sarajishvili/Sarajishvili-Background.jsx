

import React, { useRef, useEffect } from 'react';
import './MainBackground.css';
import backgroundImage from '../../assets/Sarajishvili_23.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SarajishviliBackground = () => {
  

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

export default SarajishviliBackground;
