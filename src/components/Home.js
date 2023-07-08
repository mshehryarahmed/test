import React from 'react';
import './Home.css';

const Home = () => {
  const handleScrollToAbout = () => {
    // Scroll to the 'about' section when the arrow is clicked
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="section home-section">
      <div className='HomeText'>
        <h1>WE MOVE YOU</h1>
        <h2>WITH QUALITY CARE & SAVING!</h2>
        <p>Over thirty years of experience with logistics.</p>
        <button>GET A QUOTE</button>
      </div>
      <div class="down-arrow" onClick={handleScrollToAbout}></div>
    </section>
  );
}

export default Home;
