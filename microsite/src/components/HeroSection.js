import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      {/* <h1>Create a connection with a little liquid courage.</h1>
      <p>Vancouver is a lonely city, why not get help from alcohol?
      </p> */}
    </div>
  );
}

export default HeroSection;
