import React, { useState, useEffect } from 'react';
import './TwoBackgrounds.css';
import picture1 from '../assets/Sarajishvili_17.jpg';
import picture2 from '../assets/new-york-buildings-skyscrapers.jpg';
import usaPic from '../assets/usa.png';
import logo from '../assets/Emblem-Escarlet.png';
import { useNavigate } from 'react-router-dom';

// Import images for each state
import massachusettsImg from '../assets/Massachusetts.png';
import newYorkImg from '../assets/NewYork.png';
import newJerseyImg from '../assets/New-Jersey.png';
import rhodeIslandImg from '../assets/rhode-island.png';
import illinoisImg from '../assets/Illinois.png';
import virginiaImg from '../assets/Virginia.png';
import marylandImg from '../assets/Maryland.png';
import washingtonDcImg from '../assets/US-Washington-D.C.png';

const TwoBackgrounds = () => {
    const navigate = useNavigate();

    // State variables
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredStateImage, setHoveredStateImage] = useState(massachusettsImg);

    // State options with associated images
    const stateOptions = [
        { name: 'Massachusetts', value: 'massachusetts', image: massachusettsImg },
        { name: 'New York', value: 'new-york', image: newYorkImg },
        { name: 'New Jersey', value: 'new-jersey', image: newJerseyImg },
        { name: 'Rhode Island', value: 'rhode-island', image: rhodeIslandImg },
        { name: 'Illinois', value: 'illinois', image: illinoisImg },
        { name: 'Virginia', value: 'virginia', image: virginiaImg },
        { name: 'Maryland', value: 'maryland', image: marylandImg },
        { name: 'Washington D.C', value: 'washington-dc', image: washingtonDcImg },
    ];

    // Reset image when dropdown is closed
    useEffect(() => {
        if (!isDropdownOpen) {
            setHoveredStateImage(massachusettsImg);
        }
    }, [isDropdownOpen]);

    return (
        <>
            <div className="image-container">
                <div className="overlay-content">
                    <div className="left-content">
                        <h1>Distribution</h1>
                        <p>
                            Vinoveli operates across seven states, partnering with major stores and fine dining restaurants to bring our exceptional Georgian wines to a diverse audience. Our strategic collaborations ensure that our premium selections are readily available, offering a taste of Georgia’s rich winemaking heritage in key markets across the country.
                        </p>
                        {/* Custom Dropdown */}
                        <div className="custom-dropdown">
                            <div
                                className="dropdown-header"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Select State
                            </div>
                            {isDropdownOpen && (
                                <div className="dropdown-options">
                                    {stateOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className="dropdown-option"
                                            onMouseEnter={() => setHoveredStateImage(option.image)}
                                            onMouseLeave={() => setHoveredStateImage(massachusettsImg)}
                                            onClick={() => {
                                                setIsDropdownOpen(false);
                                                navigate(`/distributor/${option.value}`);
                                            }}
                                        >
                                            {option.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right-content">
                        <img
                            src={hoveredStateImage}
                            alt="State Image"
                            className="right-image"
                        />
                    </div>
                </div>
                <img
                    src={picture2}
                    alt="Background"
                    className="background-image"
                />
            </div>
            <div className="image-container2">
                <div className="overlay-content-bottom">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <h1>About Vinoveli</h1>
                    <p>
                        Founded in 2020, Vinoveli is a leading importer dedicated to introducing the rich winemaking traditions of Georgia to the U.S. market. We work closely with top distributors, retailers, and hospitality partners to bring high-quality Georgian wines and spirits to key regions. Our mission is to bridge Georgia’s ancient heritage with today’s wine industry, creating lasting connections and expanding the presence of Georgian products in the U.S.
                    </p>
                </div>
                <img
                    src={picture1}
                    alt="Background"
                    className="background-image"
                />
            </div>
        </>
    );
};

export default TwoBackgrounds;
