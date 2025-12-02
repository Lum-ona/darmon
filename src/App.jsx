import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Ministry from "./components/Ministry";
import Book from "./components/Book";
import Testimonials from "./components/Testimonials";
import Sermons from "./components/Sermons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Devotionals from "./components/Devotionals";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Ministry />
      <Book />
      <Testimonials />
      <Devotionals />
      <Sermons />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
