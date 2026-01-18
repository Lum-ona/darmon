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
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Ministry />
      <Book />
      <Testimonials />
      <Devotionals />
      <BlogSection />
      <Sermons />
      <Contact />
      <Footer />
    </div>
  );
}
