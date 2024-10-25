import React from 'react';
import './HistoryPage.css';
import flowingImage from '../assets/design.png';
import clayVessel from '../assets/qvevri.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import picture1 from '../assets/qvevri-1.png';
import picture2 from '../assets/qvevri-2.png';
import picture3 from '../assets/qvevri-3.png';
import picture5 from '../assets/qvevri-5.jpg';
import picture6 from '../assets/qvevri-6.jpg';
import picture8 from '../assets/qvevri-8.jpg';
import picture9 from '../assets/qvevri-9.jpg';

const HistoryPage = () => {

    const images = [
        picture5,
        picture6,
        picture8,
        picture9,

      ];

  const repeatedImages = [...images, ...images]; 
    
  return (
    <>
      <div className='main-content-container'>
        <h1>Georgia - The Cradle Of Wine
        </h1>
        <p>
        Georgian wine has a rich history that dates back over 8,000 years, making Georgia one of the oldest wine-producing regions in the world. Archaeological evidence from the Neolithic period, such as ancient wine jars and grape seeds, suggests that the tradition of winemaking began in the fertile valleys of the South Caucasus. The unique method of fermenting grape juice in qvevris (large clay vessels buried underground) has been preserved over millennia and is still practiced today. Throughout its history, Georgian wine has been deeply intertwined with the country's culture, religion, and economy, surviving invasions, Soviet domination, and modern globalization. Today, Georgia is renowned for its diverse range of indigenous grape varieties and its commitment to traditional winemaking techniques, contributing to its reputation as the "Cradle of Wine."
</p>
        
      </div>
      <div className="main-vessel-image" style={{ paddingBottom:'10px'}}>
          <img src={clayVessel} alt="Qvevri" />
          <p style={{width:'120px', marginLeft:'100px', color:'rgba(114, 51, 38, 1)'}}>The earliest  wine Jar
          (8000 - 6000 BC)</p>
        </div>
      <div className="main-scrolling-image-container">
        <div className="main-scrolling-image">
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
          <img src={flowingImage} alt="Scrolling" />
        </div>
      </div>

      <div className='main-content-container'>
      <h1>
The Legacy of Georgian Wine: Past Meets Present Today
</h1>
<p>
Today, Georgia is home to over 500 native grape varieties, with around 45 used in commercial winemaking. Notable examples include Saperavi, a bold red with strong tannins, and Rkatsiteli, a versatile white used in both dry and amber wines. Georgian wines are produced in two main styles: European, using modern techniques, and traditional qvevri, which highlights the unique character of indigenous grapes.

In recent years, Georgia's wine industry has gained global recognition, blending ancient methods with a renewed focus on quality. As a leader in the natural wine movement, Georgia appeals to those seeking authenticity and tradition. Its winemaking, deeply rooted in history and culture, continues to thrive, carrying forward an 8,000-year-old legacy.
        </p>

        
      </div>

      <div className="main-carousel-wrapper">
      <div className="main-carousel">
        {repeatedImages.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="picture" />
        ))}
      </div>
    </div>
    </>
  );
};

export default HistoryPage;
