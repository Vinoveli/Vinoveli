import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import RkatsiteliOak from '../assets/Rkatsiteli_Oak.png';
import Kindzmarauli from '../assets/Kindzmarauli.png';
import Kisi_Qvevri from '../assets/Kisi_Qvevri.png';
import Rkatsiteli from '../assets/Rkatsiteli.png';
import Rkatsiteli_Qvevri from '../assets/Rkatsiteli_Qvevri.png';
import Saperavi from '../assets/Saperavi.png';
import Saperavi_Oak from '../assets/Saperavi_Oak.png';
import Saperavi_Qvevri from '../assets/Saperavi_Qvevri.png';
import './ProductsDisplayMarnaveli.css';

const products = [
  { id: 1, name: "Rkatsiteli Oak", category: "Oak Line", image: RkatsiteliOak, description: "Dry White Wine • Aged in Oak", size: '700ml', link: "product/rkatsitelioak" },
  { id: 2, name: "Kisi Khikhvi", category: "Qvevri Line", image: Kisi_Qvevri, description: "Dry Amber Wine", size: '700ml', link: "product/kisikhikhvi" },
  { id: 3, name: "Kindzmarauli", category: "Classic Line", image: Kindzmarauli, description: "Semi-Sweet Red Wine", size: '700ml', link: "product/kindzmarauli" },
  { id: 4, name: "Rkatsiteli", category: "Classic Line", image: Rkatsiteli, description: "Dry White Wine", size: '700ml', link: "product/rkatsiteli" },
  { id: 5, name: "Rkatsiteli Qvevri", category: "Qvevri Line", image: Rkatsiteli_Qvevri, description: "Dry Amber Wine • Qvevri", size: '700ml', link: "product/rkatsiteliqvevri" },
  { id: 6, name: "Saperavi", category: "Classic Line", image: Saperavi, description: "Dry Red Wine", size: '700ml', link: "product/saperavi" },
  { id: 7, name: "Saperavi Oak", category: "Oak Line", image: Saperavi_Oak, description: "Dry Red Wine • Aged in Oak", size: '700ml', link: "product/saperavioak" },
  { id: 8, name: "Saperavi Qvevri", category: "Qvevri Line", image: Saperavi_Qvevri, description: "Dry Red Wine • Qvevri", size: '700ml', link: "product/saperaviqvevri" },
];

const MarnaveliProducts = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <>
   
    <div className="product-list-container-sarajishvili" style={{marginTop:"18rem"}}>
      <h1>Products</h1>
      <div className="filters-sarajishvili">
        <button
          onClick={() => handleFilterChange("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("Classic Line")}
          className={filter === "Classic Line" ? "active" : ""}
        >
          Classic Line
        </button>
        <button
          onClick={() => handleFilterChange("Oak Line")}
          className={filter === "Oak Line" ? "active" : ""}
        >
          Oak Line
        </button>
        <button
          onClick={() => handleFilterChange("Qvevri Line")}
          className={filter === "Qvevri Line" ? "active" : ""}
        >
          Qvevri Line
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/${product.link}`}> {/* Link to the dynamic URL */}
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

    </>
  );
};

export default MarnaveliProducts;
