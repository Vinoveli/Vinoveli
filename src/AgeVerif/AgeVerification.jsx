import React, { useState, useEffect } from 'react';
import './AgeVerification.css'; // Import CSS for styling
import pic from '../assets/mainentrance.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Cookies from 'js-cookie'; // Import js-cookie




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
    Cookies.set('isOver18', 'true', { expires: 1 }); // Set the cookie for 30 days
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      onClose(); // Close the popup after fade-out
    }, 500); // Match this duration with the CSS transition duration
  };

  const handleNoClick = () => {
    navigate(-1); // Go back to the previous page
  };


  return (
    <div className={`age-popup-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="age-popup-content">
        <img src={pic} alt="Background" className="age-popup-image" />
        <div className="age-overlay-text">
          <h1>Are you under 21?</h1>
          <div className="age-button-container">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button> {/* Use handleNoClick here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
