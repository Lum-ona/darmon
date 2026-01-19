import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogs, blogCategories } from "../data/blogs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, Filter, BookOpen, Terminal, LayoutGrid } from "lucide-react";
import "../styles/BlogPage.css";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const category = searchParams.get("category") || "All";
    setActiveCategory(category);
  }, [searchParams]);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchParams({ category });
  };

  return (
    <div className="blog-archive-v3">
      <Header />

      {/* Hero: Apostolic Archive Style */}
      <section className="blog-hero-v3">
        <div className="hero-grid-overlay" />
        <div className="blog-page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-v3"
          >
            <div className="archive-badge">
              <Terminal size={14} />
              <span>DATABASE_ACCESS: GRANTED</span>
            </div>
            <h1 className="archive-title">
              Apostolic <span className="stroke-text">Archives</span> & <br />
              <span className="gold-text">Revelations</span>
            </h1>
            <p className="archive-subtitle">
              Encrypted insights and prophetic transmissions decoded for the
              21st-century remnant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terminal Controls */}
      <section className="blog-controls-v3">
        <div className="blog-page-container">
          <div className="controls-wrapper-v3">
            <div className="search-terminal-v3">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="SEARCH_LOGS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}>[CLEAR]</button>
              )}
            </div>

            <div className="filter-terminal-v3">
              <Filter size={16} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">FILTER: FEATURED</option>
                <option value="recent">FILTER: RECENT</option>
                <option value="popular">FILTER: POPULAR</option>
              </select>
            </div>
          </div>

          <div className="category-nav-v3">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`cat-btn-v3 ${activeCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat.toUpperCase()}
                {activeCategory === cat && (
                  <motion.div layoutId="underline" className="cat-underline" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="blog-results-v3">
        <div className="blog-page-container">
          <div className="results-header-v3">
            <LayoutGrid size={14} />
            <span className="results-count">
              FOUND: <span>{filteredBlogs.length}</span> ENTRIES
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              className="blog-grid-v3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <BlogCard blog={blog} variant="page" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
