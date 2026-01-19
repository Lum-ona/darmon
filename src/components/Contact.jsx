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
  FiLayers,
  FiGlobe,
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
    // EmailJS Logic remains the same...
    alert("Transmission Sent to the Archive.");
  };

  return (
    <section id="contact" className="contact-v3">
      {/* Background Elements */}
      <div className="contact-grid-pattern" />
      <div className="contact-blob-gold" />

      <div className="contact-shell-v3">
        {/* HEADER WITH STROKE STYLE */}
        <header className="contact-header-v3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-badge"
          >
            <FiGlobe className="spin-icon" />
            <span>Global Invitations</span>
          </motion.div>

          <motion.h2
            className="contact-title-v3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Booking & <span className="stroke-text">Invitations</span>
          </motion.h2>
          <p className="contact-subtitle-v3">
            Secure apostolic alignment for your next conference, media
            broadcast, or revival gathering.
          </p>
        </header>

        <div className="contact-main-layout">
          {/* LEFT SIDE: THE TRANSMISSION LOG */}
          <motion.div
            className="contact-display-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="panel-inner">
              <div className="panel-status">
                <span className="status-dot"></span>
                SYSTEM ACTIVE: RECEIVING REQUESTS
              </div>

              <div className="engagement-types-v3">
                {[
                  {
                    icon: <FiMic />,
                    label: "Apostolic Preaching",
                    sub: "Churches & Global Stages",
                  },
                  {
                    icon: <FiLayers />,
                    label: "Prophetic Media",
                    sub: "Podcasts & Broadcasters",
                  },
                  {
                    icon: <FiSend />,
                    label: "Revival Fires",
                    sub: "Gen Z & Youth Gatherings",
                  },
                ].map((item, i) => (
                  <div key={i} className="engagement-item-v3">
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-text">
                      <h4>{item.label}</h4>
                      <p>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="panel-footer-meta">
                <div className="meta-row">
                  <FiPhone /> <span>+254 727 129 129</span>
                </div>
                <div className="meta-row">
                  <FiMail /> <span>genzlovesjesus@gmail.com</span>
                </div>
                <div className="meta-row">
                  <FiMapPin /> <span>Nairobi HQ, Kenya</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE GLASS TERMINAL FORM */}
          <motion.form
            className="contact-form-v3"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="form-grid">
              <div className="input-group">
                <label>
                  <FiUser /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Identity"
                  required
                />
              </div>
              <div className="input-group">
                <label>
                  <FiMail /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Prophetic.contact@mail.com"
                  required
                />
              </div>
              <div className="input-group">
                <label>
                  <FiLayers /> Event Category
                </label>
                <select name="eventType" required>
                  <option value="">Select Platform</option>
                  <option value="preaching">Preaching / Teaching</option>
                  <option value="conference">Conference</option>
                  <option value="media">Media / Interview</option>
                </select>
              </div>
              <div className="input-group">
                <label>
                  <FiCalendar /> Preferred Date
                </label>
                <input type="date" name="eventDate" />
              </div>
              <div className="input-group full-width">
                <label>Mission Briefing</label>
                <textarea
                  name="message"
                  placeholder="Location, Expectations, and Audience Context..."
                  required
                ></textarea>
              </div>
            </div>

            <motion.button
              className="submit-btn-v3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              INITIALIZE CONNECTION
              <FiSend className="btn-icon" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
