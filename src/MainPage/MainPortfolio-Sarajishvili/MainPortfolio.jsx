import React, { useState, useEffect } from "react";
import Sarajishvili from '../../assets/Sarajishvili_20.jpg';
import sarajishvili1 from '../../assets/exploreproductssarajishvili/Sarajishvili_19.jpg';
import sarajishvili2 from '../../assets/exploreproductssarajishvili/Sarajishvili_22.jpg';
import sarajishvili3 from '../../assets/exploreproductssarajishvili/ui.jpg';
import { useNavigate } from "react-router-dom";
import SarajishviliLogo from '../../assets/sarajishvili.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './MainPortfolio.css'; // Add custom styles here

const MainPortfolioSarajishvili = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate(); // Create a navigate function for redirecting

    const images = [
        Sarajishvili,
        sarajishvili1,
        sarajishvili2,
        sarajishvili3,
    ];
  
    const nextImage = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };
      
    const prevImage = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    // Reset the transitioning state once the transition is done
    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Transition time should match the CSS duration

        return () => clearTimeout(transitionTimeout);
    }, [currentIndex]);

    // Removed the auto-scroll useEffect hook

    return (
        <>
          <div className="mainPortfolio-product-display-container">

            {/* Left Side - Text Section */}
            <div className="mainPortfolio-product-text">
              <div className="mainPortfolio-logo">
                <img src={SarajishviliLogo} alt="Sarajishvili" />
              </div>
              <div className="mainPortfolio-description">
                <p>
                  In a country, where the wine production counts more 
                  than thousands of years, the first Georgian wine brandy appears only in 
                  19th century and is connected to David Sarajishvili name. David 
                  Sarajishvili’s biggest will and tireless effort resulted in creating 
                  the first Georgian wine brandy. Exactly this person established the 
                  first classic brandy making technology in Georgia and produced the 
                  cognac accordingly. The company was launched in 1884 and in about three 
                  years in 1887 - produced the first product.
                </p>
              </div>
              {/* <div className="mainPortfolio-explore-button">
                <button onClick={() => navigate("/sarajishvili")}>EXPLORE PRODUCTS</button>
              </div> */}
            </div>

            {/* Right Side - Carousel Section */}
            <div className="mainPortfolio-carousel-container">
                <button
                    className="mainPortfolio-carousel-arrow mainPortfolio-left-arrow"
                    onClick={prevImage}
                >
                    <ArrowBackIcon />
                </button>
                <div
                    className="mainPortfolio-carousel-images"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Product ${index + 1}`} />
                    ))}
                </div>
                <div className="mainPortfolio-carousel-indicators">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`mainPortfolio-indicator ${index === currentIndex ? "mainPortfolio-active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button
                    className="mainPortfolio-carousel-arrow mainPortfolio-right-arrow"
                    onClick={nextImage}
                >
                    <ArrowForwardIcon />
                </button>
            </div>
          </div>
        </>
    );
};
  
export default MainPortfolioSarajishvili;
