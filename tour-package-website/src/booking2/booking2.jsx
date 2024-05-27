import React, { useState } from 'react';
import './booking.css';

function Booking() {
    const [formData, setFormData] = useState({
        fullname: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        destination: '',
        fromdate: '',
        todate: '',
        budget: '',
    });

    const [receipt, setReceipt] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReceipt(formData);
    };

    return (
        <div>
            <header>
                <a href="#" className="logo">Explora</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#destination">Destination</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <div className="social">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </ul>
            </header>

            <div className="container">
                <br />
                <h1 style={{ textDecoration: 'underline' }}>Travel Booking Form</h1>
                <form id="bookingForm" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />

                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

                        <label htmlFor="state">State / Province</label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
                    </fieldset>

                    <fieldset>
                        <legend>Travel Preferences</legend>
                        <label htmlFor="destination">Preferred Travel Destination</label>
                        <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} />

                        <label htmlFor="fromdate">Preferred Travel Date From</label>
                        <input type="date" id="fromdate" name="fromdate" value={formData.fromdate} onChange={handleChange} />

                        <label htmlFor="todate">To</label>
                        <input type="date" id="todate" name="todate" value={formData.todate} onChange={handleChange} />

                        <label htmlFor="budget">Travel Budget (USD)</label>
                        <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
                    </fieldset>

                    <input type="submit" value="Submit" />
                </form>
                {receipt && (
                    <div id="receipt">
                        <h2>Booking Receipt</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Details</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(receipt).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Booking;
