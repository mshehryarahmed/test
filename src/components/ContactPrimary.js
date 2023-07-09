import React from 'react';
import './ContactPrimary.css';

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
        <img src='./Images/IMG2.jpg' alt='Movers'></img>
        <img src='./Images/IMG1.jpg' alt='Logistics'></img>
        <img src='./Images/IMG3.jpg' alt='Warehouse'></img>
      </div>
    </section>
  );
}

export default ContactPrimary;