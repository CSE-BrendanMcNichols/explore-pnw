import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/SchedulePlanner.css';

function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(':');
  const hours12 = ((+hours % 12) || 12);
  const ampm = +hours < 12 ? 'AM' : 'PM';
  return `${hours12}:${minutes} ${ampm}`;
}

function SchedulePlanner() {
  const [formData, setFormData] = useState({ destination: '', date: '', time: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/schedule')
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error('Error fetching schedule:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.destination || !formData.date || !formData.time) {
      setError('All fields are required.');
      return;
    }

    const formattedTime = convertTo12HourFormat(formData.time);

    try {
      const response = await fetch('http://localhost:3000/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, time: formattedTime }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setSchedule([...schedule, result.data]);
        setFormData({ destination: '', date: '', time: '' });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="schedule-planner-page">
      <Navbar isHomePage={false} />

      <div className="planner-content">
        <section className="planner-form">
          <h2>Create Your Schedule</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="HH:MM"
              />
            </div>
            <button type="submit" className="planner-button">Add to Schedule</button>
            {success && <p className="success-message">Schedule added successfully!</p>}
            {error && <p className="error-message">Error: {error}</p>}
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
              {schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <Footer isHomePage={false} />
    </div>
  );
}

export default SchedulePlanner;
