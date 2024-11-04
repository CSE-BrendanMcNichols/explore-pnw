// src/pages/Destinations.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Destinations.css';
import CarouselImage from '../assets/carousel-image.png';

// Import images
import SpaceNeedle from '../assets/space-needle.jpeg';
import OlympicPark from '../assets/olmypic-park.jpeg';
import Leavenworth from '../assets/leavenworth.jpeg';
import Whistler from '../assets/whistler.jpeg';
import CraterLake from '../assets/crater-lake.jpeg';
import TheGorge from '../assets/the-gorge.jpeg';
import MtRainier from '../assets/mount-rainier.jpeg';
import PortlandGarden from '../assets/portland-garden.png';

// Data for destinations
const destinationData = [
  {
    image: SpaceNeedle,
    name: 'Space Needle, WA',
    description: 'An iconic landmark offering breathtaking views of Seattle and the surrounding landscapes.',
    activities: 'Observation deck, Sky Café, VR experience',
    bestTime: 'May to September',
    duration: '2 hours',
    funFact: 'The Space Needle was built for the 1962 World\'s Fair.',
    link: '/space-needle',
  },
  {
    image: OlympicPark,
    name: 'Olympic National Park, WA',
    description: 'A national park featuring diverse ecosystems from rainforests to rugged coastlines.',
    activities: 'Hiking, Wildlife watching, Camping',
    bestTime: 'June to October',
    duration: '1 to 3 days',
    funFact: 'Olympic National Park is home to four distinct ecosystems.',
  },
  {
    image: Leavenworth,
    name: 'Leavenworth, WA',
    description: 'A Bavarian-themed village with year-round outdoor activities and cultural events.',
    activities: 'Wine tasting, Festivals, Hiking trails',
    bestTime: 'December for holiday lights or September for fall activities',
    duration: '1 day',
    funFact: 'Leavenworth transformed into a Bavarian village in the 1960s to boost tourism.',
  },
  {
    image: Whistler,
    name: 'Whistler, B.C.',
    description: 'A popular ski resort offering activities all year round, from snow sports to mountain biking.',
    activities: 'Skiing, Mountain biking, Zip-lining',
    bestTime: 'December to February for skiing, June to August for biking',
    duration: '2 to 3 days',
    funFact: 'Whistler hosted the 2010 Winter Olympics.',
  },
  {
    image: CraterLake,
    name: 'Crater Lake, OR',
    description: 'The deepest lake in the U.S. with striking blue waters formed by a collapsed volcano.',
    activities: 'Boat tours, Scenic drive, Photography',
    bestTime: 'July to September',
    duration: '1 day',
    funFact: 'Crater Lake was formed about 7,700 years ago after the collapse of Mount Mazama.',
  },
  {
    image: TheGorge,
    name: 'The Gorge Amphitheatre, WA',
    description: 'A stunning concert venue known for its natural acoustics and beautiful views of the Columbia River.',
    activities: 'Concerts, Camping, Hiking',
    bestTime: 'May to September',
    duration: '1 day',
    funFact: 'The Gorge is one of the most scenic concert locations in the world.',
  },
  {
    image: MtRainier,
    name: 'Mount Rainier National Park, WA',
    description: 'An iconic volcanic peak with beautiful wildflower meadows and hiking trails.',
    activities: 'Climbing, Wildflower viewing, Snowshoeing',
    bestTime: 'July to August',
    duration: '1 to 2 days',
    funFact: 'Mount Rainier is an active volcano and the most glaciated peak in the contiguous U.S.',
  },
  {
    image: PortlandGarden,
    name: 'Portland Japanese Garden, OR',
    description: 'A beautiful traditional Japanese garden offering tranquil paths and scenic views.',
    activities: 'Garden tour, Tea ceremony, Photography',
    bestTime: 'March to May or September to November',
    duration: '2 hours',
    funFact: 'The Portland Japanese Garden is considered one of the most authentic Japanese gardens outside of Japan.',
  },
];

function Destinations() {
  return (
    <div className="destinations">
      <Navbar isHomePage={false} />

      {/* Carousel Section */}
      <section className="hero">
        <div className="carousel">
          <div className="carousel-slide">
            <img src={CarouselImage} alt="Pacific Northwest" className="carousel-image" />
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <main className="destinations-content">
        <h2>Top Destinations in the Pacific Northwest</h2>
        <div className="destinations-grid">
          {destinationData.map((destination, index) => (
            <div className="destination-card" key={index}>
              {destination.link ? (
                <Link to={destination.link} className="destination-link">
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                  <h3>{destination.name}</h3>
                </Link>
              ) : (
                <>
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                  <h3>{destination.name}</h3>
                </>
              )}
              <p>{destination.description}</p>
              <p><em>Activities:</em> {destination.activities}</p>
              <p><strong>Best Time to Visit:</strong> {destination.bestTime}</p>
              <p><strong>Recommended Duration:</strong> {destination.duration}</p>
              <p><strong>Fun Fact:</strong> {destination.funFact}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer isHomePage={false} />
    </div>
  );
}

export default Destinations;
