import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { ChevronRight, BookOpen } from "lucide-react";
import "../styles/Blog.css";

const BlogSection = () => {
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
