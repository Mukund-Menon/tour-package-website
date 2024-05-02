import React from 'react';
import './styles.css';

function HomePage() {
    return (
        <div>
    <body>
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
			<p>Websites for tours and activities make it easier for time-constrained travellers to select specialised day trips or excursions and spare them from exhaustion during the search.</p>
			<a href="#" class="home-btn">Let's go now</a>
		</div>
	</section>

	<section class="container">
		<div class="text">
			<h2>Start Your Vacation <br/> with Lots of Services!</h2>
		</div>

		<div class="row-items">
			<div class="container-box">
				<div class="container-img">
					<img src="img/shopping.png"/>
				</div>
				<h4>Shopping</h4>
			</div>

			<div class="container-box">
				<div class="container-img">
					<img src="img/food.png"/>
				</div>
				<h4>Food Tours</h4>
			</div>

			<div class="container-box">
				<div class="container-img">
					<img src="img/sight_seeing.png"/>
				</div>
				<h4>Sight Seeing</h4>
			</div>

			<div class="container-box">
				<div class="container-img">
					<img src="img/entertainment.png"/>
				</div>
				<h4>Entertainment</h4><h4>and Fun</h4>
			</div>

		</div>
	</section>

	<section class="newsletter">
		<div class="send">
			<form>
				<input type="text" placeholder="Enter your Destination" required/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	</section>


	<section class="destination" id="destination">
		<div class="title">
			<h2>Our Most Popular <br/> Destination!</h2>
		</div>

		<div class="destination-content">
			<div class="col-content">
				<img src="img/rumi darwaza.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src="img/Bara_Imambara.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src="img/dome.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src="img/lohia park.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src="img/gomti-riverfront-park.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

			<div class="col-content">
				<img src="img/ambedkar park.jpg"/>
				<h5>Lorem epsum</h5>
				<p>Location</p>
			</div>

		</div>
	</section>

<section class="destination" id="destination">
	<div class="title">
		<h2>Night Life at it's Best !</h2>
	</div>

	<div class="destination-content">
		<div class="col-content">
			<img src="img/distillery.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/flying_saucer.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/beer cafe.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/molecule.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/void).png"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/drowning.jpg"/>
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
			<img src="img/bowling.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/focused_207455382-stock-photo-snooker-balls-snooker-table-nigh.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

		<div class="col-content">
			<img src="img/17_512-392x518.jpg"/>
			<h5>Lorem epsum</h5>
			<p>Location</p>
		</div>

	</div>
</section>
	<section id="contact">
		<div class="footer">
			<div class="main">
				<div class="list">
					<h4>Quick Links</h4>
				</div>

				<div class="list">
					<h4>Support</h4>
				</div>

				<div class="list">
					<h4>Contact Info</h4>
				</div>

				<div class="list">
					<h4>Connect</h4>
				</div>
			</div>
		</div>
	</section>

	<script type="text/javascript" src="js/script.js"></script>

</body>
        </div>
    );
}

export default HomePage;
