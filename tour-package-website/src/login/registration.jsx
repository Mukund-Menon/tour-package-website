import React, { useState } from 'react';
import './registration.css';
function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      return "Passwords Don't Match";
    } else {
      return '';
    }
  };

  return (
    <div>
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
        <div className="wrapper">
          <span className="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div className="form-box login">
            <h2>Register</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="username" required />
                <label>Username</label>
              </div>

              <div className="input-box">
                <span className="icon"><ion-icon name="call"></ion-icon></span>
                <input type="mobileNumber" required />
                <label>Mobile Number</label>
              </div>

              <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" value={password} onChange={handlePasswordChange} required />
                <label>Password</label>
              </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                <label>Confirm Password</label>
              </div>
              <div className="remember-forgot">
                <label><input type="checkbox" />I agree to the terms & conditions</label>
              </div>
              <button type="submit" className="btn">Register</button>
              <div className="login-register">
                <p>Already have an account? <a href="#" className="register-link">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Signup;
