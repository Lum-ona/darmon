import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import "../styles/BlogCard.css";

const BlogCard = ({ blog, index }) => {
  return (
    <motion.article
      className="blog-card-v2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/blog/${blog.id}`} className="blog-card-v2-link">
        <div className="blog-card-v2-image-box">
          <img src={blog.image} alt={blog.title} />
          <div className="image-scan-line" />
          <div className="category-pill">{blog.category}</div>
        </div>

        <div className="blog-card-v2-content">
          <div className="blog-card-v2-meta">
            <span>
              <Calendar size={14} /> {blog.date}
            </span>
            <span>
              <Clock size={14} /> {blog.readTime}
            </span>
          </div>

          <h3 className="blog-card-v2-title">{blog.title}</h3>
          <p className="blog-card-v2-excerpt">{blog.excerpt}</p>

          <div className="blog-card-v2-footer">
            <div className="author-small">
              <div className="avatar-mini">DS</div>
              <span>{blog.author}</span>
            </div>
            <div className="read-action">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
