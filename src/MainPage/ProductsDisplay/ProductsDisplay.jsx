import React, { useState } from "react";
import "./ProductsDisplay.css"; // Create your styles here
import RkatsiteliOak from '../../assets/Rkatsiteli_Oak.png';
import Kindzmarauli from '../../assets/Kindzmarauli.png';
import Kisi_Qvevri from '../../assets/Kisi_Qvevri.png';
import Rkatsiteli from '../../assets/Rkatsiteli.png';
import Rkatsiteli_Qvevri from '../../assets/Rkatsiteli_Qvevri.png';
import Saperavi from '../../assets/Saperavi.png';
import Saperavi_Oak from '../../assets/Saperavi_Oak.png';
import Saperavi_Qvevri from '../../assets/Saperavi_Qvevri.png';
import SarajishviliVintage1970 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-25.jpg';
import Tikhari from '../../assets/sarajishviliWine/Tikhari.jpg';
import trilogy from '../../assets/sarajishviliWine/trilogy.jpg';
import VS from '../../assets/sarajishviliWine/VS.jpg';
import VSOP from '../../assets/sarajishviliWine/VSOP.jpg';
import XO from '../../assets/sarajishviliWine/XO.jpg';

const products = [
  { id: 9, name: "Sarajishvili Vintage 1970", category: "Brandy", image: SarajishviliVintage1970, description: "Dry White Wine", size: '700ml' },
  { id: 10, name: "Tikhari", category: "Brandy", image: Tikhari, description: "Dry White Wine", size: '700ml' },
  { id: 11, name: "Trilogy", category: "Brandy", image: trilogy, description: "Dry White Wine", size: '700ml' },
  { id: 12, name: "VS", category: "Brandy", image: VS, description: "Dry White Wine", size: '700ml' },
  { id: 13, name: "VSOP", category: "Brandy", image: VSOP, description: "Dry White Wine", size: '700ml' },
  { id: 14, name: "XO", category: "Brandy", image: XO, description: "Dry White Wine", size: '700ml' },

  { id: 1, name: "Rkatsiteli Oak", category: "Wine", image: RkatsiteliOak, description: "Dry White Wine", size: '700ml' },
  { id: 2, name: "Kindzmarauli", category: "Wine", image: Kindzmarauli, description: "Semi-Sweet Red Wine", size: '700ml' },
  { id: 3, name: "Kisi Qvevri", category: "Wine", image: Kisi_Qvevri, description: "Dry Amber Wine", size: '700ml' },
  { id: 4, name: "Rkatsiteli", category: "Wine", image: Rkatsiteli, description: "Dry White Wine", size: '700ml' },
  { id: 5, name: "Rkatsiteli Qvevri", category: "Wine", image: Rkatsiteli_Qvevri, description: "Dry white Wine", size: '700ml' },
  { id: 6, name: "Saperavi", category: "Wine", image: Saperavi, description: "Dry Red Wine", size: '700ml' },
  { id: 7, name: "Saperavi Oak", category: "Wine", image: Saperavi_Oak, description: "Dry Red Wine", size: '700ml' },
  { id: 8, name: "Saperavi Qvevri", category: "Wine", image: Saperavi_Qvevri, description: "Dry Red Wine", size: '700ml' },
];

const ProductsDisplay = () => {
  const [filter, setFilter] = useState("Wine");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  // Define a custom order for Brandy products
  const customBrandyOrder = ['Tikhari', 'VS','VSOP', 'XO',  'Sarajishvili Vintage 1970','Trilogy',  ];

  // Sort Brandy products in the desired order
  if (filter === "Brandy") {
    filteredProducts.sort((a, b) => {
      return customBrandyOrder.indexOf(a.name) - customBrandyOrder.indexOf(b.name);
    });
  }

  return (
    <div className="product-list-container">
      {/* Filter Buttons */}
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

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
