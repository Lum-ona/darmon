import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import "./Header.css";
import logo from "../assets/gallery/darmon-logo-nobg.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Unified items (Header + Dock)
  const menuItems = [
    { name: "Home", path: "/", type: "link" },
    { name: "About", path: "/#about", type: "anchor" },
    { name: "Sermons", path: "/#sermons", type: "anchor" },
    { name: "Blog", path: "/blog", type: "link" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`site-header ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="header-container">
          <Link to="/" className="logo-wrapper">
            <img src={logo} alt="darmon shunet" className="header-logo" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              HOME
            </Link>
            <Link
              to="/blog"
              className={location.pathname.includes("/blog") ? "active" : ""}
            >
              BLOG
            </Link>
            <a
              href="https://wa.me/p/31587987360848672/254727129129"
              target="_blank"
              className="header-cta"
            >
              GET THE BOOK
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-content">
              <div className="menu-header">
                <span className="terminal-text">MENU_SYSTEM_v3.0</span>
              </div>

              <div className="mobile-links">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {item.type === "link" ? (
                      <Link to={item.path} className="mobile-link">
                        <span className="link-num">0{i + 1}</span>
                        {item.name}
                        <FiArrowRight className="arrow" />
                      </Link>
                    ) : (
                      <a href={item.path} className="mobile-link">
                        <span className="link-num">0{i + 1}</span>
                        {item.name}
                        <FiArrowRight className="arrow" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mobile-footer">
                <a
                  href="https://wa.me/p/31587987360848672/254727129129"
                  target="_blank"
                  className="mobile-cta"
                >
                  GET THE BOOK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
