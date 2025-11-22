import React from "react";
import { motion } from "framer-motion";
import "./Sermons.css";

const Sermons = () => {
  const sermons = [
    {
      title: "Bliblical Fasting",
      date: "March 15, 2024",
      duration: "45:22",
      plays: "15.2K",
      videoId: "Uyb4v1uNomI",
      category: "Teaching",
    },
    {
      title: "What the  bible says about the narcissist demon",
      date: "March 8, 2024",
      duration: "52:18",
      plays: "12.8K",
      videoId: "_mtF-jmi-tU",
      category: "Preaching",
    },
    {
      title: "Before you let people go in 2024",
      date: "March 1, 2024",
      duration: "38:45",
      plays: "18.5K",
      videoId: "koSfDwHcb3A",
      category: "Healing",
    },
  ];

  return (
    <section id="sermons" className="section sermons-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Deeper Life
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Powerful messages that will transform your life and deepen your faith
        </motion.p>

        <div className="sermons-grid">
          {sermons.map((sermon, index) => {
            const thumbnail = `https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`;
            const link = `https://www.youtube.com/watch?v=${sermon.videoId}`;

            return (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={sermon.title}
                className="sermon-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="sermon-image-container">
                  <img
                    src={thumbnail}
                    alt={sermon.title}
                    className="sermon-image"
                  />

                  <div className="sermon-overlay">
                    <motion.button
                      className="play-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ▶
                    </motion.button>
                  </div>

                  <div className="sermon-duration">{sermon.duration}</div>
                </div>

                <div className="sermon-content">
                  <div className="sermon-category">{sermon.category}</div>
                  <h3 className="sermon-title">{sermon.title}</h3>
                  <div className="sermon-meta">
                    <span className="sermon-date">{sermon.date}</span>
                    <span className="sermon-plays">{sermon.plays} plays</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* <motion.div
          className="sermons-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Sermons
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Sermons;
