import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page or blog page
  const isHomePage = location.pathname === "/";
  const isBlogPage = location.pathname.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Always show scrolled style on other pages
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Handle navigation - either scroll on home page or navigate from other pages
  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // On home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    } else {
      // On other pages, navigate to home page with hash
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Ministry", id: "ministry" },
    { name: "Book", id: "book" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Devotionals", id: "devotionals" },
    { name: "Blog", id: "blog" },
    { name: "Sermons", id: "sermons" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <nav className="nav">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="logo-link">
              <span className="logo-text">Damorn Shunet</span>
            </Link>
          </motion.div>

          <div className="nav-items">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="nav-link"
                whileHover={{ scale: 1.05, color: "var(--primary-gold)" }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  color: "inherit",
                  padding: 0,
                  textDecoration: "none",
                }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Blog link that goes to blog page */}
            {isHomePage && (
              <Link to="/blog" className="nav-link blog-link">
                Blog
              </Link>
            )}
          </div>

          <motion.button
            className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="mobile-nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  color: "inherit",
                  padding: "1rem 2rem",
                  textDecoration: "none",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
