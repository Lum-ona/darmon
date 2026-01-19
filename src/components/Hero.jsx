import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../assets/gallery/darmon-flip.png";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "About", id: "about" },
    { name: "Book", id: "book" },
    { name: "Devotionals", id: "devotionals" },
    { name: "Blogs", id: "blog-section" },
    { name: "Sermons", id: "sermons" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check which section is currently in view
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
      if (window.scrollY < 300) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="home-hero-section" id="home">
      <div className="home-hero-bg-overlay" />
      <div className="home-hero-glow-orange" />

      <div className="home-hero-container">
        <div className="home-hero-grid">
          <div className="home-hero-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="home-hero-eyebrow">
                I'm Apostle, Lawyer, Singer & Author
              </span>
              <h1 className="home-hero-name">
                Damorn
                <br />
                Shunet
              </h1>
            </motion.div>

            <motion.div
              className="home-hero-bio-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="home-hero-tagline">
                Knowing God and making Him known.
              </h2>
              <p className="home-hero-description">
                Through preaching, writing, and music, I inspire
                transformation...
              </p>
            </motion.div>
          </div>

          <div className="home-hero-image-container">
            <div className="home-hero-image-wrapper">
              <motion.img
                src={heroImage}
                className="home-hero-main-img"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* STICKY DOCK NAVIGATION */}
      {/* <div className="dock-wrapper">
        <motion.nav
          className="home-hero-dock"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div
            className={`home-hero-dock-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            <span>Home</span>
          </div>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`home-hero-dock-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </motion.nav>
      </div> */}
    </section>
  );
}
