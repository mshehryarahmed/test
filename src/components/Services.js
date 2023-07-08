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
            <img src="placeholder.jpg" alt="Card Image" />
          </div>
          <div className="card-content">
            <h2>01</h2>
            <h3>Houses</h3>
            <p>LEARN MORE</p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;