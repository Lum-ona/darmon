import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiGlobe, FiCpu } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-v3">
      {/* Decorative Top Border */}
      <div className="footer-top-line">
        <div className="line-glow" />
      </div>

      <div className="footer-container-v3">
        <div className="footer-main-grid">
          {/* BRAND COLUMN */}
          <div className="footer-brand-v3">
            <motion.div
              className="brand-logo-v3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h2 className="footer-logo-text">
                DAMORN <span className="stroke-text">SHUNET</span>
              </h2>
            </motion.div>
            <p className="brand-manifesto">
              Advancing the Kingdom through Apostolic Intelligence and Prophetic
              Clarity. Establishing a standard of excellence for the next
              generation of believers.
            </p>
            <div className="footer-social-v3">
              {[
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/damornshunet/",
                },
                {
                  icon: <FaYoutube />,
                  url: "https://www.youtube.com/@damornshunet7062",
                },
                {
                  icon: <FaTiktok />,
                  url: "https://www.tiktok.com/@damornshunet",
                },
              ].map((item, i) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="social-icon-v3"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="footer-nav-group">
            <div className="footer-col-v3">
              <h4 className="col-title">TRANSITIONS</h4>
              <a href="#about">The Mandate</a>
              <a href="#contact">Global Booking</a>
            </div>

            <div className="footer-col-v3">
              <h4 className="col-title">RESOURCES</h4>
              <a href="#sermons">Media Archive</a>
              <a href="#blog">Intelligence Log</a>
            </div>
          </div>

          {/* NEWSLETTER/CTA COLUMN */}
          <div className="footer-newsletter-v3">
            <h4 className="col-title">JOIN NEWSLETTER</h4>
            <p>
              Stay Alert, soon you'll be able to Join the digital remnant for
              weekly transmissions.
            </p>
            {/* <div className="footer-input-box">
              <input type="email" placeholder="ENCRYPTED EMAIL" />
              <button>
                <FiArrowUpRight />
              </button>
            </div> */}
          </div>
        </div>

        {/* BOTTOM TECHNICAL BAR */}
        <div className="footer-bottom-v3">
          <div className="bottom-meta">
            <span className="meta-item">
              <FiCpu /> SYNC_STATUS: OPTIMAL
            </span>
            <span className="meta-item">
              <FiGlobe /> REGION: NAIROBI, GLOBAL
            </span>
          </div>

          <div className="bottom-copyright">
            <p>&copy; {currentYear} DAMORN SHUNET MINISTRIES</p>
          </div>

          <div className="bottom-legal">
            <a href="#">PRIVACY_VAULT</a>
            <span className="divider">/</span>
            <a href="#">LEGAL_DECREE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
