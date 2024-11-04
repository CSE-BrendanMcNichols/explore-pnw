// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import CarouselImage from '../assets/carousel-image.png';

function Home() {
  return (
    <div className="home">
      <Navbar isHomePage={true} />
      
      <section className="hero">
        <div className="carousel">
          <div className="carousel-slide">
            <img src={CarouselImage} alt="Hero Image" className="carousel-image" />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Explorers Are Saying</h2>
        <div className="testimonial">
          <p>"The Pacific Northwest is breathtaking. My trip to Olympic National Park was unforgettable!"</p>
          <h4>- John D.</h4>
        </div>
        <div className="testimonial">
          <p>"I’ve never seen anything like the views from the Space Needle. Seattle is amazing!"</p>
          <h4>- Emily R.</h4>
        </div>
      </section>

      <Footer isHomePage={true} />
    </div>
  );
}

export default Home;
