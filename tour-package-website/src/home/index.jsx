import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
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
import shopping from '../img/shopping.png'
import sight from '../img/sight_seeing.png'
import entertainment from '../img/entertainment.png'
import food from '../img/food.png'

function HomePage() {
	const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
		<div>
		<body className={scrolling ? 'bruh sticky' : 'bruh'}>
		<>
		<header>
			<a href="#" class="logo">Explora</a>
			<div class="bx bx-menu" id="menu-icon"></div>

			<ul class="navbar">
				<li><a href="#home">Home</a></li>
				<li><a href="#destination">Destination</a></li>
				<li><a href="#contact">Contact Us</a></li>

					<div class="social">
						<a href="#"><i class='bx bxl-facebook' ></i></a>
						<a href="#"><i class='bx bxl-instagram-alt' ></i></a>
						<a href="#"><i class='bx bxl-twitter' ></i></a>
						<a href="#"><i class='bx bxl-linkedin' ></i></a>
					</div>
			</ul>
		</header>

		<section class="home" id="home">
			<div class="home-text">
				<h1>Be the Dora, <br/> Explore India</h1>
				<Link to="/search" class="home-btn">Let's go now</Link>
			</div>
		</section>

		<section class="container">
			<div class="text">
				<h2>Start Your Vacation <br/> with Lots of Services!</h2>
			</div>

			<div class="row-items">
				<div class="container-box">
					<div class="container-img">
						<img src={shopping}/>
					</div>
					<h4>Shopping</h4>
				</div>

				<div class="container-box">
					<div class="container-img">
						<img src={food}/>
					</div>
					<h4>Food Tours</h4>
				</div>

				<div class="container-box">
					<div class="container-img">
						<img src={sight}/>
					</div>
					<h4>Sight Seeing</h4>
				</div>

				<div class="container-box">
					<div class="container-img">
						<img src={entertainment}/>
					</div>
					<h4>Entertainment</h4>
				</div>

			</div>
		</section>

		<section class="destination" id="destination">
			<div class="title">
				<h2>Our Most Popular <br/> Destinations!</h2>
			</div>
			<div class="destination-content">

			<Link to="/booking">
				<div class="col-content">
					<img src={delhi}/>
					<h5>India Gate</h5>
					<p>New Delhi</p>
				</div>
			</Link>

				<div class="col-content">
					<img src={RedFort}/>
					<h5>Red Fort</h5>
					<p>New Delhi</p>
				</div>

				<div class="col-content">
					<img src={HumayunTomb}/>
					<h5>Humayun Tomb</h5>
					<p>New Delhi</p>
				</div>

				<div class="col-content">
					<img src={Alapuzha}/>
					<h5>Alapuzha</h5>
					<p>Kerala</p>
				</div>

				<div class="col-content">
					<img src={Shreejagannathatemplepuri}/>
					<h5>Shree Jagannatha Temple Puri</h5>
					<p>Odisha</p>
				</div>

				<div class="col-content">
					<img src={BrihadeeswaraTemple}/>
					<h5>Brihadeeswara Temple</h5>
					<p>Tamil Nadu</p>
				</div>

			</div>
		</section>

	<section class="destination" id="destination">
		<div class="title">
			<h2>Night Life at it's Best !</h2>
		</div>

		<div class="destination-content">
			<div class="col-content">
				<img src={Charminar}/>
				<h5>Charminar</h5>
				<p>Hyderabad</p>
			</div>

			<div class="col-content">
				<img src={sikkim}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={goa}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={delhi}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={mysorePalace}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={mahabodhiTemple}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

		</div>
	</section>

	<section class="destination" id="destination">
		<div class="title">
			<h2> Enter The Zone !!</h2>
		</div>

		<div class="destination-content">
			<div class="col-content">
				<img src={chittorgarhFort}/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={konarkSunTemple}/>
				<h5>Konark Sun Temple</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src={JatayuEarthCenter}/>
				<h5>Jatayu Earth's Center</h5>
				<p>Kerala</p>
			</div>

		</div>
	</section>
	<section id="contact">
			<div class="footer">
				<div class="main">
					<div class="list">
						<h4>Support</h4>
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Help</a></li>
							<li><a href="#">Tour</a></li>
						</ul>
					</div>
				</div>
			</div>
			</section>
		<script type="text/javascript" src="js/script.js"></script>
		</>
	</body>
			</div>
		);
	}

export default HomePage;
