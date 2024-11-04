import React, {useEffect, useState} from 'react';
import rollingImage from '../../assets/design.png';
import qvevri from '../../assets/qvevri.png';
import logo from '../../assets/sarajishvili_transparent.png'
import './HistorySarajishvili.css'
import flowingImage from '../../assets/design.png';

const HistorySarajishvili = () => {
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
      <div className='centered-container-sarajishvili'>
        <img src={logo} style={{
          width:'182px',
          marginTop:'5rem'
        }} />

        <h1 style={{fontSize:'45px', textAlign:'left', fontFamily: '"Carattere", cursive'}}>Sarajishvili - A Legacy Of Excellence Since 1884 </h1>
       <p style={{ textAlign:'left', fontSize:'18px',}}>
     
The history of Sarajishvili dates back to 1884 when David Sarajishvili established the first classical wine brandy-making technology in Georgia. After France, Georgia was the first country in the Russian Empire to officially produce and call it “cognac.” The factory, located in Tbilisi, produced its first product in 1887.

Sarajishvili quickly expanded across the Russian Empire and Europe, opening distilleries and warehouses. The company offered a wide range of products, including cognac, vodka, wine, liqueur, rum, and absinthe. Its first specialized store, or "boutique," opened in Tbilisi in 1903.


       </p>
       <p style={{ textAlign:'left', fontSize:'18px',}}>
       In 1909, France passed a decree restricting the use of the term "cognac" to the Charente region, prompting Sarajishvili to change its labeling to "wine brandy" while maintaining the same production methods. Between 1889 and 1912, Sarajishvili brandy won gold medals at exhibitions in Paris, Brussels, and Chicago. In 1913, the company gained the prestigious title of “Provider to the Russian Emperor’s House.”

During the Soviet period, the factory was nationalized and renamed the "Tbilisi Cognac Factory." Despite changes in ownership, it continued producing high-quality spirits. The current factory, built between 1939 and 1954, housed unique reserves from various Georgian regions.

In 1994, the Bubuteishvili family acquired the company, restoring its original name and gaining ownership of historical reserves, including spirits distilled under Sarajishvili’s supervision in 1893 and 1905. Today, Sarajishvili continues to innovate, blending tradition with modern technologies.

Sarajishvili products have won over 250 international awards, including 6 super grand prizes and 155 gold medals. The brand is now exported to around 20 countries across four continents, recognized for its creativity, professionalism, and dedication to progress.
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

export default HistorySarajishvili;
