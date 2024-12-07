import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/SchedulePlanner.css';

function SchedulePlanner() {
    const [formData, setFormData] = useState({ destination: '', date: '', time: '' });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        fetchSchedule();
    }, []);

    function convertTo12HourFormat(time24) {
        const [hours, minutes] = time24.split(':');
        const hours12 = ((+hours % 12) || 12);
        const ampm = +hours < 12 ? 'AM' : 'PM';
        return `${hours12}:${minutes} ${ampm}`;
    }

    const fetchSchedule = async () => {
        try {
            const response = await fetch('https://explore-pnw-api.onrender.com/api/schedule');
            const data = await response.json();
            setSchedule(data);
        } catch (err) {
            setError('Failed to fetch schedule. Please try again.');
        }
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError('Image size must be less than 5MB');
                e.target.value = '';
                return;
            }
            
            if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
                setError('Only JPEG, JPG and PNG images are allowed');
                e.target.value = '';
                return;
            }

            setSelectedImage(file);
            setError('');

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
            setImagePreview(null);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item._id);
        setFormData({
            destination: item.destination,
            date: item.date,
            time: item.time.split(' ')[0],
        });
        setError('');
        setSuccess('');
        setSelectedImage(null);
        setImagePreview(item.image?.filename ? 
            `https://explore-pnw-api.onrender.com/images/${item.image.filename}` : 
            null
        );
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://explore-pnw-api.onrender.com/api/schedule/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await fetchSchedule();
                setSuccess('Schedule deleted successfully!');
                setTimeout(() => setSuccess(''), 3000);
            } else {
                const result = await response.json();
                setError(result.message || 'Error deleting schedule');
            }
        } catch (err) {
            setError('Error deleting schedule. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        const formDataToSend = new FormData();
        formDataToSend.append('destination', formData.destination);
        formDataToSend.append('date', formData.date);
        formDataToSend.append('time', convertTo12HourFormat(formData.time));
        if (selectedImage) {
            formDataToSend.append('image', selectedImage);
        }

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId 
            ? `https://explore-pnw-api.onrender.com/api/schedule/${editingId}`
            : 'https://explore-pnw-api.onrender.com/api/schedule';

        try {
            const response = await fetch(url, {
                method,
                body: formDataToSend
            });

            const result = await response.json();

            if (response.ok) {
                await fetchSchedule();
                setSuccess(editingId ? 'Schedule updated successfully!' : 'Schedule added successfully!');
                setFormData({ destination: '', date: '', time: '' });
                setSelectedImage(null);
                setImagePreview(null);
                setEditingId(null);
                const fileInput = document.querySelector('input[type="file"]');
                if (fileInput) fileInput.value = '';
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
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/jpeg,image/png,image/jpg"
                                onChange={handleImageChange}
                                className="file-input"
                            />
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                            )}
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
                                    setSelectedImage(null);
                                    setImagePreview(null);
                                    setError('');
                                    setSuccess('');
                                    const fileInput = document.querySelector('input[type="file"]');
                                    if (fileInput) fileInput.value = '';
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
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.destination}</td>
                                    <td className="schedule-image">
                                        {item.image?.filename && (
                                            <img 
                                                src={`https://explore-pnw-api.onrender.com/images/${item.image.filename}`}
                                                alt={item.destination}
                                            />
                                        )}
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(item)} className="action-button edit">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(item._id)} className="action-button delete">
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