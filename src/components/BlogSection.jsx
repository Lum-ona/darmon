import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { featuredBlogs, blogCategories } from "../data/blogs";
import BlogCard from "./BlogCard";
import { ChevronRight, BookOpen, TrendingUp, Clock } from "lucide-react";
import "../styles/Blog.css";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-section-container">
        {/* Section Header */}
        <motion.div
          className="blog-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="blog-section-label">
            <BookOpen size={20} />
            <span>APOSTOLIC INSIGHTS</span>
          </div>

          <h2 className="blog-section-title">
            Divine Revelations &<br />
            <span className="blog-section-gradient-text">
              {" "}
              Kingdom Teachings
            </span>
          </h2>

          <p className="blog-section-description">
            Deep biblical insights, prophetic revelations, and practical kingdom
            principles from Apostle Darmon Shunet. Transform your spiritual walk
            with apostolic wisdom.
          </p>
        </motion.div>

        {/* Stats Banner */}
        {/* <motion.div
          className="blog-section-stats-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="blog-section-stat-item">
            <div className="blog-section-stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="blog-section-stat-content">
              <div className="blog-section-stat-number">12K+</div>
              <div className="blog-section-stat-label">Monthly Readers</div>
            </div>
          </div>

          <div className="blog-section-divider"></div>

          <div className="blog-section-stat-item">
            <div className="blog-section-stat-icon">
              <BookOpen size={24} />
            </div>
            <div className="blog-section-stat-content">
              <div className="blog-section-stat-number">45+</div>
              <div className="blog-section-stat-label">Articles Published</div>
            </div>
          </div>

          <div className="blog-section-divider"></div>

          <div className="blog-section-stat-item">
            <div className="blog-section-stat-icon">
              <Clock size={24} />
            </div>
            <div className="blog-section-stat-content">
              <div className="blog-section-stat-number">5-15</div>
              <div className="blog-section-stat-label">Min Read Time</div>
            </div>
          </div>
        </motion.div> */}

        {/* Category Filters */}
        {/* <motion.div
          className="blog-section-category-filters"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogCategories.map((category, index) => (
            <motion.button
              key={category}
              className={`blog-section-category-filter ${activeCategory === category ? "blog-section-active" : ""}`}
              onClick={() => setActiveCategory(category)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="blog-section-active-indicator"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Featured Blog Highlight */}
        {/* <motion.div
          className="blog-section-featured-blog-container"
          variants={featuredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredBlogs[0] && (
            <Link
              to={`/blog/${featuredBlogs[0].id}`}
              className="blog-section-featured-blog"
            >
              <div className="blog-section-featured-image">
                <img
                  src={featuredBlogs[0].image}
                  alt={featuredBlogs[0].title}
                />
                <div className="blog-section-featured-badge">FEATURED</div>
                <div className="blog-section-image-overlay"></div>
              </div>

              <div className="blog-section-featured-content">
                <div className="blog-section-featured-category">
                  {featuredBlogs[0].category}
                </div>
                <h3 className="blog-section-featured-title">
                  {featuredBlogs[0].title}
                </h3>
                <p className="blog-section-featured-excerpt">
                  {featuredBlogs[0].excerpt}
                </p>

                <div className="blog-section-featured-meta">
                  <div className="blog-section-author-info">
                    <div className="blog-section-author-avatar">DS</div>
                    <div>
                      <div className="blog-section-author-name">
                        {featuredBlogs[0].author}
                      </div>
                      <div className="blog-section-post-date">
                        {featuredBlogs[0].date} • {featuredBlogs[0].readTime}
                      </div>
                    </div>
                  </div>

                  <div className="blog-section-engagement-stats">
                    <div className="blog-section-engagement-item">
                      <span className="blog-section-engagement-icon">👁️</span>
                      <span>{featuredBlogs[0].views.toLocaleString()}</span>
                    </div>
                    <div className="blog-section-engagement-item">
                      <span className="blog-section-engagement-icon">💬</span>
                      <span>{featuredBlogs[0].comments}</span>
                    </div>
                    <div className="blog-section-engagement-item">
                      <span className="blog-section-engagement-icon">🔄</span>
                      <span>{featuredBlogs[0].shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </motion.div> */}

        {/* Blog Grid */}
        <motion.div
          className="blog-section-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredBlogs.slice(0).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="blog-section-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="blog-section-cta-content">
            <h3>Hungry for More Revelation?</h3>
            <p>
              Explore all teachings, prophetic insights, and apostolic wisdom in
              our full blog archive.
            </p>
          </div>
          <Link to="/blog" className="btn btn-secondary">
            View All Articles
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
