import React from 'react';
import './About.css';
import moving_in from '../assets/move_in.png';
import design from '../assets/design.png';

const About = () => {

  const handleScrollToServices = () => {
    // Scroll to the 'about' section when the arrow is clicked
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="about" className="section about-section">
      <div className="container centralize">
        <div className="row">
          <div className="col-md">
            {/* Content for the About Us section */}
            <p className="header text-capitalize">
              about company
            </p>
            <p className="heading text-uppercase">
              safe, reliable and express service
            </p>
            <p className="heading-material">
              My company provides professional services. We offer moving services for houses, apartments, bussinesses or products to your desired location.
            </p>
            <button className='btn discover text-uppercase px-5 py-3' onClick={handleScrollToServices}>
              discover more
            </button>

          </div>
          <div className="col-md moving-in">
            <div className="box-corner"></div>
            <img src={moving_in} alt="moving in" />
            <img src={design} className="design" alt="design-element" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;