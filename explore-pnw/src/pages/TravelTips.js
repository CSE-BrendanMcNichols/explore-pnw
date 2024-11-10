import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TipCard from '../components/TipCard';
import '../styles/TravelTips.css';
import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import avatar3 from '../assets/avatar_3.png';
import avatar4 from '../assets/avatar_4.png';
import avatar5 from '../assets/avatar_5.png';
import avatar6 from '../assets/avatar_6.png';
import avatar7 from '../assets/avatar_7.png';
import avatar8 from '../assets/avatar_8.png';

const tips = [
  { avatar: avatar1, name: 'John D.', text: 'Always pack layers, especially if you\'re visiting in the spring or fall. The weather can change quickly in the Pacific Northwest, and you\'ll want to be prepared for rain, sun, and wind all in one day!' },
  { avatar: avatar2, name: 'Sarah M.', text: 'When visiting the national parks, arrive early in the morning to avoid the crowds and get the best views. Popular spots like Mount Rainier and Olympic National Park can get busy during peak times.' },
  { avatar: avatar3, name: 'Emily R.', text: 'If you\'re exploring Seattle, the CityPass is a great way to save money on major attractions like the Space Needle, Seattle Aquarium, and Museum of Pop Culture.' },
  { avatar: avatar4, name: 'Michael T.', text: 'For breathtaking views of the coastline, drive along the Oregon coast. Make sure to stop at Cannon Beach and explore the nearby Ecola State Park for some incredible hikes and photography opportunities.' },
  { avatar: avatar5, name: 'Lisa K.', text: 'Don’t forget to visit the local markets! Pike Place Market in Seattle is a must-see, but also check out the Portland Saturday Market for unique arts, crafts, and local food.' },
  { avatar: avatar6, name: 'James P.', text: 'If you\'re hiking, always carry a reusable water bottle and plenty of snacks. Some trails, like those in Olympic National Park, can be remote, so it\'s best to come prepared.' },
  { avatar: avatar7, name: 'Anna L.', text: 'Plan your trip to the San Juan Islands in advance if you\'re going during the summer. The ferry can fill up quickly, so make reservations ahead of time to avoid waiting.' },
  { avatar: avatar8, name: 'Chris B.', text: 'Bring a good pair of binoculars if you\'re interested in whale watching. There are many whale-watching tours departing from Seattle and the San Juan Islands during the summer months.' },
];

function TravelTips() {
  return (
    <div>
      <Navbar />
      <main className="travel-tips">
        <section className="tips-header">
          <h2>Travel Tips from Fellow Travelers</h2>
          <p>Read helpful tips shared by other explorers to make the most of your Pacific Northwest adventure!</p>
        </section>
        <section className="tips-cards">
          {tips.map((tip, index) => (
            <TipCard key={index} tip={tip} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TravelTips;
