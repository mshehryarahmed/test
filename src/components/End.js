import React from 'react';
import './End.css';
import logo from '../assets/Main_Logo.png'

function End() {
    return (
        <div className='End'>
            <div className='logo'>
                <img src={logo} className='logo-image' alt='Logo' />
                <p className='follow-us'>Follow us</p>
                <p>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </p>
            </div>
            <div className='quick-links p-4'>
                <h1>Quick Links</h1>
                <ul>
                    <li><a href='#home'><i class="fa fa-arrow-right"></i>Home</a></li>
                    <li><a href='#about'><i class="fa fa-arrow-right"></i>About Us</a></li>
                    <li><a href='#services'><i class="fa fa-arrow-right"></i>Services</a></li>
                    <li><a href='#contact'><i class="fa fa-arrow-right"></i>Contact Us</a></li>
                </ul>
            </div>
            <div className='information p-4'>
                <h1>Information</h1>
                <ul>
                    <li><i class="fa fa-phone"></i> (123)456-78910</li>
                    <li><i class="fa fa-envelope"></i> contact@mshehryar.com</li>
                </ul>
            </div>
            <div className='subscribe p-3'>
                <p className="section-heading text-capitalize">
                    Subscribe to our news letter
                </p>
                <p className="section-content">
                    We'll keep you posted with news and updates
                </p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control button-width" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary color-blue text-uppercase px-3" type="button" id="button-addon2">subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default End;