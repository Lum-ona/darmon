import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import "./Book.css";
import book from "../assets/book/book.jpeg";

const Book = () => {
  const handleOrderClick = () => {
    window.open("https://wa.me/p/31587987360848672/254727129129", "_blank");
  };

  // For 3D tilt effect on book cover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered animation variants for value items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="book" className="book-hero">
      <div className="book-bg-layer" />

      <div className="book-shell">
        {/* LEFT — STORY */}
        <motion.div
          className="book-copy"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <motion.span
            className="book-eyebrow"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured Release
          </motion.span>

          <motion.h2
            className="book-main-title"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
          >
            The Unseen Advantage
          </motion.h2>

          <motion.p
            className="book-tagline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Understanding spiritual realities that govern the visible world.
          </motion.p>

          <motion.div
            className="book-value"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="value-item" variants={item}>
              <FiBookOpen />
              <span>Biblical depth with spiritual clarity</span>
            </motion.div>
            <motion.div className="value-item" variants={item}>
              <FiShield />
              <span>Authority in spiritual warfare</span>
            </motion.div>
            <motion.div className="value-item" variants={item}>
              <FiTrendingUp />
              <span>Practical insight for believers</span>
            </motion.div>
          </motion.div>

          <motion.p
            className="book-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            This book unveils dimensions of the spiritual realm often ignored or
            misunderstood. Through scripture, revelation, and practical
            teaching, Apostle Darmon Shunet guides readers into a deeper
            understanding of authority, warfare, and divine order.
          </motion.p>

          <motion.div
            className="book-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="book-order-btn"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 15px 35px rgba(212, 175, 55, 0.35)",
                background: "linear-gradient(135deg, #d4af37, #f1c94f)",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleOrderClick}
            >
              Order Your Copy
              <FiArrowRight className="arrow-icon" />
            </motion.button>

            <motion.div className="book-price" whileHover={{ scale: 1.04 }}>
              <span className="price-current">KES 1500</span>
              <span className="price-old">KES 2000</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — BOOK */}
        <motion.div
          className="book-visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <motion.div
            className="book-frame"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
          >
            <motion.img
              src={book}
              alt="The Unseen Advantage book"
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.04 }}
            />
            <motion.span
              className="book-badge"
              animate={{
                rotate: [0, 3, -3, 0],
                scale: [1, 1.06, 1.06, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Bestseller
            </motion.span>
          </motion.div>

          <motion.div
            className="book-metrics"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div whileHover={{ y: -6 }}>
              <strong>5K+</strong>
              <span>Copies Sold</span>
            </motion.div>
            <motion.div whileHover={{ y: -6 }}>
              <strong>4.9</strong>
              <span>Average Rating</span>
            </motion.div>
            <motion.div whileHover={{ y: -6 }}>
              <strong>5</strong>
              <span>Countries</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Book;
