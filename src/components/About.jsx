import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import apostle from "../assets/gallery/IMG_1108.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.header
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Apostle Damorn</h2>
          <p className="about-tagline">
            A voice of transformation, grounded in truth and grace
          </p>
        </motion.header>

        <div className="about-grid">
          {/* TEXT */}
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Apostle Damorn Shunet is a devoted servant of God, passionate
              about revealing Christ through sound doctrine, practical faith,
              and transformational teaching. His ministry blends spiritual depth
              with clarity, structure, and relevance.
            </p>

            <p>
              With a background in law (LLB Hons), he brings disciplined
              thought, precision, and spiritual conviction into every expression
              of his calling reaching both local and global audiences.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <h4>Legal Scholar</h4>
                <span>LLB (Hons)</span>
              </div>

              <div className="stat-card">
                <h4>Published Author</h4>
                <span>2 Transformational Books</span>
              </div>

              <div className="stat-card">
                <h4>Songwriter</h4>
                <span>Faith-centered Worship</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src={apostle} alt="Apostle Damorn Shunet" />
              <div className="image-badge">
                Serving from Kenya
                <br />
                to the Nations
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
