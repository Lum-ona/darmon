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
      tag: "Church Plant",
      description:
        "Founder and Lead Pastor. Sunday services at KICC, Aberdare Hall.",
      link: "https://www.instagram.com/reigncitychapel/",
    },
    {
      image: genz,
      title: "Gen Z Loves Jesus",
      tag: "Youth Movement",
      description:
        "A global movement seeing a generation fall in love with Jesus.",
      link: "https://www.instagram.com/genz_lovesjesus/",
    },
    {
      image: author,
      title: "Author & Writer",
      tag: "Literature",
      description: "Transformative books including 'The Unseen Advantage'.",
      link: "https://wa.me/p/31587987360848672/254727129129",
    },
    {
      image: music,
      title: "Music Ministry",
      tag: "Worship Artist",
      description:
        "Communicating grace and faith through worship-driven sound.",
      link: "https://www.youtube.com/watch?v=u17JGgXY194",
    },
  ];

  return (
    <section id="ministry" className="ministry-section">
      <div className="ministry-container">
        {/* SECTION HEADER */}
        <div className="ministry-header">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="ministry-eyebrow">Kingdom Impact</span>
            <h2 className="ministry-main-title">
              Ministries & <span>Mission</span>
            </h2>
          </motion.div>

          <motion.p
            className="ministry-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Advancing God's Kingdom through diverse platforms, from church
            planting to global youth movements and literature.
          </motion.p>
        </div>

        {/* MODERN BENTO GRID */}
        <div className="ministry-modern-grid">
          {ministries.map((item, index) => (
            <motion.div
              key={item.title}
              className={`ministry-box box-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="ministry-card-inner">
                <div className="ministry-image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="ministry-card-overlay" />
                </div>

                <div className="ministry-card-content">
                  <div className="card-top">
                    <span className="card-index">0{index + 1}</span>
                    <span className="card-tag">{item.tag}</span>
                  </div>

                  <div className="card-bottom">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <motion.a
                      href={item.link}
                      className="ministry-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Impact
                    </motion.a>
                  </div>
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
