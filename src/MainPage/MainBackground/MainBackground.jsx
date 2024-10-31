import React, { useRef, useEffect } from 'react';
import './MainBackground.css';
import backgroundImage from '../../assets/Background.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const MainBackground = () => {
  const scrollIntervalRef = useRef(null);
  const scrollListenerRef = useRef(null);
  const touchListenerRef = useRef(null);

  const startScrolling = () => {
    // Clear any existing scroll interval
    if (scrollIntervalRef.current) {
      cancelAnimationFrame(scrollIntervalRef.current);
    }

    // Clear any existing scroll or touch event listener
    if (scrollListenerRef.current) {
      window.removeEventListener('wheel', scrollListenerRef.current);
    }
    if (touchListenerRef.current) {
      window.removeEventListener('touchstart', touchListenerRef.current);
      window.removeEventListener('touchmove', touchListenerRef.current);
    }

    const scrollStep = 5; // Reduced step for slower scrolling
    const scrollSpeed = 30; // Increased delay for slower scrolling

    const scroll = () => {
      window.scrollBy(0, scrollStep);
      if (window.innerHeight + window.scrollY < document.body.scrollHeight) {
        scrollIntervalRef.current = requestAnimationFrame(scroll);
      }
    };

    scroll();

    // Add event listener to stop auto-scrolling on mouse wheel or touch
    scrollListenerRef.current = () => {
      if (scrollIntervalRef.current) {
        cancelAnimationFrame(scrollIntervalRef.current);
      }
      window.removeEventListener('wheel', scrollListenerRef.current);
    };
    window.addEventListener('wheel', scrollListenerRef.current);

    // Add touch listeners for mobile devices
    touchListenerRef.current = () => {
      if (scrollIntervalRef.current) {
        cancelAnimationFrame(scrollIntervalRef.current);
      }
      window.removeEventListener('touchstart', touchListenerRef.current);
      window.removeEventListener('touchmove', touchListenerRef.current);
    };
    window.addEventListener('touchstart', touchListenerRef.current);
    window.addEventListener('touchmove', touchListenerRef.current);
  };

  const handleScroll = () => {
    startScrolling();
  };

  // Clean up event listeners on component unmount
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        cancelAnimationFrame(scrollIntervalRef.current);
      }
      if (scrollListenerRef.current) {
        window.removeEventListener('wheel', scrollListenerRef.current);
      }
      if (touchListenerRef.current) {
        window.removeEventListener('touchstart', touchListenerRef.current);
        window.removeEventListener('touchmove', touchListenerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        className="background-sections"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="mainbackground-title">DISCOVER THE WORLD OF GEORGIAN WINE AND BRANDY</h1>
        </div>
        <div className="content">
          <p className="description-mainbackground">Vinoveli introduces the rich heritage of Georgian wine and brandy to the U.S. market. With a deep commitment to tradition and masterful craftsmanship, we offer an exclusive selection of wines and spirits that embody the essence of Georgia. Each bottle tells a story of authenticity, passion, and centuries-old winemaking expertise. </p>
          <button className="cta-button" onClick={handleScroll}>EXPLORE <KeyboardDoubleArrowDownIcon className='double-arrow'/></button>
        </div>
      </div>
    </div>
  );
};

export default MainBackground;
