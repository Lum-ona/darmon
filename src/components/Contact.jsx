import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiMic,
  FiCalendar,
  FiUser,
  FiSend,
  FiLayers,
  FiGlobe,
  FiCheckCircle,
  FiXCircle,
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

  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_uhkheep",
        "template_j637jwc",
        {
          // IMPORTANT: These keys must match the {{name}} etc. in your EmailJS template
          name: formData.name,
          email: formData.email,
          eventType: formData.eventType,
          eventDate: formData.eventDate || "Not specified",
          message: formData.message,
        },
        "nJ6vkW36e-xWerNSC",
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        eventType: "",
        eventDate: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-v3">
      <div className="contact-grid-pattern" />
      <div className="contact-blob-gold" />

      {/* CUSTOM STATUS ALERT */}
      <AnimatePresence>
        {status && status !== "loading" && (
          <motion.div
            className={`custom-alert ${status}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {status === "success" ? <FiCheckCircle /> : <FiXCircle />}
            <span>
              {status === "success"
                ? "CONNECTION INITIALIZED: Request Sent Successfully"
                : "TRANSMISSION ERROR: Please try again"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="contact-shell-v3">
        <header className="contact-header-v3">
          <motion.div className="contact-badge">
            <FiGlobe className="spin-icon" />
            <span>Global Invitations</span>
          </motion.div>
          <motion.h2 className="contact-title-v3">
            Booking & <span className="stroke-text">Invitations</span>
          </motion.h2>
        </header>

        <div className="contact-main-layout">
          {/* Left Panel code remains same as your original... */}
          <motion.div className="contact-display-panel">
            {/* ... (Your existing panel-inner content) */}
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
            </div>
          </motion.div>

          <motion.form className="contact-form-v3" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="input-group">
                <label>
                  <FiUser /> Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Identity"
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <FiMail /> Email <span className="req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Prophetic.contact@mail.com"
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <FiLayers /> Event Category <span className="req">*</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Platform</option>
                  <option value="preaching">Preaching / Teaching</option>
                  <option value="conference">Conference</option>
                  <option value="media">Media / Interview</option>
                </select>
              </div>

              <div className="input-group">
                <label>
                  <FiCalendar /> Preferred Date <span className="req">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required // NOW REQUIRED
                />
              </div>

              <div className="input-group full-width">
                <label>
                  Mission Briefing <span className="req">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Location, Expectations, and Audience Context..."
                  required
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-btn-v3"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading"
                ? "TRANSMITTING..."
                : "INITIALIZE CONNECTION"}
              <FiSend className="btn-icon" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
