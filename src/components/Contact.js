import React from 'react';
import './Contact.css';
import truck from '../assets/truck.jpg';
import End from './End';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className='bottom'>
        <div className="container centralize contact-page">
          <div className="row w-100">
            <div className="col-5 img-container">
              <img src={truck} alt="truck" className='truck-img' />
            </div>
            <div className="col-7 form-container">
              <div className="container">
                <p className='contact-heading'>Contact Us</p>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" className="form-control" placeholder="Enter your full name" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type="text" id="phoneNumber" className="form-control" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" className="form-control" placeholder="Enter your message"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn submit text-uppercase py-2 my-4" type='submit'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <End/>
        <div className='background'>
        </div>
      </div>
    </section>
  );
}

export default Contact;