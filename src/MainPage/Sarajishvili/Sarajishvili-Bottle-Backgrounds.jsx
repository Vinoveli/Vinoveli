import React from "react";
import "./SarajishviliBottleBackgrounds.css";
import picture1 from '../../assets/Sarajishvili_20.jpg';
import picture2 from '../../assets/Sarajishvili_23.jpg';
import picture3 from '../../assets/Sarajishvili_17.jpg';
import picture4 from '../../assets/Sarajishvili_22.jpg';

const SarajishviliBottleBackgrounds = () => {
  const images = [
    picture1,
    picture2,
    picture3,
    picture4
  ];

  // Duplicate images array to create infinite loop effect
  const repeatedImages = [...images, ...images]; 

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {repeatedImages.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="picture" />
        ))}
      </div>
    </div>
  );
};

export default SarajishviliBottleBackgrounds;
