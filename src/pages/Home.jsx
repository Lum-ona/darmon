import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Ministry from "../components/Ministry";
import Book from "../components/Book";
import Testimonials from "../components/Testimonials";
import Sermons from "../components/Sermons";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Devotionals from "../components/Devotionals";
import BlogSection from "../components/BlogSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Book", id: "book" },
    { name: "Devotionals", id: "devotionals" },
    { name: "Blogs", id: "blog-section" },
    { name: "Sermons", id: "sermons" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Header />

      {/* 1. Pass 'home' id to Hero */}
      <div id="home">
        <Hero />
      </div>

      {/* 2. GLOBAL STICKY DOCK (Outside Hero) */}
      <div className="global-dock-container">
        <motion.nav
          className="home-hero-dock"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
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
      </div>

      {/* 3. Sections with IDs */}
      <div id="about">
        <About />
      </div>
      <Ministry />
      <div id="book">
        <Book />
      </div>
      <Testimonials />
      <div id="devotionals">
        <Devotionals />
      </div>
      <div id="blog-section">
        <BlogSection />
      </div>
      <div id="sermons">
        <Sermons />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
