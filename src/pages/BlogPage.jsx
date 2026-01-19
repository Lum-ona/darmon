import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogs, blogCategories } from "../data/blogs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, Filter, BookOpen } from "lucide-react";
import "../styles/Blog.css";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [isLoading, setIsLoading] = useState(false);

  // Get category from URL or default to "All"
  useEffect(() => {
    const category = searchParams.get("category") || "All";
    setActiveCategory(category);
  }, [searchParams]);

  // Filter blogs based on active filters
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return b.featured - a.featured || b.views - a.views;
      case "popular":
        return b.views - a.views;
      case "recent":
        return new Date(b.date) - new Date(a.date);
      case "comments":
        return b.comments - a.comments;
      default:
        return 0;
    }
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchParams({ category });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="blog-page">
      <Header />

      {/* Hero Section */}
      <section className="blog-page-hero">
        <div className="blog-page-container">
          <motion.div
            className="blog-page-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="blog-page-hero-badge">
              <BookOpen size={20} />
              <span>APOSTOLIC ARCHIVES</span>
            </div>

            <h1 className="blog-page-hero-title">
              Dive Deep Into
              <span className="blog-page-gradient-text">
                {" "}
                Apostolic Revelation
              </span>
            </h1>

            <p className="blog-page-hero-subtitle">
              Explore in-depth teachings, prophetic insights, and practical
              kingdom principles from Apostle Darmon Shunet. Transform your
              spiritual walk with timeless wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="blog-page-main">
        <div className="blog-page-container">
          {/* Search and Filters */}
          <motion.div
            className="blog-page-filters-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="blog-page-search-bar" onSubmit={handleSearch}>
              <div className="blog-page-search-input">
                <Search size={20} className="blog-page-search-icon" />
                <input
                  type="text"
                  placeholder="Search teachings, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="blog-page-clear-search"
                    onClick={() => setSearchQuery("")}
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="blog-page-search-btn"
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Search"}
              </button>
            </form>

            <div className="blog-page-filter-controls">
              <div className="blog-page-sort-controls">
                <Filter size={18} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured First</option>
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="comments">Most Comments</option>
                </select>
              </div>

              <div className="blog-page-results-count">
                {filteredBlogs.length}{" "}
                {filteredBlogs.length === 1 ? "Article" : "Articles"} Found
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="blog-page-category-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="blog-page-categories-container">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  className={`blog-page-category-pill ${activeCategory === category ? "blog-page-active" : ""}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      className="blog-page-active-dot"
                      layoutId="activeDot"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div
                className="blog-page-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={activeCategory + searchQuery + sortBy}
              >
                {sortedBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <BlogCard blog={blog} variant="page" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="blog-page-no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="blog-page-no-results-icon">📖</div>
                <h3>No Articles Found</h3>
                <p>
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setSearchParams({});
                  }}
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
