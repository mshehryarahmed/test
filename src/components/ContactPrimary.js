import React from 'react';
import './ContactPrimary.css';
import IMG1 from '../assets/Images/IMG1.jpg'
import IMG2 from '../assets/Images/IMG2.jpg'
import IMG3 from '../assets/Images/IMG3.jpg'

const ContactPrimary = () => {
  
  const handleScrollToContact = () => {
    // Scroll to the 'about' section when the arrow is clicked
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="contact-primary" className="section contact-primary-section">
      <div className='title'>
        <p>Contact Our Professional Moving Services Experts</p>
        <button onClick={handleScrollToContact}>
          CONTACT US
        </button>
      </div>
      <div className='footer-image'>
        <img src={IMG1} alt='Movers'></img>
        <img src={IMG2} alt='Logistics'></img>
        <img src={IMG3} alt='Warehouse'></img>
      </div>
    </section>
  );
}

export default ContactPrimary;