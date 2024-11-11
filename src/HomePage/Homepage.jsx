// src/components/HomePage/HomePage.js

import React, { useEffect } from 'react';
import MainBackground from '../MainPage/MainBackground/MainBackground';
import History from '../MainPage/HistoryOf/History';
import MainPortfolioSarajishvili from '../MainPage/MainPortfolio-Sarajishvili/MainPortfolio';
import MainPortfolioMarnaveli from '../MainPage/MainPortfolio-Marnaveli/MainPortfolio-Marnaveli';
import ScrollReveal from '../ScrollReveal';
import ProductsMain from '../MainPage/ProductsMain/ProductsMain';
import ProductsDisplay from '../MainPage/ProductsDisplay/ProductsDisplay';
import TwoBackgrounds from '../TwoBackground/TwoBackgrounds';
import PartnersMain from '../PartnersMain/PartnersMain';
import Footer from '../Footer/Footer';

const HomePage = ({ homeScrollPosition, historyRef, portfolioRef, productsRef, distributionRef, footerRef }) => {
  useEffect(() => {
    // Restore scroll position after components have mounted
    window.scrollTo(0, homeScrollPosition);
  }, [homeScrollPosition]);

  return (
    <>
      <MainBackground />
      <ScrollReveal>
        <div ref={historyRef}>
          <History />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div ref={portfolioRef}>
          <MainPortfolioMarnaveli />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <MainPortfolioSarajishvili />
      </ScrollReveal>
      <ScrollReveal>
        <div ref={productsRef}>
          <ProductsMain />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <ProductsDisplay />
      </ScrollReveal>
      <ScrollReveal>
        <div ref={distributionRef}>
          <TwoBackgrounds />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <PartnersMain />
      </ScrollReveal>
      <div ref={footerRef}>
      </div>
    </>
  );
};

export default HomePage;
