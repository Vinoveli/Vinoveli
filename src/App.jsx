import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './navbar/Navbar';
import History from './MainPage/HistoryOf/History';
import MainPortfolioSarajishvili from './MainPage/MainPortfolio-Sarajishvili/MainPortfolio';
import MainPortfolioMarnaveli from './MainPage/MainPortfolio-Marnaveli/MainPortfolio-Marnaveli';
import ScrollToTopButton from './ScrollTopButton/ScrollTopButton';
import ProductsMain from './MainPage/ProductsMain/ProductsMain';
import ProductsDisplay from './MainPage/ProductsDisplay/ProductsDisplay';
import TwoBackgrounds from './TwoBackground/TwoBackgrounds';
import PartnersMain from './PartnersMain/PartnersMain';
import Footer from './Footer/Footer';
import Sarajishvili from './MainPage/Sarajishvili/Sarajishvili';
import Marnaveli from './Marnaveli/Marnaveli';
import ScrollTop from './ScrollTop';
import ProductSeparate from './ProductSeparate/ProductSeparate';
import AboutUs from './AboutUs/AboutUs';
import Partnerspage from './PartnersPage/PartnersPage';
import HistoryPage from './HistoryPage/HistoryPage';
import Distributor from './Distributors/Distributor';
import AgeVerificationPopup from './AgeVerif/AgeVerification';
import HomePage from './HomePage/Homepage';

const App = () => {
  const historyRef = useRef(null);
  const portfolioRef = useRef(null);
  const productsRef = useRef(null);
  const distributionRef = useRef(null);
  const footerRef = useRef(null);

  // Check cookie on initial load
  const [isPopupVisible, setPopupVisible] = useState(() => {
    return !Cookies.get('isOver18'); // true if cookie is not set, false if set
  });

  const [homeScrollPosition, setHomeScrollPosition] = useState(0);

  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current.pathname !== location.pathname) {
      if (prevLocation.current.pathname === '/') {
        // Save scroll position when navigating away from home page
        setHomeScrollPosition(window.scrollY);
      }

      if (location.pathname === '/') {
        // Scroll restoration is handled in HomePage component
      } else {
        // Scroll to top when navigating to a new route
        window.scrollTo(0, 0);
      }

      prevLocation.current = location;
    }
  }, [location]);

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const targetPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 400; // Duration in milliseconds (adjust as needed)
      let startTime = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c/2)*t*t + b;
        t--;
        return (-c/2)*(t*(t-2)-1) + b;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  // If the popup is still visible (user not verified), render ONLY the popup
  if (isPopupVisible) {
    return <AgeVerificationPopup onClose={handlePopupClose} />;
  }

  // User is verified, render the entire application
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        historyRef={historyRef}
        portfolioRef={portfolioRef}
        productsRef={productsRef}
        distributionRef={distributionRef}
        footerRef={footerRef}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              homeScrollPosition={homeScrollPosition}
              historyRef={historyRef}
              portfolioRef={portfolioRef}
              productsRef={productsRef}
              distributionRef={distributionRef}
              footerRef={footerRef}
            />
          }
        />
        <Route path="/sarajishvili" element={<Sarajishvili />} />
        <Route path="/marnaveli" element={<Marnaveli />} />
        <Route path="/product/:productId" element={<ProductSeparate />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partner/:partnerId" element={<Partnerspage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/distributor/:statename" element={<Distributor />} />
        {/* Add a catch-all route or a 404 page if needed */}
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </>
  );
};

// Wrap App component with Router 
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
