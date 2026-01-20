import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { ChevronRight, Sparkles } from "lucide-react";
import "../styles/BlogSection.css";
import { featuredBlogs } from "../data/blogs";

const BlogSection = () => {
  return (
    <section className="blog-section-modern" id="blog">
      {/* Dynamic Background Pattern */}
      <div className="blog-mesh-grid" />
      <div className="blog-glow-orb" />

      <div className="blog-section-container">
        {/* Section Header */}
        <header className="blog-modern-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="blog-header-left"
          >
            <div className="blog-badge-glow">
              <Sparkles size={14} className="sparkle-icon" />
              <span>Apostolic Wisdom</span>
            </div>
            <h2 className="blog-title-main">
              Divine Revelations & <br />
              <span className="text-outline">Kingdom Teachings</span>
            </h2>
          </motion.div>

          <motion.div
            className="blog-header-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Deep biblical insights and prophetic revelations to transform your
              spiritual walk.
            </p>
          </motion.div>
        </header>

        {/* Blog Grid with Staggered Entrance */}
        <div className="blog-main-grid">
          {featuredBlogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div className="blog-footer-cta" whileHover={{ scale: 1.01 }}>
          <div className="cta-glass-blur" />
          <div className="cta-content">
            <div className="cta-text">
              <h3>Hungry for More Revelation?</h3>
              <p>Join thousands of readers in our full apostolic archive.</p>
            </div>
            <Link to="/blog" className="blog-view-all-btn">
              Explore Archive
              <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
