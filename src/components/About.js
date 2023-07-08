import React from 'react';
import './About.css';
import moving_in from '../assets/move_in.png'
const About = () => {
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
              <button className='btn discover text-uppercase px-5 py-3'>
                discover more
              </button>

          </div>
          <div className="col-md moving-in">
            <div className="box-corner"></div>
            <img src={moving_in} alt="moving in"/>
          </div>

        </div>
      </div>
      
      
    </section>
  );
}

export default About;