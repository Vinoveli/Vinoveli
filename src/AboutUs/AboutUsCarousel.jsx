import React from "react";
import picture1 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_126-min.jpg'
import picture2 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_139-min.jpg'
import picture3 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_231-min.jpg'
import picture4 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_237-min.jpg'
import picture5 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_238-min.jpg'
import picture6 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_288-min.jpg'
import picture7 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_361-min.jpg'
import picture8 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_366-min.jpg'
import picture9 from '../assets/newsliders/compressjpeg/C&P_Georgia-KatyAndrascikPhoto_380-min.jpg'

const AboutUsPictures = () => {
  const images = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
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

export default AboutUsPictures;
