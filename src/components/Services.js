import React from 'react';
import './Services.css';

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
            <img src="./Images/card01.jpg" alt="Card" />
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
            <img src="./Images/card02.jpg" alt="Card" />
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
            <img src="./Images/card03.jpg" alt="Card" />
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
            <img src="./Images/card04.jpg" alt="Card" />
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