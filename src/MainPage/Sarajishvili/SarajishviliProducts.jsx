// SarajishviliProducts.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link
import './ProductsDisplaySarajishvili.css';
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
import SarajishviliVintage11 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-18.jpg';
import SarajishviliVintage12 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-19.jpg';
import SarajishviliVintage13 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-20.jpg';
import SarajishviliVintage14 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-21.jpg';
import SarajishviliVintage15 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-22.jpg';
import SarajishviliVintage16 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-23.jpg';
import SarajishviliVintage17 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-24.jpg';
import SarajishviliVintage18 from '../../assets/sarajishviliWine/Sarajishvili-Vintage-B-25.jpg';
import Tikhari from '../../assets/sarajishviliWine/Tikhari.jpg';
import trilogy from '../../assets/sarajishviliWine/trilogy.jpg';
import VS from '../../assets/sarajishviliWine/VS.jpg';
import VSOP from '../../assets/sarajishviliWine/VSOP.jpg';
import XO from '../../assets/sarajishviliWine/XO.jpg';

const products = [
  { id: 1, name: "Tikhari", category: "Classic Line", image: Tikhari, description: "Classic Line", size: '700ml', link: "product/tikhari" },
  { id: 2, name: "Sarajishvili 1941", category: "Vintage Line", image: SarajishviliVintage, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1941", year: 1941 },
  { id: 3, name: "Sarajishvili 1953", category: "Vintage Line", image: SarajishviliVintage1, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1953", year: 1953 },
  { id: 4, name: "Sarajishvili 1955", category: "Vintage Line", image: SarajishviliVintage2, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1955", year: 1955 },
  { id: 5, name: "Sarajishvili 1956", category: "Vintage Line", image: SarajishviliVintage3, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1956", year: 1956 },
  { id: 6, name: "Sarajishvili 1957", category: "Vintage Line", image: SarajishviliVintage4, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1957", year: 1957 },
  { id: 7, name: "Sarajishvili 1958", category: "Vintage Line", image: SarajishviliVintage5, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1958", year: 1958 },
  { id: 8, name: "Sarajishvili 1959", category: "Vintage Line", image: SarajishviliVintage6, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1959", year: 1959 },
  { id: 9, name: "Sarajishvili 1960", category: "Vintage Line", image: SarajishviliVintage7, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1960", year: 1960 },
  { id: 10, name: "Sarajishvili 1964", category: "Vintage Line", image: SarajishviliVintage8, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1964", year: 1964 },
  { id: 11, name: "Sarajishvili 1968", category: "Vintage Line", image: SarajishviliVintage9, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1968", year: 1968 },
  { id: 12, name: "Sarajishvili 1969", category: "Vintage Line", image: SarajishviliVintage10, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1969", year: 1969 },
  { id: 13, name: "Sarajishvili 1970", category: "Vintage Line", image: SarajishviliVintage11, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1970", year: 1970 },
  { id: 14, name: "Sarajishvili 1971", category: "Vintage Line", image: SarajishviliVintage12, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1971", year: 1971 },
  { id: 15, name: "Sarajishvili 1973", category: "Vintage Line", image: SarajishviliVintage13, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1973", year: 1973 },
  { id: 16, name: "Sarajishvili 1976", category: "Vintage Line", image: SarajishviliVintage14, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1976", year: 1976 },
  { id: 17, name: "Sarajishvili 1977", category: "Vintage Line", image: SarajishviliVintage15, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1977", year: 1977 },
  { id: 18, name: "Sarajishvili 1979", category: "Vintage Line", image: SarajishviliVintage16, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1979", year: 1979 },
  { id: 19, name: "Sarajishvili 1980", category: "Vintage Line", image: SarajishviliVintage17, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1980", year: 1980 },
  { id: 20, name: "Sarajishvili 1946", category: "Vintage Line", image: SarajishviliVintage18, description: "Vintage Line", size: '700ml', link: "product/sarajishvili1946", year: 1946 },
  { id: 21, name: "Trilogy", category: "Unique Line", image: trilogy, description: "Unique Line", size: '700ml', link: "product/trilogy" },
  { id: 24, name: "XO", category: "Classic Line", image: XO, description: "Classic Line", size: '700ml', link: "product/xo" },
  { id: 22, name: "VS", category: "Classic Line", image: VS, description: "Classic Line", size: '700ml', link: "product/vs" },
  { id: 23, name: "VSOP", category: "Classic Line", image: VSOP, description: "Classic Line", size: '700ml', link: "product/vsop" }
];

const SarajishviliProducts = () => {
  const [filter, setFilter] = useState("All");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter products based on the selected category
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  // Sort products based on year or custom order
  filteredProducts.sort((a, b) => {
    if (filter === "Vintage Line" || filter === "All") {
      // If both products have a year, sort by year
      if (a.year && b.year) {
        return a.year - b.year;
      }
      // Products without a year come after those with a year
      else if (a.year) {
        return -1;
      } else if (b.year) {
        return 1;
      } else {
        return 0;
      }
    } else if (filter === "Classic Line") {
      // Define custom order for Classic Line
      const customOrder = ['Tikhari', 'XO', 'VS', 'VSOP'];
      return customOrder.indexOf(a.name) - customOrder.indexOf(b.name);
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="product-list-container-sarajishvili" style={{ marginTop: isSmallScreen ? "40rem" : "5rem" }}>
      <h1>Products</h1>
      <div className="filters-sarajishvili">
        <button onClick={() => handleFilterChange("All")} className={filter === "All" ? "active" : ""}>All</button>
        <button onClick={() => handleFilterChange("Classic Line")} className={filter === "Classic Line" ? "active" : ""}>Classic Line</button>
        <button onClick={() => handleFilterChange("Vintage Line")} className={filter === "Vintage Line" ? "active" : ""}>Vintage Line</button>
        <button onClick={() => handleFilterChange("Unique Line")} className={filter === "Unique Line" ? "active" : ""}>Unique Line</button>
      </div>

      {/* Product Grid */}
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

export default SarajishviliProducts;
