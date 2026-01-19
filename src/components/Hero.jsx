import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Install via npm if needed: react-intersection-observer
import "./Hero.css";
import apostle from "../assets/gallery/apostle_official.jpeg";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const targetStats = [70000, 1, 10, 2];

  useEffect(
    () => {
      if (inView) {
        controls.start("visible");
        const intervals = targetStats.map((target, i) => {
          const increment = target / 100; // Smooth steps
          let current = 0;
          return setInterval(() => {
            current += increment;
            if (current >= target) current = target;
            setStats((prev) => {
              const newStats = [...prev];
              newStats[i] = Math.floor(current);
              return newStats;
            });
          }, 20);
        });
        return () => intervals.forEach(clearInterval);
      }
    },
    [inView, controls],
    targetStats,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-particles"></div>{" "}
        {/* For subtle particle effect */}
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="hero-text">
            <motion.h1 className="hero-title" variants={childVariants}>
              Darmon
              <span className="gradient-text"> Shunet</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={childVariants}>
              Passionate servant of God with a deep desire to know God and make
              Him known
            </motion.p>

            <motion.p className="hero-description" variants={childVariants}>
              Founder and Lead Pastor of Reign City Chapel, Vision-bearer of Gen
              Z Loves Jesus, Author, Songwriter, and Speaker committed to
              equipping believers to walk in power, purpose and dominion.
            </motion.p>

            <motion.div className="hero-buttons" variants={childVariants}>
              <motion.a
                href="https://wa.me/p/31587987360848672/254727129129"
                target="_blank"
                className="btn btn-primary"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Get The Book
              </motion.a>
              <motion.a
                href="mailto:lumona@electrixitaty.com"
                target="_blank"
                className="btn btn-secondary"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(79, 209, 197, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Book Apostle
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            variants={imageVariants}
            whileHover={{ scale: 1.03, rotate: 2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="image-container">
              <img
                src={apostle}
                alt="Apostle Damorn Shunet"
                className="main-image"
              />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="stat-item" variants={childVariants}>
            <div className="stat-number">{stats[0].toLocaleString()}+</div>
            <div className="stat-label">Lives Impacted</div>
          </motion.div>
          <motion.div className="stat-item" variants={childVariants}>
            <div className="stat-number">{stats[1]}</div>
            <div className="stat-label">Books Authored</div>
          </motion.div>
          <motion.div className="stat-item" variants={childVariants}>
            <div className="stat-number">{stats[2]}+</div>
            <div className="stat-label">Events Yearly</div>
          </motion.div>
          <motion.div className="stat-item" variants={childVariants}>
            <div className="stat-number">{stats[3]}</div>
            <div className="stat-label">Thriving Ministries</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
