import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMic,
  FiCalendar,
  FiUser,
  FiSend,
} from "react-icons/fi";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          eventType: formData.eventType,
          eventDate: formData.eventDate || "Not specified",
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY",
      );

      alert("Booking request sent successfully!");

      setFormData({
        name: "",
        email: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send booking request. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        {/* HEADER */}
        <motion.header
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Booking & Invitations</h2>
          <p>
            Request Apostle Damorn for preaching, conferences, media, or special
            ministry engagements.
          </p>
        </motion.header>

        <div className="contact-layout">
          {/* INFO PANEL */}
          <motion.aside
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Engagement Types</h3>

            <div className="info-cards">
              <div className="info-card">
                <FiMic />
                <div>
                  <h4>Preaching & Teaching</h4>
                  <span>Churches & conferences</span>
                </div>
              </div>

              <div className="info-card">
                <FiSend />
                <div>
                  <h4>Interviews & Media</h4>
                  <span>Podcasts & broadcasts</span>
                </div>
              </div>

              <div className="info-card">
                <FiCalendar />
                <div>
                  <h4>Youth & Special Events</h4>
                  <span>Gen Z & revival gatherings</span>
                </div>
              </div>
            </div>

            <div className="contact-meta">
              <div>
                <FiPhone />
                <span>+254 727 129 129</span>
              </div>
              <div>
                <FiMail />
                <span>genzlovesjesus@gmail.com</span>
              </div>
              <div>
                <FiMapPin />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.aside>

          {/* FORM */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="field">
              <FiUser />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <FiMic />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select event type</option>
                <option value="preaching">Preaching / Teaching</option>
                <option value="conference">Conference</option>
                <option value="media">Interview / Podcast</option>
                <option value="youth">Youth Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="field">
              <FiCalendar />
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>

            <div className="field textarea">
              <textarea
                name="message"
                placeholder="Describe the event, location, audience, and expectations"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
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
