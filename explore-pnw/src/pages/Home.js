import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import CarouselImage from '../assets/carousel-image.png';

function Home() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a77d96fb-fef3-4d7a-a2e7-fae201b65490");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="home">
      <Navbar isHomePage={true} />

      <section className="hero">
        <div className="carousel">
          <div className="carousel-slide">
            <img src={CarouselImage} alt="Hero" className="carousel-image" />
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

      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
        <span className="form-result">{result}</span>
      </section>

      <Footer isHomePage={true} />
    </div>
  );
}

export default Home;
