import React from 'react';
import './Distributor.css';
import { useParams } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { GrLocationPin } from "react-icons/gr";

import backgroundImage from '../assets/new-york-buildings-skyscrapers.jpg';
import maBackground from '../assets/MA.jpeg';
import riBackground from '../assets/Rhode-Island.webp';
import msWalker from '../assets/UntitledDesign.png';
import affinity from '../assets/partner3.png';
import washington from '../assets/WashingtonDC.jpeg'
const Distributor = () => {
    const { statename } = useParams();

    const backgroundImages = {
        massachusetts: maBackground,
        'new-york': backgroundImage,
        'new-jersey': backgroundImage,
        'rhode-island': riBackground,
        'washington': washington,
        default: backgroundImage,
    };

    const distributorInfo = {
        massachusetts: [
            {
                title: "Ms Walker",
                content: "975 University Avenue Norwood, MA 02062",
                phone: '617.776.6700',
                logo: msWalker,
                website: 'mswalker.com',
            },
        ],
        'new-york': [
            {
                title: "MsWalker",
                content: "270 North Avenue. Suite 709 New Rochelle, NY 10801",
                logo: msWalker,
                phone: '617.776.6700',
                website: 'mswalker.com',
            },
            {
                title: "Second Company",
                content: "370 Atlantic Ave, Freeport, NY 11520",
                logo: affinity,
                email: 'info@affinitybrandsus.com',
                website: 'affinitybrandsus.com/',
                phone: '+1 (516) 385-1041',
            },
        ],
        'new-jersey': [
            {
                title: "New Jersey Distributor",
                content: "270 North Avenue. Suite 709 New Rochelle, NY 10801",
                phone: '914-235-5352',
                logo: affinity,
                website: 'mswalker.com',
                
            },
            {
                title: "Second Company",
                content: "370 Atlantic Ave, Freeport, NY 11520",
                logo: msWalker,
                email: 'info@affinitybrandsus.com',
                website: 'affinitybrandsus.com/',
                phone: '+1 (516) 385-1041',
            },
            
        ],
        'washington': [{
            title: 'Washington distributor'
        }],
        'rhode-island': [
            {
                title: "Rhode Island Distributor",
                content: "16 Commercial Way Warren, RI 02885",
                phone: '401.247.0646',
                logo: affinity,
                website: 'mswalker.com',
            },

        
         
        ],
    };

    const distributors = distributorInfo[statename] || [
        {
            title: "Distributor Not Found",
            content: "The requested state distributor information is not available.",
            logo: null,
        },
    ];

    const currentBackground = backgroundImages[statename] || backgroundImages.default;

    const formatStateName = (state) => {
        if (!state) return "";
        return state
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <div
                className="background-section"
                style={{ backgroundImage: `url(${currentBackground})` }}
            >
                <div className="overlay-text-distributor">{formatStateName(statename)}</div>
            </div>
            <div className="distributor-container">
                {distributors.map((distributor, index) => (
                    <div key={index} className="distributor-details">
                        {distributor.logo && (
                            <img
                                src={distributor.logo}
                                alt={`${distributor.title} Logo`}
                                className="distributors-logo"
                            />
                        )}
                        {/* <h1 className="distributor-title">{distributor.title}</h1> */}
                        <p className="distributor-content">
                            <GrLocationPin /> {distributor.content}
                        </p>
                        {distributor.phone && (
                            <p className="distributor-content">
                                <FiPhone /> {distributor.phone}
                            </p>
                        )}
                        {distributor.email && (
                            <p className="distributor-content">
                                <MdOutlineMailOutline /> {distributor.email}
                            </p>
                        )}
                        {distributor.website && (
                            <p className="distributor-content">
                                <CiGlobe /> {distributor.website}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Distributor;
