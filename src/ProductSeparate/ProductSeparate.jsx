import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductSeparate.css';
import Saperavi from '../assets/Saperavi.png';
import Rkatsiteli from '../assets/Rkatsiteli.png';
import TechSheets from '../assets/TechSheets.pdf';
import Sarajishvili1941 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-1941.jpg'
import Sarajishvili1953 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-8.jpg'
import Sarajishvili1955 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-9.jpg'
import Sarajishvili1956 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-10.jpg'
import Sarajishvili1957 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-11.jpg'
import Sarajishvili1958 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-12.jpg'
import Sarajishvili1959 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-13.jpg'
import Sarajishvili1960 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-14.jpg'
import Sarajishvili1964 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-15.jpg'
import Sarajishvili1968 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-16.jpg'
import Sarajishvili1969 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-17.jpg'
import Sarajishvili1970 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-18.jpg'
import Sarajishvili1974 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-19.jpg'
import Sarajishvili1973 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-20.jpg'
import Sarajishvili1976 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-21.jpg'
import Sarajishvili1977 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-22.jpg'
import Sarajishvili1979 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-23.jpg'
import Sarajishvili1980 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-24.jpg'
import Sarajishvili1946 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-25.jpg'
import Sarajishvili1947 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-26.jpg'
import Sarajishvili1949 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-27.jpg'
import Sarajishvili1950 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-28.jpg'
import Sarajishvili1952 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-29.jpg'
import RkatsiteliOak from '../assets/Rkatsiteli_Oak.png'
import Kisi_Qvevri from '../assets/Kisi_Qvevri.png'
import Kindzmarauli from '../assets/Kindzmarauli.png'
import Rkatsiteli_Qvevri from '../assets/Rkatsiteli_Qvevri.png'
import Saperavi_Oak from '../assets/Saperavi_Oak.png'
import trilogy from '../assets/sarajishviliWine/trilogy.jpg'
import Saperavi_Qvevri from '../assets/Saperavi_Qvevri.png'
import VS from '../assets/sarajishviliWine/VS.jpg'
import VSOP from '../assets/sarajishviliWine/VSOP.jpg'
import XO from '../assets/sarajishviliWine/XO.jpg'
import Saperavipdf from '../assets/saperavi.pdf'
import SaperaviOakpdf from '../assets/saperavi-oak.pdf'
import RkatsiteliOakpdf from '../assets/rkatsiteli-oak.pdf'
import Rkatsitelipdf from '../assets/rkatsiteli.pdf'
import KisiKhikhvipdf from '../assets/Kisi-khikhvi.pdf'
import Kindzmaraulipdf from '../assets/kindzmarauli.pdf'




