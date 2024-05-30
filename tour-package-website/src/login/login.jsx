import React, { useState } from 'react';
import './registration.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <>
        <header className="login">
		    <a href="#" className="logo">Explora</a>
		    <div className="bx bx-menu" id="menu-icon"></div>
		    <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#contact">Contact Us</a></li>
				<div className="social">
					<a href="#"><i className='bx bxl-facebook' ></i></a>
					<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
					<a href="#"><i className='bx bxl-twitter' ></i></a>
					<a href="#"><i className='bx bxl-linkedin' ></i></a>
				</div>
		    </ul>
	    </header>
            <div className="wrapper">
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
                        <div className="login-register">
                            <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            
        </>
    );
}

export default Login;