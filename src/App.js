import React from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ContactPrimary from './components/ContactPrimary';
import Reviews from './components/Reviews';
import Overlay from './assets/Images/contact_wallpaper.jpg'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <img className="overlay-image" src={Overlay} alt="Overlay" />
      <ContactPrimary />
      <Reviews />
      <Contact />
      <div className='foot'>© 2023 ExproSoft. All rights reserved.</div>
    </div>
  );
}

export default App;