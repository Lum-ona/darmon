import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  User,
  Heart,
  Shield,
} from "lucide-react";
import "../styles/BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === slug);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!blog) navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog, navigate]);

  if (!blog) return null;

  return (
    <div className="post-v3-root">
      <Header />

      {/* Scroll Progress Bar */}
      <motion.div className="reading-progress-bar" style={{ scaleX }} />

      <div className="post-v3-container">
        {/* Floating Back Control */}
        <motion.button
          className="post-v3-back"
          onClick={() => navigate("/blog")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={18} />
          <span>RETURN_TO_ARCHIVE</span>
        </motion.button>

        {/* HERO SECTION */}
        <header className="post-v3-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="post-v3-header-content"
          >
            <div className="post-v3-category-badge">{blog.category}</div>
            <h1 className="post-v3-title">
              {blog.title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="stroke-text">
                {blog.title.split(" ").slice(-1)}
              </span>
            </h1>

            <div className="post-v3-meta-bar">
              <div className="post-meta-group">
                <User size={14} /> <span>{blog.author}</span>
              </div>
              <div className="post-meta-group">
                <Calendar size={14} /> <span>{blog.date}</span>
              </div>
              <div className="post-meta-group">
                <Clock size={14} /> <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="post-v3-featured-frame"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img src={blog.image} alt={blog.title} />
            <div className="frame-overlay" />
          </motion.div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="post-v3-layout">
          <article className="post-v3-article">
            <div className="post-v3-content-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
              </ReactMarkdown>
            </div>

            <div className="post-v3-tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="v3-tag">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="post-v3-engagement">
              <div className="engagement-actions">
                <button
                  className={`action-btn ${isLiked ? "active" : ""}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    size={20}
                    fill={isLiked ? "var(--primary-gold)" : "none"}
                  />
                  <span>TRANSMIT_LOVE</span>
                </button>
                <button
                  className={`action-btn ${isBookmarked ? "active" : ""}`}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark
                    size={20}
                    fill={isBookmarked ? "var(--primary-gold)" : "none"}
                  />
                  <span>ARCHIVE_FILE</span>
                </button>
              </div>

              <div className="post-v3-share">
                <Facebook size={18} className="share-icon" />
                <Twitter size={18} className="share-icon" />
                <Share2 size={18} className="share-icon" />
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="post-v3-sidebar">
            <div className="sidebar-card author-card">
              <div className="author-glitch-avatar">DS</div>
              <h3>Apostle Darmon Shunet</h3>
              <p>
                Establishing Apostolic order and Prophetic clarity in the
                digital age.
              </p>
              <div className="author-badges">
                <div className="badge-item">
                  <Shield size={12} /> VERIFIED_MANDATE
                </div>
              </div>
            </div>

            <div className="sidebar-card related-card">
              <h4>LINKED_REVELATIONS</h4>
              <div className="related-links-v3">
                {blogs
                  .filter((b) => b.id !== slug)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="related-item-v3"
                    >
                      <div className="related-img">
                        <img src={related.image} alt="" />
                      </div>
                      <div className="related-info">
                        <h5>{related.title}</h5>
                        <span>{related.date}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
