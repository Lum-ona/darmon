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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your booking request has been submitted!");
    setFormData({
      name: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="contact-title">Book Apostle Damorn</h2>
          <p className="contact-subtitle">
            Invite Apostle Damorn for preaching, interviews, or speaking
            engagements.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="left-title">Speaking Opportunities</h3>

            <div className="left-list">
              {[
                {
                  icon: "📖",
                  title: "Preaching & Teaching",
                  desc: "Church services & conferences",
                },
                {
                  icon: "🎤",
                  title: "Interviews & Podcasts",
                  desc: "Media & content sessions",
                },
                {
                  icon: "🌟",
                  title: "Youth Events",
                  desc: "Gen Z gatherings & youth ministry",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="left-item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <span className="item-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="left-details">
              <p>
                <strong>Email:</strong> apostle@damornshunet.org
              </p>
              <p>
                <strong>Location:</strong> Nairobi, Kenya
              </p>
              <p>
                <strong>Ministry:</strong> Reign City Chapel
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { id: "name", type: "text", placeholder: "Your full name" },
              { id: "email", type: "email", placeholder: "your@email.com" },
            ].map((input) => (
              <div className="form-group" key={input.id}>
                <label htmlFor={input.id}>
                  {input.id === "name" ? "Full Name *" : "Email *"}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  placeholder={input.placeholder}
                  value={formData[input.id]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select event type</option>
                <option value="preaching">Preaching / Teaching</option>
                <option value="conference">Conference</option>
                <option value="interview">Interview / Podcast</option>
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Event Details *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Describe your event..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <motion.button
              className="submit-btn"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
