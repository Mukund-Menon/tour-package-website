import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './search.css'
import delhi from '../img/delhi.jpg'
import RedFort from '../img/image14.jpeg'
import HumayunTomb from '../img/image15.jpeg'
import Alapuzha from '../img/image13.jpeg'
import Shreejagannathatemplepuri from '../img/image6.jpeg'
import BrihadeeswaraTemple from '../img/image7.jpeg'
import Charminar from '../img/image8.jpeg'
import sikkim from '../img/image9.jpeg'
import goa from '../img/image10.jpeg'
import mysorePalace from '../img/image11.jpeg'
import mahabodhiTemple from '../img/image12.jpeg'
import chittorgarhFort from '../img/image1.jpeg'
import konarkSunTemple from '../img/image2.jpeg'
import JatayuEarthCenter from '../img/image3.jpeg'

const destinations = [
    {
        id: 0,
        image: delhi,
        title: 'India Gate',
        location: 'New Delhi',
    },
    {
        id: 1,
        image: RedFort,
        title: 'Red Fort',
        location: 'New Delhi',
    },
    {
        id: 2,
        image: HumayunTomb,
        title: 'Humayun Tomb',
        location: 'New Delhi',
    },
    {
        id: 3,
        image: Alapuzha,
        title: 'Alapuzha',
        location: 'Kerala',
    },
    {
        id: 4,
        image: Shreejagannathatemplepuri,
        title: 'Shree Jagannatha Temple Puri',
        location: 'Odisha',
    },
    {
        id: 5,
        image: BrihadeeswaraTemple,
        title: 'Brihadeeswara Temple',
        location: 'Tamil Nadu',
    },
];


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(destinations);

    useEffect(() => {
        const searchData = searchTerm.toLowerCase();
        const filteredItems = destinations.filter(item =>
            item.title.toLowerCase().includes(searchData) || item.location.toLowerCase().includes(searchData)
        );
        setFilteredData(filteredItems);
    }, [searchTerm]);

    return (
        <>
            <nav>
                <a href="#" className="logo">Explora</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#destination">Destination</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </ul>
            </nav>
            <div>
                <section className="newsletter">
                    <form>
                        <input
                            placeholder="Enter Your Destination.."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            required
                        />
                    </form>
                </section>
                <section className="destination" id='destination'>
                    <div>
                        <div>
                            {filteredData.map((item) => (
                                <div className='destination-contentt' key={item.id}>
                                    <div className='col-contentt'>
                                        
                                            <img src={item.image} alt={item.title} />
                                        
                                        
                                            <p>{item.title}</p>
                                            <h5>{item.location}</h5>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Search;
