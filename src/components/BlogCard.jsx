import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
} from "lucide-react";

const BlogCard = ({ blog, variant = "default" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      className={`blog-card ${variant === "page" ? "blog-card-page" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/blog/${blog.id}`} className="blog-card-link">
        {/* Image Container */}
        <motion.div className="blog-card-image" variants={imageVariants}>
          <img src={blog.image} alt={blog.title} loading="lazy" />
          <div className="blog-card-image-overlay"></div>
          {blog.featured && (
            <div className="blog-card-featured-badge">
              <BookOpen size={12} />
              <span>Featured</span>
            </div>
          )}
          <div className="blog-card-category-tag">{blog.category}</div>
        </motion.div>

        {/* Content Container */}
        <div className="blog-card-content">
          {/* Tags */}
          <div className="blog-card-tags">
            {blog.tags.slice(0, 2).map((tag, index) => (
              <motion.span
                key={tag}
                className="blog-card-tag"
                variants={tagVariants}
                animate={isHovered ? "hover" : "initial"}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {tag}
              </motion.span>
            ))}
            {blog.tags.length > 2 && (
              <span className="blog-card-tag-more">
                +{blog.tags.length - 2}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="blog-card-title">{blog.title}</h3>

          {/* Excerpt */}
          <p className="blog-card-excerpt">{blog.excerpt}</p>

          {/* Meta Information */}
          <div className="blog-card-meta">
            <div className="blog-card-meta-left">
              <div className="blog-card-meta-item">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
              <div className="blog-card-meta-item">
                <Clock size={14} />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="blog-card-meta-right">
              <div className="blog-card-engagement-item">
                <Eye size={14} />
                <span>{blog.views.toLocaleString()}</span>
              </div>
              <div className="blog-card-engagement-item">
                <MessageCircle size={14} />
                <span>{blog.comments}</span>
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="blog-card-author-preview">
            <div className="blog-card-author-avatar">DS</div>
            <div className="blog-card-author-info">
              <div className="blog-card-author-name">{blog.author}</div>
              <div className="blog-card-author-role">Apostle & Teacher</div>
            </div>
          </div>

          {/* Read More Button */}
          <motion.div
            className="blog-card-read-more-btn"
            animate={{
              x: isHovered ? 5 : 0,
              color: isHovered ? "var(--primary-gold)" : "var(--accent-teal)",
            }}
            transition={{ duration: 0.2 }}
          >
            Read Full Article
            <motion.div
              className="blog-card-arrow"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        {isHovered && (
          <motion.div
            className="blog-card-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </Link>

      {/* Share Button */}
      <motion.button
        className="blog-card-share-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          // Share functionality here
          navigator.share?.({
            title: blog.title,
            text: blog.excerpt,
            url: window.location.origin + `/blog/${blog.id}`,
          });
        }}
      >
        <Share2 size={16} />
      </motion.button>
    </motion.article>
  );
};

export default BlogCard;
