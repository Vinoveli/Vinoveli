import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Import the CSS file
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} // Apply conditional class
      >
        <KeyboardArrowUpIcon/>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
