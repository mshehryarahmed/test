import React from 'react';
import './Reviews.css';
import Carousel from './Carousel';

const Reviews = () => {
  return (
    <section id="reviews" className="section reviews-section">
      <h1>Customer Reviews</h1>
      <Carousel/>
      <div className='design'></div>
    </section>
  );
}

export default Reviews;