import React, { useState, useEffect } from 'react';
import './AgeVerification.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Cookies from 'js-cookie'; // Import js-cookie
import Emblem from '../assets/Emblem-Escarlet.png';
import BackgroundImage from '../assets/Leader.svg'; // Import the background image

const AgeVerificationPopup = ({ onClose }) => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Check if the cookie exists to determine if the popup should be shown
    const isOver18 = Cookies.get('isOver18');
    if (isOver18) {
      onClose(); // Close the popup if the cookie is found
    }
  }, [onClose]);

  const handleYesClick = () => {
    Cookies.set('isOver18', 'true', { expires: 1 }); // Set the cookie for 1 day
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      onClose(); // Close the popup after fade-out
    }, 500); // Match this duration with the CSS transition duration
  };

  const handleNoClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      className={`age-popup-overlay ${isFading ? 'fade-out' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="age-popup-content">
        <div className="age-overlay-text">
          {/* <img src={Emblem} alt="Emblem" /> */}
          <h1>Are you 21?</h1>
          <div className="age-button-container">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
