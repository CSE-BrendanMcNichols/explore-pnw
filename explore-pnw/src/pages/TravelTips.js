import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import avatar3 from '../assets/avatar_3.png';
import avatar4 from '../assets/avatar_4.png';
import avatar5 from '../assets/avatar_5.png';
import avatar6 from '../assets/avatar_6.png';
import avatar7 from '../assets/avatar_7.png';
import avatar8 from '../assets/avatar_8.png';
import '../styles/TravelTips.css';

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
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar1} alt="John D." />
                            <h3>John D.</h3>
                        </div>
                        <p>Always pack layers, especially if you're visiting in the spring or fall. The weather can change quickly in the Pacific Northwest, and you'll want to be prepared for rain, sun, and wind all in one day!</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar2} alt="Sarah M." />
                            <h3>Sarah M.</h3>
                        </div>
                        <p>When visiting the national parks, arrive early in the morning to avoid the crowds and get the best views. Popular spots like Mount Rainier and Olympic National Park can get busy during peak times.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar3} alt="Emily R." />
                            <h3>Emily R.</h3>
                        </div>
                        <p>If you're exploring Seattle, the CityPass is a great way to save money on major attractions like the Space Needle, Seattle Aquarium, and Museum of Pop Culture.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar4} alt="Michael T." />
                            <h3>Michael T.</h3>
                        </div>
                        <p>For breathtaking views of the coastline, drive along the Oregon coast. Make sure to stop at Cannon Beach and explore the nearby Ecola State Park for some incredible hikes and photography opportunities.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar5} alt="Lisa K." />
                            <h3>Lisa K.</h3>
                        </div>
                        <p>Don’t forget to visit the local markets! Pike Place Market in Seattle is a must-see, but also check out the Portland Saturday Market for unique arts, crafts, and local food.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar6} alt="James P." />
                            <h3>James P.</h3>
                        </div>
                        <p>If you're hiking, always carry a reusable water bottle and plenty of snacks. Some trails, like those in Olympic National Park, can be remote, so it's best to come prepared.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar7} alt="Anna L." />
                            <h3>Anna L.</h3>
                        </div>
                        <p>Plan your trip to the San Juan Islands in advance if you're going during the summer. The ferry can fill up quickly, so make reservations ahead of time to avoid waiting.</p>
                    </div>
                    <div className="tip-card">
                        <div className="user-info">
                            <img src={avatar8} alt="Chris B." />
                            <h3>Chris B.</h3>
                        </div>
                        <p>Bring a good pair of binoculars if you're interested in whale watching. There are many whale-watching tours departing from Seattle and the San Juan Islands during the summer months.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default TravelTips;
