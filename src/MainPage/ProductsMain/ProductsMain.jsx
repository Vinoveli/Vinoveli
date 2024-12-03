import React, { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ProductsMain.css'; // Add custom styles here
import Kindzmarauli from '../../assets/marnaveliWine/Kindzmarauli.png'
import Kisi_Qvevri from '../../assets/marnaveliWine/Kisi_Qvevri.png'
import Rkatsiteli from '../../assets/marnaveliWine/Rkatsiteli.png'
import Rkatsiteli_Oak from '../../assets/marnaveliWine/Rkatsiteli_Oak.png'
import Rkatsiteli_Qvevri from '../../assets/marnaveliWine/Rkatsiteli_Qvevri.png'
import Saperavi from '../../assets/marnaveliWine/Saperavi.png'
import Saperavi_Oak from '../../assets/marnaveliWine/Saperavi_Oak.png'
import Saperavi_Qvevri from '../../assets/marnaveliWine/Saperavi_Qvevri.png'
import georgiaMap from '../../assets/GE.svg'




const ProductsMain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        Kindzmarauli,
        Kisi_Qvevri,
        Rkatsiteli,
        Rkatsiteli_Oak,
        Rkatsiteli_Qvevri,
        Saperavi,
        Saperavi_Oak,
        Saperavi_Qvevri
    ];



    const productNames = [
        "Kindzmarauli",
        "Kisi Qvevri",
        "Rkatsiteli",
        "Rkatsiteli Oak",
        "Rkatsiteli Qvevri",
        "Saperavi",
        "Saperavi Oak",
        "Saperavi Qvevri"
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

    // Auto-scroll to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 10000); // Change the image every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <>

<p className="Product-title">Products</p>

      <div className="productsName-product-display-container">
        {/* Left Side - Text Section */}
        <div className="productsName-product-text">
        <img className="overlay-image" src={georgiaMap} alt="Overlay Logo" />

        </div>

        {/* Right Side - Carousel Section */}
        <div className="productsName-carousel-container">
            
            <button className="productsName-carousel-arrow productsName-left-arrow" onClick={prevImage}><ArrowBackIcon/></button>
            <h2 className="Title">{productNames[currentIndex]}</h2>
            <h2 className="Title Title2">Marnaveli</h2>
            <div className="productsName-carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Product ${index + 1}`} />
                ))}
            </div>
           
            <button className="productsName-carousel-arrow productsName-right-arrow" onClick={nextImage}><ArrowForwardIcon/></button>
        </div>

      </div>
      </>
    );
};
  
export default ProductsMain;