const productsData = {
  rkatsitelioak: {
    title: 'Rkatsiteli Oak',
    image: RkatsiteliOak,
    text: [
      'Dry White Wine',
      'Aged in Oak',
      '700ml',
      'Marnaveli',
    ],
    pdf: RkatsiteliOakpdf,
  },
  kisikhikhvi: {
    title: 'Kisi Khikhvi',
    image: Kisi_Qvevri,
    text: [
      'Dry Amber Wine',
      'Qvevri Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: KisiKhikhvipdf,
  },
  kindzmarauli: {
    title: 'Kindzmarauli',
    image: Kindzmarauli,
    text: [
      'Semi-Sweet Red Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: Kindzmaraulipdf,
  },
  rkatsiteli: {
    title: 'Rkatsiteli',
    image: Rkatsiteli,
    text: [
      'Dry White Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: Rkatsitelipdf,
  },
  rkatsiteliqvevri: {
    title: 'Rkatsiteli Qvevri',
    image: Rkatsiteli_Qvevri,
    text: [
      'Dry Amber Wine',
      'Qvevri Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: TechSheets,
  },
  saperavi: {
    title: 'Saperavi',
    image: Saperavi,
    text: [
      'Dry Red Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: Saperavipdf,
  },
  saperavioak: {
    title: 'Saperavi Oak',
    image: Saperavi_Oak,
    text: [
      'Dry Red Wine',
      'Aged in Oak',
      '700ml',
      'Marnaveli',
    ],
    pdf: SaperaviOakpdf,
  },
  saperaviqvevri: {
    title: 'Saperavi Qvevri',
    image: Saperavi_Qvevri,
    text: [
      'Dry Red Wine',
      'Qvevri Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: TechSheets,
  },
  VS: {
    title: 'VS',
    image: VS,
    text: [
      'Line 2 for Saperavi',
      'Line 3 for Saperavi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
    VSOP: {
    title: 'VSOP',
    image: VSOP,
    text: [
      'Line 2 for Saperavi',
      'Line 3 for Saperavi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },  XO: {
    title: 'XO',
    image: XO,
    text: [
      'Line 2 for Saperavi',
      'Line 3 for Saperavi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  trilogy: {
    title: 'trilogy',
    image: trilogy,
    text: [
      'Line 2 for Saperavi',
      'Line 3 for Saperavi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },

 
  sarajishvili1941: {
    title: 'Sarajishvili 1941',
    image: Sarajishvili1941,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1953: {
    title: 'Sarajishvili 1953',
    image: Sarajishvili1953,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1955: {
    title: 'Sarajishvili 1955',
    image: Sarajishvili1955,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1956: {
    title: 'Sarajishvili 1956',
    image: Sarajishvili1956,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1957: {
    title: 'Sarajishvili 1957',
    image: Sarajishvili1957,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1958: {
    title: 'Sarajishvili 1958',
    image: Sarajishvili1958,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1959: {
    title: 'Sarajishvili 1959',
    image: Sarajishvili1959,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1960: {
    title: 'Sarajishvili 1960',
    image: Sarajishvili1960,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1964: {
    title: 'Sarajishvili 1964',
    image: Sarajishvili1964,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1968: {
    title: 'Sarajishvili 1968',
    image: Sarajishvili1968,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1969: {
    title: 'Sarajishvili 1969',
    image: Sarajishvili1969,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1970: {
    title: 'Sarajishvili 1970',
    image: Sarajishvili1970,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1974: {
    title: 'Sarajishvili 1974',
    image: Sarajishvili1974,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1973: {
    title: 'Sarajishvili 1973',
    image: Sarajishvili1973,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1976: {
    title: 'Sarajishvili 1976',
    image: Sarajishvili1976,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1977: {
    title: 'Sarajishvili 1977',
    image: Sarajishvili1977,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1979: {
    title: 'Sarajishvili 1979',
    image: Sarajishvili1979,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1980: {
    title: 'Sarajishvili 1980',
    image: Sarajishvili1980,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1946: {
    title: 'Sarajishvili 1946',
    image: Sarajishvili1946,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1947: {
    title: 'Sarajishvili 1947',
    image: Sarajishvili1947,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1949: {
    title: 'Sarajishvili 1949',
    image: Sarajishvili1949,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1950: {
    title: 'Sarajishvili 1950',
    image: Sarajishvili1950,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
  sarajishvili1952: {
    title: 'Sarajishvili 1952',
    image: Sarajishvili1952,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    pdf: TechSheets,
  },
};



const ProductSeparate = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = productsData[productId]; // Use product ID to find data

  return (
    <div className="container">
      <div className="image-section">
        <img
          src={product.image}
          alt={productId}
          className="image"
        />
      </div>
      <div className="text-section">
        {/* Display the title above the text */}
        <h1>{product.title}</h1>
        {product.text.map((line, index) => (
          <p 
            key={index} 
            style={{ color: line.includes('700ml') ? 'rgba(114, 51, 38, 1)' : 'inherit' }}
          >
            {line}
          </p>
        ))}
        {/* Add the download link for the specific product PDF below the text */}
        <div className="download-section">
          <a href={product.pdf} download={`${productId}Details.pdf`}>
            Download {product.title} Product Details PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSeparate;
