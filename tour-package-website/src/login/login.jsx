import React from 'react';
import './registration.css'
function Login() {
    return (
        <>
        <header className="login">
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
            <div className="wrapper">
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    );
}

export default Login;