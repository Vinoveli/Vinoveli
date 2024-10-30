// ProductsDisplay.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./ProductsDisplay.css";
import RkatsiteliOak from '../../assets/Rkatsiteli_Oak.png';
import Kindzmarauli from '../../assets/Kindzmarauli.png';
import Kisi_Qvevri from '../../assets/Kisi_Qvevri.png';
import Rkatsiteli from '../../assets/Rkatsiteli.png';
import Rkatsiteli_Qvevri from '../../assets/Rkatsiteli_Qvevri.png';
import Saperavi from '../../assets/Saperavi.png';
import Saperavi_Oak from '../../assets/Saperavi_Oak.png';
import Saperavi_Qvevri from '../../assets/Saperavi_Qvevri.png';
import SarajishviliVintage1970 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-18.jpg';
import Tikhari from '../../assets/sarajishviliWine/Tikhari.jpg';
import trilogy from '../../assets/sarajishviliWine/trilogy.jpg';
import VS from '../../assets/sarajishviliWine/VS.jpg';
import VSOP from '../../assets/sarajishviliWine/VSOP.jpg';
import XO from '../../assets/sarajishviliWine/XO.jpg';
import SarajishviliVintage from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-1941.jpg';
import SarajishviliVintage1 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-8.jpg';
import SarajishviliVintage2 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-9.jpg';
import SarajishviliVintage3 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-10.jpg';
import SarajishviliVintage4 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-11.jpg';
import SarajishviliVintage5 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-12.jpg';
import SarajishviliVintage6 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-13.jpg';
import SarajishviliVintage7 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-14.jpg';
import SarajishviliVintage8 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-15.jpg';
import SarajishviliVintage9 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-16.jpg';
import SarajishviliVintage10 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-17.jpg';
import SarajishviliVintage12 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-19.jpg';
import SarajishviliVintage13 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-20.jpg';
import SarajishviliVintage14 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-21.jpg';
import SarajishviliVintage15 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-22.jpg';
import SarajishviliVintage16 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-23.jpg';
import SarajishviliVintage17 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-24.jpg';
import SarajishviliVintage18 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-25.jpg';
const products = [
  // Brandy products (IDs 9-14)
  { id: 25, name: "Sarajishvili Vintage 1970", category: "Brandy", image: SarajishviliVintage1970, description: "Dry White Wine", size: '700ml', link: "product/sarajishvili1970" },
  { id: 9, name: "Tikhari", category: "Brandy", image: Tikhari, description: "Dry White Wine", size: '700ml', link: "product/tikhari" },
  { id: 10, name: "Trilogy", category: "Brandy", image: trilogy, description: "Dry White Wine", size: '700ml', link: "product/trilogy" },
  { id: 11, name: "VS", category: "Brandy", image: VS, description: "Dry White Wine", size: '700ml', link: "product/vs" },
  { id: 12, name: "VSOP", category: "Brandy", image: VSOP, description: "Dry White Wine", size: '700ml', link: "product/vsop" },
  { id: 13, name: "XO", category: "Brandy", image: XO, description: "Dry White Wine", size: '700ml', link: "product/xo" },
  { id: 14, name: "Sarajishvili 1941", category: "Brandy", image: SarajishviliVintage, description: "Brandy", size: '700ml', link: "product/sarajishvili1941" },
  { id: 15, name: "Sarajishvili 1953", category: "Brandy", image: SarajishviliVintage1, description: "Brandy", size: '700ml', link: "product/sarajishvili1953" },
  { id: 16, name: "Sarajishvili 1955", category: "Brandy", image: SarajishviliVintage2, description: "Brandy", size: '700ml', link: "product/sarajishvili1955" },
  { id: 17, name: "Sarajishvili 1956", category: "Brandy", image: SarajishviliVintage3, description: "Brandy", size: '700ml', link: "product/sarajishvili1956" },
  { id: 18, name: "Sarajishvili 1957", category: "Brandy", image: SarajishviliVintage4, description: "Brandy", size: '700ml', link: "product/sarajishvili1957" },
  { id: 19, name: "Sarajishvili 1958", category: "Brandy", image: SarajishviliVintage5, description: "Brandy", size: '700ml', link: "product/sarajishvili1958" },
  { id: 20, name: "Sarajishvili 1959", category: "Brandy", image: SarajishviliVintage6, description: "Brandy", size: '700ml', link: "product/sarajishvili1959" },
  { id: 21, name: "Sarajishvili 1960", category: "Brandy", image: SarajishviliVintage7, description: "Brandy", size: '700ml', link: "product/sarajishvili1960" },
  { id: 22, name: "Sarajishvili 1964", category: "Brandy", image: SarajishviliVintage8, description: "Brandy", size: '700ml', link: "product/sarajishvili1964" },
  { id: 23, name: "Sarajishvili 1968", category: "Brandy", image: SarajishviliVintage9, description: "Brandy", size: '700ml', link: "product/sarajishvili1968" },
  { id: 24, name: "Sarajishvili 1969", category: "Brandy", image: SarajishviliVintage10, description: "Brandy", size: '700ml', link: "product/sarajishvili1969" },
  { id: 26, name: "Sarajishvili 1971", category: "Brandy", image: SarajishviliVintage12, description: "Brandy", size: '700ml', link: "product/sarajishvili1971" },
  { id: 27, name: "Sarajishvili 1973", category: "Brandy", image: SarajishviliVintage13, description: "Brandy", size: '700ml', link: "product/sarajishvili1973" },
  { id: 28, name: "Sarajishvili 1976", category: "Brandy", image: SarajishviliVintage14, description: "Brandy", size: '700ml', link: "product/sarajishvili1976" },
  { id: 29, name: "Sarajishvili 1977", category: "Brandy", image: SarajishviliVintage15, description: "Brandy", size: '700ml', link: "product/sarajishvili1977" },
  { id: 30, name: "Sarajishvili 1979", category: "Brandy", image: SarajishviliVintage16, description: "Brandy", size: '700ml', link: "product/sarajishvili1979" },
  { id: 31, name: "Sarajishvili 1980", category: "Brandy", image: SarajishviliVintage17, description: "Brandy", size: '700ml', link: "product/sarajishvili1980" },
  { id: 32, name: "Sarajishvili 1946", category: "Brandy", image: SarajishviliVintage18, description: "Brandy", size: '700ml', link: "product/sarajishvili1946" },
  // Wine products (IDs 1-8)
  { id: 4, name: "Rkatsiteli Oak", category: "Wine", image: RkatsiteliOak, description: "Dry White Wine", size: '700ml', link: "product/rkatsitelioak" },
  { id: 1, name: "Kindzmarauli", category: "Wine", image: Kindzmarauli, description: "Semi-Sweet Red Wine", size: '700ml', link: "product/kindzmarauli" },
  { id: 5, name: "Kisi Qvevri", category: "Wine", image: Kisi_Qvevri, description: "Dry Amber Wine", size: '700ml', link: "product/kisikhikhvi" },
  { id: 2, name: "Rkatsiteli", category: "Wine", image: Rkatsiteli, description: "Dry White Wine", size: '700ml', link: "product/rkatsiteli" },
  { id: 7, name: "Rkatsiteli Qvevri", category: "Wine", image: Rkatsiteli_Qvevri, description: "Dry white Wine", size: '700ml', link: "product/rkatsiteliqvevri" },
  { id: 3, name: "Saperavi", category: "Wine", image: Saperavi, description: "Dry Red Wine", size: '700ml', link: "product/saperavi" },
  { id: 6, name: "Saperavi Oak", category: "Wine", image: Saperavi_Oak, description: "Dry Red Wine • Aged in Oak", size: '700ml', link: "product/saperavioak" },
  { id: 8, name: "Saperavi Qvevri", category: "Wine", image: Saperavi_Qvevri, description: "Dry Red Wine • Qvevri", size: '700ml', link: "product/saperaviqvevri" },
];

const ProductsDisplay = () => {
  // Set the initial filter to "Wine"
  const [filter, setFilter] = useState("Wine");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter products based on the selected category
  const filteredProducts = products
    .filter(product => product.category === filter)
    // Sort the products by their IDs
    .sort((a, b) => a.id - b.id);

  return (
    <div className="product-list-container">
      <div className="filters">
        <button
          onClick={() => handleFilterChange("Wine")}
          className={filter === "Wine" ? "active" : ""}
        >
          Wine
        </button>
        <button
          onClick={() => handleFilterChange("Brandy")}
          className={filter === "Brandy" ? "active" : ""}
        >
          Brandy
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/${product.link}`}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.size}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
