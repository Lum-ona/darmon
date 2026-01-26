import { useState, useEffect, useMemo } from "react";
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
import PartnerModal from "../components/PartnerModal";

export default function Home() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = useMemo(
    () => [
      { name: "OVERVIEW", id: "about" },
      { name: "DEVOTIONALS", id: "devotionals" },
      { name: "PODCASTS", id: "sermons" },
      { name: "INVITE ME", id: "contact" },
      { name: "PARTNER WITH ME", id: "partner" },
    ],
    [],
  );

  const visibleNavItems = useMemo(() => {
    if (isMobile) {
      return navItems.slice(-2); // last two only
    }
    return navItems;
  }, [isMobile, navItems]);

  useEffect(() => {
    if (isMobile) return;

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
  }, [navItems, isMobile]);

  const scrollToSection = (id) => {
    if (id === "partner") {
      setIsPartnerModalOpen(true);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isMobile && visibleNavItems.length) {
      setActiveSection(visibleNavItems[visibleNavItems.length - 1].id);
    }
  }, [isMobile, visibleNavItems]);

  return (
    <div className="App">
      <Header />
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
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
          {visibleNavItems.map((item) => (
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
