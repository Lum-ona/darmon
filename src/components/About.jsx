import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import apostle from "../assets/gallery/IMG_1108.jpg";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Apostle Damorn
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Apostle Damorn Shunet is a passionate servant of God with a deep
              desire to know God and make Him known. Beyond the pulpit, he is an
              author, songwriter, and speaker whose influence extends through
              various digital platforms. His messages combine deep biblical
              insight with a practical approach to faith, inspiring
              transformation across generations.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              His desire to be a voice of transformation through spreading the
              gospel was ignited while he was still in primary school when a
              divine encounter transformed his relationship with God. With a
              background in law, holding an LLB (Hons) degree, Apostle Damorn
              brings a unique blend of intellect, structure, and spiritual
              passion to his ministry.
            </motion.p>

            <motion.div
              className="about-highlights"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="highlight-item">
                <div className="highlight-text">
                  <h4>Legal Background</h4>
                  <p>
                    LLB (Hons) degree bringing structure and intellect to
                    ministry
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-text">
                  <h4>Published Author</h4>
                  <p>
                    Two transformative books on identity and spiritual realities
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-text">
                  <h4>Gifted Songwriter</h4>
                  <p>
                    Using music to communicate grace, faith, and devotion to
                    Christ
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-images"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="image-stack">
              <motion.img
                src={apostle}
                alt="Apostle Damorn Shunet"
                className="main-about-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="floating-card card-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4>Family Man</h4>
                <p>Married to Prophetess Grace with 3 children</p>
              </motion.div>

              <motion.div
                className="floating-card card-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <h4>Based in Nairobi</h4>
                <p>Serving from Kenya to the nations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
