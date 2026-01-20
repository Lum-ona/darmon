import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiStar, FiGlobe } from "react-icons/fi";
import "./Book.css";
import bookImg from "../assets/book/book.jpeg";

const Book = () => {
  const handleOrderClick = () => {
    window.open("https://wa.me/p/31587987360848672/254727129129", "_blank" rel="noopener noreferrer");
  };

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <section id="book" className="book-section-modern">
      {/* Background Pattern: Animated Grid */}
      <div className="book-grid-pattern" />
      <div className="book-blur-spotlight" />

      <div className="book-container-premium">
        <div className="book-layout">
          {/* LEFT: CONTENT AREA */}
          <div className="book-text-content">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="book-pretitle">Spiritual Literature</span>
              <h2 className="book-huge-title">
                The Unseen <br />
                <span>Advantage</span>
              </h2>
              <div className="book-accent-line" />

              <p className="book-lead-text">
                Understanding spiritual realities that govern the visible world.
                A journey into the dimensions of authority, warfare, and divine
                order.
              </p>

              <div className="book-feature-pills">
                <div className="pill">
                  <FiBookOpen /> Biblical Depth
                </div>
                <div className="pill">
                  <FiStar /> Prophetic Insight
                </div>
                <div className="pill">
                  <FiGlobe /> Global Impact
                </div>
              </div>

              <div className="book-purchase-zone">
                <div className="price-tag-modern">
                  <span className="currency">KES</span>
                  <span className="amount">1,500</span>
                  <span className="old-price">2,000</span>
                </div>

                <motion.button
                  className="premium-order-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOrderClick}
                >
                  Get Your Copy <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: INTERACTIVE 3D BOOK */}
          <div className="book-visual-center">
            <motion.div
              className="book-3d-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              style={{ rotateX, rotateY, perspective: 2000 }}
            >
              {/* The Book Object */}
              <div className="book-obj">
                <img
                  src={bookImg}
                  alt="The Unseen Advantage"
                  className="book-cover-img"
                />
                <div className="book-side-spine" />
                <div className="book-reflection" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="floating-bestseller"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Best Seller
              </motion.div>
            </motion.div>

            {/* Quick Metrics */}
            <div className="book-mini-metrics">
              <div className="metric-item">
                <strong>5K+</strong>
                <p>Readers</p>
              </div>
              <div className="metric-divider" />
              <div className="metric-item">
                <strong>4.9</strong>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
