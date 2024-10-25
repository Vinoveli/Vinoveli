import React from 'react';
import MarnaveliBottleBackgrounds from '../Marnaveli/Marnaveli-Bottle-Backgrounds';

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
        Georgian wine has a rich history that dates back over 8,000 years, making Georgia one of the oldest wine-producing regions in the world. Archaeological evidence from the Neolithic period, such as ancient wine jars and grape seeds, suggests that the tradition of winemaking began in the fertile valleys of the South Caucasus. The unique method of fermenting grape juice in qvevris (large clay vessels buried underground) has been preserved over millennia and is still practiced today. Throughout its history, Georgian wine has been deeply intertwined with the country's culture, religion, and economy, surviving invasions, Soviet domination, and modern globalization.
        </p>
      </div>

      <MarnaveliBottleBackgrounds/>
      
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
          Team
        </h1>

        <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '20px' }}>
          {/* Card 1 */}
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/200"
              alt="Placeholder 1"
              style={{ width: '250px', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '10px' }}>
             <p style={{color:'rgba(114, 51, 38, 1)',}}>Name: Mark Johnson</p>

              <p>CEO</p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/200"
              alt="Placeholder 2"
              style={{ width: '250px', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '10px' }}>
              <p style={{color:'rgba(114, 51, 38, 1)',}}>Name: Mark Johnson</p>

              <p>CFO</p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ width: '250px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/200"
              alt="Placeholder 3"
              style={{ width: '250px', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '10px' }}>
              <p style={{color:'rgba(114, 51, 38, 1)',}}>Name: Mark Johnson</p>
              <p>MEGVINE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
