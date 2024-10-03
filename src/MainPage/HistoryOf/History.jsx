import React from 'react';
import './History.css';
import rollingImage from '../../assets/design.png';
import qvevri from '../../assets/qvevri.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const History = () => {
  return (
    <>
      <div className='centered-container'>
        <h1>History of</h1>
        <h2>Georgian Wine</h2>
        <p>
          Georgian wine has a rich history that dates back over 8,000 years,
          making Georgia one of the oldest wine-producing regions in the world.
          Archaeological evidence from the Neolithic period, such as ancient
          wine jars and grape seeds, suggests that the tradition of winemaking
          began in the fertile valleys of the South Caucasus. The unique method
          of fermenting grape juice in qvevris (large clay vessels buried
          underground) has been preserved over millennia and is still practiced
          today. Throughout its history, Georgian wine has been deeply
          intertwined with the country's culture, religion, and economy,
          surviving invasions, Soviet domination, and modern globalization.
          Today, Georgia is renowned for its diverse range of indigenous grape
          varieties and its commitment to traditional winemaking techniques,
          contributing to its reputation as the "Cradle of Wine."
        </p>
        <Link to="/history">
          <button className="see-more-button">See More</button>
        </Link>
      </div>
      {/* <div className="qvevri-image">
          <img src={qvevri} alt="Qvevri" />
        </div> */}
      <div className="scrolling-image-container">
      
        <div className="scrolling-image">
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
          <img src={rollingImage} alt="Scrolling" />
        </div>

      </div>
    </>
  );
};

export default History;
