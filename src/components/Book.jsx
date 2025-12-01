import React from "react";
import { motion } from "framer-motion";
import "./Book.css";
import book from "../assets/book/book.jpeg";

const Book = () => {
  const handleOrderClick = () => {
    // In a real application, this would link to a purchase page
    window.location.href = "https://wa.me/p/31587987360848672/254727129129";
  };

  return (
    <section id="book" className="section book-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Unseen Advantage
        </motion.h2>

        <div className="book-content">
          <motion.div
            className="book-cover-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="book-cover">
              <img
                src={book}
                alt="The Unseen Advantage Book Cover"
                className="book-image"
              />
              <div className="book-glow"></div>
              <motion.div
                className="floating-badge"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>Bestseller</span>
              </motion.div>
            </div>
            <br />
            <motion.div
              className="book-features"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="feature">
                <div className="feature-icon">🔍</div>
                <span>Uncover Hidden Spiritual Realities</span>
              </div>
              <div className="feature">
                <div className="feature-icon">⚔️</div>
                <span>Master Spiritual Warfare</span>
              </div>
              <div className="feature">
                <div className="feature-icon">📖</div>
                <span>Biblical Insights & Practical Tools</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="book-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="book-details-content">
              <motion.h3
                className="book-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Understanding Spiritual Realities
              </motion.h3>

              <motion.p
                className="book-author"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                by Apostle Darmon Shunet
              </motion.p>

              <motion.div
                className="book-rating"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="stars">{"★".repeat(5)}</div>
                <span className="rating-text">4.9/5 (2,347 reviews)</span>
              </motion.div>

              <motion.p
                className="book-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                There is more to life than what we see with our natural eyes.
                "The Unseen Advantage: Understanding Spiritual Realities" takes
                you on a transformative journey into the spiritual realm,
                revealing truths that have been hidden in plain sight. From the
                mysteries of Heaven's three dimensions to the ancient presence
                of the Nephilim, this book uncovers the deeper realities that
                shape our world. It offers clear, biblical insight into
                spiritual warfare and equips you with practical tools to walk in
                authority.
              </motion.p>

              <motion.div
                className="book-pricing"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <div className="price-container">
                  <span className="current-price">KES 1500</span>
                  <span className="original-price">KES 2000</span>
                  <span className="discount">Save 25%</span>
                </div>
              </motion.div>

              <motion.div
                className="book-actions"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="btn btn-primary order-btn"
                  onClick={handleOrderClick}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <span className="btn-icon">🛒</span> */}
                  Order Your Copy Now
                </motion.button>

                {/* <motion.button
                  className="btn btn-secondary preview-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="btn-icon">👁️</span>
                  Read Preview
                </motion.button> */}
              </motion.div>

              <motion.div
                className="book-stats"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <div className="stat">
                  <div className="stat-number">5K+</div>
                  <div className="stat-label">Copies Sold</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.9</div>
                  <div className="stat-label">Rating</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book;
