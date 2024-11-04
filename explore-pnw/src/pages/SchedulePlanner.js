// src/pages/SchedulePlanner.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/SchedulePlanner.css';

function SchedulePlanner() {
  return (
    <div className="schedule-planner-page">
      <Navbar isHomePage={false} />

      <div className="planner-content">
        <section className="planner-form">
          <h2>Create Your Schedule</h2>
          <form>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input type="text" id="destination" name="destination" placeholder="Enter destination" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" name="date" placeholder="Enter date" />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="text" id="time" name="time" placeholder="Enter time" />
            </div>
            <button type="submit" className="planner-button">Add to Schedule</button>
          </form>
        </section>

        <section className="schedule-table">
          <h2>Your Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-09-15</td>
                <td>10:00 AM</td>
                <td>Space Needle, WA</td>
              </tr>
              <tr>
                <td>2024-09-16</td>
                <td>2:00 PM</td>
                <td>Olympic National Park, WA</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <Footer isHomePage={false} />
    </div>
  );
}

export default SchedulePlanner;
