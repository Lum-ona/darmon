import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaPodcast } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
  { icon: <FaPodcast />, url: "https://podcasts.apple.com" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <span className="logo-text">Darmon Shunet</span>
            </div>
            <p className="footer-description">
              Spreading the Gospel with Power, Purpose, and Divine Authority to
              all nations.
            </p>
            <div className="social-links">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <FooterColumn
              title="Ministry"
              links={[
                { label: "About Us", url: "#" },
                { label: "Our Beliefs", url: "#" },
                { label: "Leadership", url: "#" },
                { label: "Global Missions", url: "#" },
              ]}
              delay={0.1}
            />
            <FooterColumn
              title="Resources"
              links={[
                { label: "Sermons", url: "#" },
                { label: "Books", url: "#" },
                { label: "Articles", url: "#" },
                { label: "Prayer Requests", url: "#" },
              ]}
              delay={0.2}
            />
            <FooterColumn
              title="Connect"
              links={[
                { label: "Events", url: "#" },
                { label: "Volunteer", url: "#" },
                { label: "Give", url: "#" },
                { label: "Contact", url: "#" },
              ]}
              delay={0.3}
            />
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Apostle Darmon Shunet Ministries.
            All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links, delay }) => (
  <motion.div
    className="footer-column"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    <h4>{title}</h4>
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href="/about">{link.label}</a>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Footer;
