import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { contactInfo, socialLinks } from "../../utils/data";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <SectionHeader
          title="Let's Create Something Amazing"
          subtitle="Get In Touch"
          align="center"
        />

        <div className="contact-section__content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info__header">
              <h3 className="contact-info__title">
                Ready to Start Your Project?
              </h3>
              <p className="contact-info__description">
                Let's discuss how we can bring your vision to life with
                innovative design and cutting-edge technology.
              </p>
            </div>

            <div className="contact-info__items">
              {contactInfo.map((info, index) => (
                <div key={info.id} className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <div className="icon-circle">{info.icon}</div>
                  </div>
                  <div className="contact-info-item__content">
                    <h4 className="contact-info-item__title">{info.title}</h4>
                    <p className="contact-info-item__value">{info.value}</p>
                    {info.description && (
                      <p className="contact-info-item__description">
                        {info.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h4 className="contact-social__title">Follow Our Journey</h4>
              <div className="contact-social__links">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="contact-social__link"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={social.name}
                  >
                    <span className="contact-social__icon">{social.icon}</span>
                    <span className="contact-social__name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-description">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group form-group--full">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group form-group--full">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your project..."
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>

              {isSubmitted && (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <div className="success-message">
                    <h4>Message Sent Successfully!</h4>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>

            {/* Form Decoration */}
            <div className="form-decoration">
              <div className="decoration-orb decoration-orb--1"></div>
              <div className="decoration-orb decoration-orb--2"></div>
              <div className="decoration-orb decoration-orb--3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-section__background">
        <div className="contact-shape contact-shape--1"></div>
        <div className="contact-shape contact-shape--2"></div>
        <div className="contact-shape contact-shape--3"></div>
      </div>
    </section>
  );
};

export default ContactSection;
