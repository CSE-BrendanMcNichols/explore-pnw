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
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = () => {
    fetch('https://explore-pnw-api.onrender.com/api/schedule')
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error('Error fetching schedule:', err));
  };

  const validateForm = () => {
    if (!formData.destination || formData.destination.length < 3) {
      setError('Destination must be at least 3 characters long');
      return false;
    }
    if (!formData.date) {
      setError('Date is required');
      return false;
    }
    if (!formData.time) {
      setError('Time is required');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      destination: item.destination,
      date: item.date,
      time: item.time.split(' ')[0], // Convert back to 24-hour format for input
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://explore-pnw-api.onrender.com/api/schedule/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSchedule(schedule.filter(item => item.id !== id));
        setSuccess('Schedule deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (err) {
      setError('Error deleting schedule');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    const formattedTime = convertTo12HourFormat(formData.time);
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId 
      ? `https://explore-pnw-api.onrender.com/api/schedule/${editingId}`
      : 'https://explore-pnw-api.onrender.com/api/schedule';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, time: formattedTime }),
      });

      const result = await response.json();

      if (response.ok) {
        if (editingId) {
          setSchedule(schedule.map(item => 
            item.id === editingId ? { ...result.data, id: editingId } : item
          ));
          setSuccess('Schedule updated successfully!');
          setEditingId(null);
        } else {
          setSchedule([...schedule, result.data]);
          setSuccess('Schedule added successfully!');
        }
        setFormData({ destination: '', date: '', time: '' });
        setTimeout(() => setSuccess(''), 3000);
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
          <h2>{editingId ? 'Edit Schedule' : 'Create Your Schedule'}</h2>
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
              />
            </div>
            <button type="submit" className="planner-button">
              {editingId ? 'Update Schedule' : 'Add to Schedule'}
            </button>
            {editingId && (
              <button
                type="button"
                className="planner-button cancel-button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({ destination: '', date: '', time: '' });
                }}
              >
                Cancel Edit
              </button>
            )}
            {success && <p className="success-message">{success}</p>}
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.destination}</td>
                  <td>
                    <button onClick={() => handleEdit(item)} className="action-button edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="action-button delete">
                      Delete
                    </button>
                  </td>
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