import React, {useState, useEffect} from 'react';
import logo from '../assets/marnaveli-logo-transparent.png'
import './HistoryMarnaveli.css'
import flowingImage from '../assets/design.png';

const HistoryMarnaveli = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      <div className='centered-container-sarajishvili' >
        <img src={logo} style={{
          width:'182px',
          marginTop:'5rem'
        }} />
        <h1 style={{fontSize:'35px', textAlign:'left'}}>Marnaveli - Combining Tradition with Modern Craft
        </h1>
       <p style={{ textAlign:'left', fontSize:'20px'}} className='history-marnaveli-p'>
       For over two decades, Marnaveli has been producing premium wines that blend Georgia’s ancient winemaking traditions with the best of modern techniques. By selecting only the finest grape varieties, Marnaveli ensures that every bottle reflects the unique qualities of Georgia’s diverse terroir. The winery is equipped with advanced technology that meets international standards, enabling the production of wines that uphold both heritage and innovation.

Each year, Marnaveli crafts wines with great attention to detail, balancing centuries-old Georgian practices with modern winemaking methods. This approach allows the winery to maintain the authenticity of Georgian wine while delivering exceptional quality and consistency. Marnaveli’s wines, celebrated for their character and craftsmanship, are aged and refined in optimal conditions, ensuring that the final product meets the highest expectations.

Today, Marnaveli’s wines are widely available in countries like Italy, France, Germany, Ukraine, Belarus, Russia the U.S., and China, earning international recognition for their distinctive style and quality. By staying true to its roots and embracing modern advancements, Marnaveli continues to showcase the best of Georgian winemaking on the world stage.
       </p>
      </div>
      {!isSmallScreen && (
        <div className="main-scrolling-image-container">
          <div className="main-scrolling-image">
            {[...Array(50)].map((_, index) => (
              <img key={index} src={flowingImage} alt="Scrolling" />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryMarnaveli;
