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
                Georgian wine has a
                 rich history that dates
                  back over 8,000 years, making
                   Georgia one of the oldest wine-producing
                    regions in the world. Archaeological
                     evidence from the Neolithic period,
                      such as ancient wine jars and grape
                       seeds, suggests that the tradition of
                        winemaking began in the fertile valleys
                         of the South Caucasus. The unique
                          method of fermenting grape juice
                           in qvevris (large clay vessels buried
                            underground) has been preserved over
                             millennia and is still practiced today.
                              Throughout its history, Georgian wine
                               has been deeply intertwined with the
                                country's culture, religion, and
                                 economy, surviving invasions, Soviet
                                  domination, 
                and modern globalization. 
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
