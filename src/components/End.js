import React from 'react';
import './End.css';
import logo from '../assets/Main_Logo.png'

function End() {
    return (
        <div className='End'>
            <div className='logo'>
                <img src={logo} className='logo-image' alt='Logo' />
                <p>Fllow us</p>
                <p>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </p>
            </div>
            <div className='quick-links'>

            </div>
            <div className='information'>Information</div>
            <div className='subscribe'>Subscribe to our News Letter</div>
        </div>
    )
}

export default End;