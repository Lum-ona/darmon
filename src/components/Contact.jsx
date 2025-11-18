import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking request:", formData);
    alert(
      "Thank you for your booking request! Apostle Damorn's team will contact you soon."
    );
    setFormData({
      name: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Book Apostle Damorn
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Invite Apostle Damorn for preaching, interviews, or speaking
          engagements
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-subtitle">Speaking Opportunities</h3>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📖</div>
                <div className="method-info">
                  <h4>Preaching & Teaching</h4>
                  <p>Sunday services, conferences, and church events</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🎤</div>
                <div className="method-info">
                  <h4>Interviews & Podcasts</h4>
                  <p>Media appearances and digital content</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🌟</div>
                <div className="method-info">
                  <h4>Youth Events</h4>
                  <p>Gen Z Loves Jesus conferences and youth gatherings</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h4>Contact Details</h4>
              <div className="detail-item">
                <strong>Email:</strong> apostle@damornshunet.org
              </div>
              <div className="detail-item">
                <strong>Location:</strong> Nairobi, Kenya
              </div>
              <div className="detail-item">
                <strong>Ministry:</strong> Reign City Chapel
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select event type</option>
                <option value="preaching">Preaching/Teaching</option>
                <option value="conference">Conference</option>
                <option value="interview">Interview/Podcast</option>
                <option value="youth">Youth Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eventDate">Proposed Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Event Details *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please describe your event, expected audience, and any other relevant details..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Booking Request
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
