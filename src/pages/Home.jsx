import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import MinimalProduct from "../sections/MinimalProduct/MinimalProduct.jsx";
import FeaturedRooms from "../sections/FeaturedRooms/FeaturedRooms.jsx";
import BagStore from "../sections/BagStore/BagStore.jsx";
import SculptureShowcase from "../sections/SculptureShowcase/SculptureShowcase.jsx";
import GalleryShowcase from "../sections/GalleryShowcase/GalleryShowcase.jsx";
import ContactSection from "../sections/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <MinimalProduct />
        <FeaturedRooms />
        <BagStore />
        <SculptureShowcase />
        <GalleryShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
