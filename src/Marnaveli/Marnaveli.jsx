import React, { useRef, useEffect } from 'react';
import MarnaveliProducts from './MarnaveliProducts';
import MarnaveliBottleBackgrounds from './Marnaveli-Bottle-Backgrounds';
import HistoryMarnaveli from './History-Marnaveli';
import MarnaveliBackground from './MarnaveliBackground'

const Marnaveli = () => {
  

    return (
     <>
     <MarnaveliBackground/>
        <HistoryMarnaveli/>
        <MarnaveliProducts/>
        <MarnaveliBottleBackgrounds/>
     </>
    );
  };
  
  export default Marnaveli;
  