import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/SpaceNeedle.css';

// Import images
import SpaceNeedle1 from '../assets/space-needle1.jpeg';
import SpaceNeedle2 from '../assets/space-needle2.jpeg';

function SpaceNeedle() {
  return (
    <div className="space-needle-page">
      <Navbar isHomePage={false} />

      <div className="content-container">
        {/* Header Section */}
        <section className="intro-section">
          <h2>Space Needle</h2>
          <h3>Seattle, Washington USA</h3>
        </section>

        {/* Image Section */}
        <section className="images-section">
          <div className="image-grid">
            <div className="image-item">
              <img src={SpaceNeedle1} alt="View of Space Needle and Seattle" />
            </div>
            <div className="image-item">
              <img src={SpaceNeedle2} alt="Space Needle view from below" />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="description-section">
          <div className="description">
            <h3>About the Space Needle</h3>
            <p>
              The Space Needle is one of the most recognizable landmarks in the world, standing at 605 feet tall in Seattle, WA.
              Built for the 1962 World's Fair, it offers breathtaking views of the city, Mount Rainier, and Puget Sound.
            </p>
          </div>
          <div className="description">
            <h3>Things to Do Nearby</h3>
            <p>
              Just a short walk away, visitors can explore the Seattle Center, which includes attractions like the Museum of Pop Culture,
              the Chihuly Garden and Glass, and the Pacific Science Center.
            </p>
          </div>
        </section>
      </div>

      {/* Footer Section with Go Back Button */}
      <Footer isHomePage={false} />
    </div>
  );
}

export default SpaceNeedle;
