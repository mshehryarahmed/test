import React from 'react';
import './Ratings.css';

function Ratings({ rating }) {
    const stars = [];
    for (let index = 0; index < rating; index++) {
      stars.push(<span className="fa fa-star checked"></span>);
    }
  
    return <div className="rate">{stars}</div>;
  }  

export default Ratings;