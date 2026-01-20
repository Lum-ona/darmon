import { motion } from "framer-motion";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import "./Testimonials.css";
import book from "../assets/book/book.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Verified Reader",
      role: "Kingdom Strategist",
      image: book,
      rating: 5,
      text: "The spiritual laws and realms of dimensions have opened my eyes to view the spiritual realm differently. My prayer life has improved, and my words have truly begun to shape my world.",
      tag: "Transformation",
    },
    {
      name: "Faith Builder",
      role: "Bible Scholar",
      image: book,
      rating: 5,
      text: "This book gave me clarity and confidence in my Christian journey. It awakened a deeper hunger to seek and know God. My favorite was Chapter 14!",
      tag: "Clarity",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section-modern">
      {/* VIBRANT BACKGROUND PATTERNS */}
      <div className="testimonials-bg-shapes">
        <motion.div
          className="shape circle-1"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="shape circle-2"
          animate={{ scale: [1, 1.5, 1], x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="testimonials-container">
        <div className="testi-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="testi-eyebrow">Voices of Impact</span>
            <h2 className="testi-title">
              Global <span>Testimonies</span>
            </h2>
          </motion.div>
        </div>

        <div className="testimonials-masonry">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              className="testi-card-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="testi-card-glass" />

              <div className="testi-top">
                <div className="testi-quote-icon">
                  <FiMessageSquare />
                </div>
                <div className="testi-tag">{t.tag}</div>
              </div>

              <p className="testi-main-text">"{t.text}"</p>

              <div className="testi-user-info">
                <div className="user-avatar-wrapper">
                  <img src={t.image} alt={t.name} />
                  <div className="avatar-glow" />
                </div>
                <div className="user-details">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
                <div className="user-rating">
                  <FiStar className="star-filled" />
                  <span>5.0</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
