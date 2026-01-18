import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import book from "../assets/book/book.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Verified Reader",
      role: "Book Reader",
      image: book,
      rating: 5,
      text: `The unseen advantage is a book worth reading.
My mentality has been changed from chapter to chapter.
My eyes have been opened and enlightened.

The spiritual laws and realms of dimensions have opened my eyes to view the spiritual realm differently.
My prayer life has improved, and my words have truly begun to shape my world.

Fun fact:
This book reveals something new every time you read it.
Shalom 🙏🏻`,
    },
    {
      name: "Faith Builder",
      role: "Christian Reader",
      image: book,
      rating: 5,
      text: `This book gave me clarity and confidence in my Christian journey.
It awakened a deeper hunger to seek and know God.

My favorite chapter was Chapter 14, Kingdom Strategies for War 💯.
A powerful and transformational read.`,
    },
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Readers Are Saying
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real testimonies from readers whose lives were impacted
        </motion.p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="quote-bg">“</span>

              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-footer">
                <div className="testimonial-user">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>

                <div className="testimonial-rating">{"★".repeat(t.rating)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
