import React from "react";
import { motion } from "framer-motion";
import "./Ministry.css";
import regin from "../assets/gallery/IMG_1241.jpg";
import genz from "../assets/gallery/DSC00424.jpg";
import author from "../assets/gallery/apostle_official2.jpeg";
import music from "../assets/gallery/IMG_1108.jpg";

const Ministry = () => {
  const ministries = [
    {
      image: regin,
      title: "Reign City Chapel",
      description:
        "Founder and Lead Pastor of a thriving Christ-centered ministry committed to equipping believers to walk in power, purpose and dominion. Sunday services at KICC, Aberdare Hall.",
      link: "https://www.instagram.com/reigncitychapel/",
    },
    {
      image: genz,
      title: "Gen Z Loves Jesus",
      description:
        "Vision-bearer and founder of a movement passionate about seeing Generation Z fall in love with Jesus, walk in His light, and impact the world through His love.",
      link: "https://www.instagram.com/genz_lovesjesus/",
    },
    {
      image: author,
      title: "Author & Writer",
      description:
        "Author of transformative books including 'What God Says About Your Identity' and 'The Unseen Advantage' that provide biblical insights into spiritual realities.",
      link: "https://wa.me/p/31587987360848672/254727129129",
    },
    {
      image: music,
      title: "Music Ministry",
      description:
        "Gifted artist and songwriter using music as a vessel to communicate the message of grace, faith, and devotion to Christ through worship-driven sound.",
      link: "https://www.youtube.com/watch?v=u17JGgXY194",
    },
  ];

  return (
    <section id="ministry" className="section ministry-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ministry & Mission
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Advancing God's Kingdom through various ministry expressions and
          platforms
        </motion.p>

        <div className="ministry-grid">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              className="ministry-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="ministry-image-container">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="ministry-image"
                />
                <div className="ministry-image-overlay"></div>
                <div className="ministry-content">
                  <h3 className="ministry-title">{ministry.title}</h3>
                  <p className="ministry-description">{ministry.description}</p>
                  <motion.a
                    href={ministry.link}
                    className="ministry-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn More →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministry;
