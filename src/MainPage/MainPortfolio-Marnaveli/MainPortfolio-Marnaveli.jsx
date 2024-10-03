import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Sarajishvili from '../../assets/Sarajishvili.jpg'
import MarnaveliLogo from '../../assets/MARNAVELI.png'
import backgroundImage from '../../assets/Background.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './MainPortfolio-Marnaveli.css'; // Add custom styles here
import MarnaveliCarousel1 from '../../assets/Marnaveli-Carousel-1.jpg'
import MarnaveliCarousel3 from '../../assets/Marnaveli-Carousel-3.jpg'
import MarnaveliCarousel2 from '../../assets/Marnaveli-Carousel-2.jpg'
import MarnaveliCarousel4 from '../../assets/marnaveli-5.jpg'

const MainPortfolioMarnaveli = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate(); // Create a navigate function for redirecting

    const images = [
        MarnaveliCarousel1,
        MarnaveliCarousel2,
        MarnaveliCarousel3,
        MarnaveliCarousel4
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

    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 500); 

        return () => clearTimeout(transitionTimeout);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // Change the image every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <h1 className="Portfolio-title">Portfolio</h1>

            <div className="product-display-container">
                <div className="carousel-container">
                    <button className="carousel-arrow left-arrow" onClick={prevImage}>
                        <ArrowBackIcon />
                    </button>
                    <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Product ${index + 1}`} />
                        ))}
                    </div>
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="carousel-arrow right-arrow" onClick={nextImage}>
                        <ArrowForwardIcon />
                    </button>
                </div>

                {/* Left Side - Text Section */}
                <div className="product-text">
                    <div className="logo">
                        <img src={MarnaveliLogo} alt="Sarajishvili" style={{ width: '80px' }} />
                    </div>
                    <div className="description">
                        <p>
                            In a country, where the wine production counts more than thousands of years, the first 
                            Georgian wine brandy appears only in the 19th century and is connected to David Sarajishvili’s name...
                        </p>
                    </div>
                    <div className="explore-button">
                        <button onClick={() => navigate("/marnaveli")}>EXPLORE PRODUCTS</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPortfolioMarnaveli;
