import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks from react-router-dom
import './Navbar.css';
import logo from '../assets/Emblem-Escarlet.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon

const Navbar = ({ scrollToSection, historyRef, portfolioRef, productsRef, distributionRef, footerRef }) => {
  const [language, setLanguage] = useState('ENG');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Hook to navigate to a different route

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContactClick = () => {
    scrollToSection(footerRef); // Scroll to the footer when contact button is clicked
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleOverlayClick = (sectionRef) => {
    scrollToSection(sectionRef); // Scroll to the respective section
    setMenuOpen(false); // Close the overlay after clicking
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the root route
  };

  const isHomePage = location.pathname === '/'; // Check if the current route is /

  return (
    <nav className="navbar-nav">
      <div className="navbar-burgerIcon" onClick={toggleMenu}>
        <div className={`navbar-bar ${menuOpen ? 'navbar-open' : ''}`}></div>
        <div className={`navbar-bar ${menuOpen ? 'navbar-open' : ''}`}></div>
        <div className={`navbar-bar ${menuOpen ? 'navbar-open' : ''}`}></div>
      </div>

      {menuOpen && (
        <div className="navbar-closeButton" onClick={toggleMenu}>
          &times;
        </div>
      )}

      <div className={`navbar-menuOverlay ${menuOpen ? 'navbar-open' : ''}`}>
        <div className="navbar-languageSwitcher">
          <span 
            className={language === 'ENG' ? 'navbar-active' : ''} 
            onClick={() => changeLanguage('ENG')}
          >
            ENG
          </span> 
          / 
          <span 
            className={language === 'GEO' ? 'navbar-active' : ''} 
            onClick={() => changeLanguage('GEO')}
          >
            GEO
          </span>
        </div>
        {isHomePage ? (
          <ul className="navbar-navItemsOverlay">
            <li><a onClick={() => handleOverlayClick(historyRef)}>HISTORY</a></li>
            <li><a onClick={() => handleOverlayClick(portfolioRef)}>OUR BRANDS</a></li>
            <li><a onClick={() => handleOverlayClick(productsRef)}>PRODUCTS</a></li> {/* Scroll to ProductsDisplay */}
            <li><a onClick={() => handleOverlayClick(distributionRef)}>DISTRIBUTION</a></li> {/* Scroll to TwoBackgrounds */}
            <li><a href="/about-us">ABOUT US</a></li>
          </ul>
        ) : (
          <div className="navbar-backArrow" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} className="navbar-backIcon" /> Back to Home
          </div>
        )}
      </div>

      <ul className="navbar-navItems">
        {isHomePage ? (
          <>
            <li className="navbar-navItem"><a onClick={() => scrollToSection(historyRef)}>HISTORY</a></li>
            <li className="navbar-navItem"><a onClick={() => scrollToSection(portfolioRef)}>OUR BRANDS</a></li>
            <li className="navbar-navItem"><a onClick={() => handleOverlayClick(productsRef)}>PRODUCTS</a></li> {/* Scroll to ProductsDisplay */}
            <li className="navbar-navItem"><a onClick={() => handleOverlayClick(distributionRef)}>DISTRIBUTION</a></li> {/* Scroll to TwoBackgrounds */}
            <li className="navbar-navItem"><a href="/about-us">ABOUT US</a></li>
          </>
        ) : (
          <li className="navbar-backArrow" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} className="navbar-backIcon" /> Back to Home
          </li>
        )}
      </ul>

      <div className="navbar-logoContainer">
        <h1 className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logoImage" />
        </h1>
      </div>

      <div className="navbar-rightSide">
        {/* <div className="navbar-languageDropdown">
          <div className="navbar-languageButton" onClick={toggleDropdown}>
            {language} <span className="navbar-arrow">&#9662;</span>
          </div>
          {dropdownOpen && (
            <div className="navbar-dropdownMenu">
              <div className="navbar-dropdownItem" onClick={() => changeLanguage('ENG')}>ENG</div>
              <div className="navbar-dropdownItem" onClick={() => changeLanguage('GEO')}>GEO</div>
            </div>
          )}
        </div> */}
        <button className="navbar-contactButton" onClick={handleContactClick}>
          <a    className="navbar-contactLink">CONTACT</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
