import React from 'react';
import './Services.css';
import card1 from '../assets/Images/card01.jpg'
import card2 from '../assets/Images/card02.jpg'
import card3 from '../assets/Images/card03.jpg'
import card4 from '../assets/Images/card04.jpg'

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className='title'>
        <h2>Services We Offer</h2>
        <div>
          <p>WE MANAGE LEAD LOGISTICS FOR WORLD'S MULTINATIONAL COMPANIES</p>
        </div>
      </div>
      <div className='cards'>
        <div className="card">
          <div className="image-container">
            <div className='tagline'>GLOBAL FAST MOVERS</div>
            <img src={card1} alt="Card" />
          </div>
          <div className="card-content">
            <p className='card-content-id'>01</p>
            <p className='card-content-title'>Houses</p>
            <p className='card-content-link'>LEARN MORE <div className="arrow"></div></p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
          <div className='tagline'>GLOBAL FAST MOVERS</div>
            <img src={card2} alt="Card" />
          </div>
          <div className="card-content">
            <p className='card-content-id'>02</p>
            <p className='card-content-title'>APARTMENTS</p>
            <p className='card-content-link'>LEARN MORE <div className="arrow"></div></p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
          <div className='tagline'>GLOBAL FAST MOVERS</div>
            <img src={card3} alt="Card" />
          </div>
          <div className="card-content">
            <p className='card-content-id'>03</p>
            <p className='card-content-title'>BUSINESS</p>
            <p className='card-content-link'>LEARN MORE <div className="arrow"></div></p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
          <div className='tagline'>GLOBAL FAST MOVERS</div>
            <img src={card4} alt="Card" />
          </div>
          <div className="card-content">
            <p className='card-content-id'>04</p>
            <p className='card-content-title'>HAULING PRODUCTS</p>
            <p className='card-content-link'>LEARN MORE <div className="arrow"></div></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;