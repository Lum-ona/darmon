import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import book from "../assets/book/book.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "",
      role: "",
      image: book,
      text: `The unseen advantage is a book worth reading.
My mentality has been changed from chapter to chapter.
My eyes has been opened and enlightened.
I honestly didn't know somethings until I started my journey with the book.
I have been reading the Bible but the unseen advantage unveils so much and helps me understand the word of God even more.

A  reminder from God that we are not victims but victors in Christ Jesus.

The spiritual laws and realms of dimensions have opened my eyes to view the spiritual realm differently.
Following these laws, my prayer life has improved knowing that the things I have been praying for following the 8 laws  that govern the spiritual realm, will come to pass according to the will of God.

My favourite quote " Your words build your world" 

The law of creation has really helped me to know that speaking those things that are not as tho they are actually works.

My life depends on the words I say, so I have changed the way I speak towards situations and everything that revolves around my life.

Fun fact:
The unseen advantage is full of mysteries, you read it again and again and get different revelations.

My advice, is to read it again and again.
There's something that we all need to know and understand.

Shalom🙏🏻`,
      rating: 5,
    },
    {
      name: "",
      role: "",
      image: book,
      text: `For me i would say it has given me clarity  and the confidence to navigate my christian journey at first i was unsure and afraid of what the journey would look like but after reading i've been able to grow drastically and to even gain more hunger to seek and know Him and i'm enjoying it .My best chapter was chapter 14 Kingdom strategies for war 💯.`,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Readers Are Saying
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-quote">”</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
