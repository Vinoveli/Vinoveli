import React from 'react';
import AboutUsPictures from './AboutUsCarousel';
const AboutUs = () => {
  return (
    <>
      <div style={{ textAlign: 'left', width:'80%', margin:'auto' }}>
        <h1
          style={{
            fontSize: '50px',
            color:'rgba(114, 51, 38, 1)',
            fontFamily: '"STIX Two Text", serif',
            fontWeight:'200',
            marginTop:'5rem'
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: '25px',
            fontFamily: '"STIX Two Text", serif',
            fontWeight:'200',
            marginTop:'5rem'
          }}
        >
          Vinoveli is a leading importing company founded in 2020, with a mission to bring the rich winemaking heritage of Georgia to the U.S. market. By partnering with top distributors, retailers, and hospitality groups, we’ve built a strong network that helps introduce and elevate Georgian wines and spirits.

Vinoveli has played a pivotal role in growing the Georgian wine category in the U.S. market. Through a series of tastings, educational seminars, and promotional events, we’ve worked closely with industry professionals and consumers alike, sharing the unique stories and heritage behind Georgian wines. Our dedication to educating the market has helped raise awareness and appreciation for Georgian wine, making it a sought-after category in key regions.

Join us at Vinoveli as we continue to bridge Georgia’s ancient winemaking traditions with modern business practices, fostering lasting partnerships and driving growth across the U.S.
        </p>
      </div>

      <AboutUsPictures/>
      
     
    </>
  );
};

export default AboutUs;
