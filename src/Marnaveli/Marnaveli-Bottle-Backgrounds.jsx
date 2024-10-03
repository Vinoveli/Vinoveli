import React from "react";
import "./MarnaveliBottleBackgrounds.css";
import picture1 from '../assets/marnaveli-69.jpg';
import picture2 from '../assets/marnaveli-420.jpg';
import picture3 from '../assets/Marnaveli-Carousel-2.jpg';
import picture4 from '../assets/marnaveli-5.jpg';
import picture5 from '../assets/picture-5.jpg';
import picture6 from '../assets/picture-6.jpg';
import picture7 from '../assets/picture-7.jpg';
import picture8 from '../assets/picture-8.jpg';
import picture9 from '../assets/picture-9.jpg';
import picture10 from '../assets/picture-10.jpg';
import picture11 from '../assets/picture-11.jpg';
import picture12 from '../assets/picture-12.jpg';
import picture13 from '../assets/picture-13.jpg';
import picture14 from '../assets/picture-14.jpg';

const MarnaveliBottleBackgrounds = () => {
  const images = [
    // picture1,
    // picture2,
    // picture3,
    // picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
    picture11,
    picture12,
    picture13,
    picture14,

  ];

  return (
    <div className="marnaveli-carousel-wrapper">
      <div className="marnaveli-carousel">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="marnaveli-picture" />
        ))}
        {images.map((img, index) => (
          <img key={`duplicate-${index}`} src={img} alt={`Image ${index}`} className="marnaveli-picture" />
        ))}
      </div>
    </div>
  );
};

export default MarnaveliBottleBackgrounds;
