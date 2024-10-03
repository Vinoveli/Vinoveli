import React, { useRef, useEffect } from 'react';
import SarajishviliBackground from './Sarajishvili-Background';
import HistorySarajishvili from './History-Sarajishvili';
import SarajishviliProducts from './SarajishviliProducts';
import SarajishviliBottleBackgrounds from './Sarajishvili-Bottle-Backgrounds';

const Sarajishvili = () => {
  

    return (
     <>
     <SarajishviliBackground/>
        <HistorySarajishvili/>
        <SarajishviliProducts/>
        <SarajishviliBottleBackgrounds/>
     </>
    );
  };
  
  export default Sarajishvili;
  