import React from 'react';
import './TwoBackgrounds.css';
import picture1 from '../assets/Sarajishvili_17.jpg';
import picture2 from '../assets/new-york-buildings-skyscrapers.jpg';
import usaPic from '../assets/usa.png'
import logo from '../assets/Emblem-Escarlet.png'
import { useNavigate } from 'react-router-dom';


const TwoBackgrounds = () => {
    const navigate = useNavigate();

    const handleStateChange = (event) => {
        const state = event.target.value;
        if (state !== 'select') {
            navigate(`/distributor/${state}`);
        }
    };

    return (
        <>
        <div className="image-container">
            <div className="overlay-content">
                <div className="left-content">
                    <h1>Distribution</h1>
                    <p>Vinoveli operates across seven states, partnering with major stores and fine dining restaurants to bring our exceptional Georgian wines to a diverse audience. Our strategic collaborations ensure that our premium selections are readily available, offering a taste of Georgia’s rich winemaking heritage in key markets across the country.</p>
                     <select onChange={handleStateChange} defaultValue="select">
                            <option value="select" disabled>Select State</option>
                            <option value="massachusetts">Massachusetts</option>
                            <option value="new-york">New York</option>
                            <option value="new-jersey">New Jersey</option>
                            <option value="rhode-island">Rhode Island</option>
                            <option value="illinois">Illinois</option>
                            <option value="virginia">Virginia</option>
                            <option value="maryland">Maryland</option>
                            <option value="washington-dc">Washington D.C</option>
                        </select>
                </div>
                <div className="right-content">
                    <img
                        src={usaPic}
                        alt="Extra Image"
                        className="right-image"
                    />
                </div>
            </div>
            <img
                src={picture2}
                alt="Background Image"
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
                alt="Background Image"
                className="background-image"
            />
        </div>
        </>
    );
};

export default TwoBackgrounds;
