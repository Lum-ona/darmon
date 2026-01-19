import React from "react";
import { motion } from "framer-motion";
import { Scale, BookOpen, Music } from "lucide-react"; // Import Lucide icons
import "./About.css";
import apostle from "../assets/gallery/IMG_1107.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Background Decorative Element */}
      <div className="about-bg-text">EST 2024</div>

      <div className="about-container">
        <div className="about-grid">
          {/* IMAGE AREA WITH OFFSET BORDERS */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="about-image-wrapper">
              <div className="image-border-decoration" />
              <img
                src={apostle}
                alt="Apostle Damorn Shunet"
                className="about-main-img"
              />
              <div className="experience-tag">
                <span className="tag-number">10+</span>
                <span className="tag-text">
                  Years of <br />
                  Ministry
                </span>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="about-eyebrow">The Man Behind the Vision</span>
              <h2 className="about-title">
                Sound Doctrine. <br />
                <span>Practical Faith.</span>
              </h2>

              <div className="about-divider" />

              <p className="about-description">
                Apostle Damorn Shunet is a devoted servant of God, passionate
                about revealing Christ through sound doctrine and
                transformational teaching. His ministry blends spiritual depth
                with the precision of a disciplined mind.
              </p>

              <p className="about-description-sub">
                Holding an <strong>LLB Hons</strong>, he bridges the gap between
                spiritual conviction and structured logic, reaching global
                audiences with a message of clarity and structure.
              </p>
            </motion.div>

            {/* COOL STATS GRID WITH LUCIDE ICONS */}
            <div className="about-stats-modern">
              <motion.div
                className="about-stat-box"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <h5>Legal Precision</h5>
                <p>LLB (Hons) Scholar</p>
              </motion.div>

              <motion.div
                className="about-stat-box highlight"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <h5>Author</h5>
                <p>2 Global Publications</p>
              </motion.div>

              <motion.div
                className="about-stat-box"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <Music size={24} strokeWidth={1.5} />
                </div>
                <h5>Songwriter</h5>
                <p>Worship & Praise</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
