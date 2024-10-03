import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import MainBackground from './MainPage/MainBackground/MainBackground';
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


const App = () => {
  const historyRef = useRef(null);
  const portfolioRef = useRef(null);
  const productsRef = useRef(null);
  const distributionRef = useRef(null);
  const footerRef = useRef(null);  // Ref for the footer/contact section
  const [isPopupVisible, setPopupVisible] = useState(true); // State to manage popup visibility

  const handlePopupClose = () => {
    setPopupVisible(false); // Hide the popup when "Yes" is clicked
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
        {isPopupVisible && <AgeVerificationPopup onClose={handlePopupClose} />}

      <ScrollTop />
      <div>
        <Navbar
          scrollToSection={scrollToSection}
          historyRef={historyRef}
          portfolioRef={portfolioRef}
          productsRef={productsRef}
          distributionRef={distributionRef}
          footerRef={footerRef}  // Pass the footer ref
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainBackground />
                <div ref={historyRef}>
                  <History />
                </div>
                <div ref={portfolioRef}>
                  <MainPortfolioMarnaveli />
                </div>
                <MainPortfolioSarajishvili />
                <div ref={productsRef}>
                  <ProductsMain />
                </div>
                <ProductsDisplay />
                <div ref={distributionRef}>
                  <TwoBackgrounds />
                </div>
                <PartnersMain />
                <div ref={footerRef}> {/* Footer reference */}
                </div>
              </>
            }
          />
          <Route path="/sarajishvili" element={<Sarajishvili />} />
          <Route path="/marnaveli" element={<Marnaveli />} />
          <Route path="/product/:productId" element={<ProductSeparate />} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/partner/:partnerId" element={<Partnerspage/>}/>
          <Route path="/history" element={<HistoryPage/>}/>
          <Route path="/distributor/:statename" element={<Distributor />} /> {/* Add this route */}
        </Routes>
        <ScrollToTopButton />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
