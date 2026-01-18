import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  User,
  TrendingUp,
  Heart,
} from "lucide-react";
import "../styles/Blog.css";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === slug);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog?.comments || 0);
  const [viewCount, setViewCount] = useState(blog?.views || 0);
  const [shareUrl, setShareUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (!blog) {
      navigate("/blog");
      return;
    }

    // Increment view count (simulated)
    setViewCount((prev) => prev + 1);

    // Set share URL
    setShareUrl(window.location.href);

    // Find related blogs
    const related = blogs
      .filter((b) => b.id !== slug && b.category === blog.category)
      .slice(0, 3);
    setRelatedBlogs(related);

    // Load comments (simulated)
    setTimeout(() => {
      setComments([
        {
          id: 1,
          user: "Sarah M.",
          text: "This teaching transformed my prayer life!",
          time: "2 days ago",
          likes: 12,
        },
        {
          id: 2,
          user: "Pastor James",
          text: "Deep revelation! Shared this with our church leadership team.",
          time: "1 week ago",
          likes: 8,
        },
        {
          id: 3,
          user: "Michael T.",
          text: "The part about positional authority really hit home. Thank you!",
          time: "3 days ago",
          likes: 5,
        },
      ]);
    }, 1000);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog, slug, navigate]);

  if (!blog) return null;

  const handleShare = (platform) => {
    const text = `Check out this teaching by Apostle Darmon Shunet: ${blog.title}`;
    const url = shareUrl;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(blog.title)}`,
          "_blank",
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        break;
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: "You",
      text: comment,
      time: "Just now",
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  const renderMarkdown = (content) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="blog-post-h1" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="blog-post-h2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="blog-post-h3" {...props} />
          ),
          p: ({ node, ...props }) => <p className="blog-post-p" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="blog-post-ul" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="blog-post-ol" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="blog-post-li" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="blog-post-blockquote" {...props} />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return (
    <div className="blog-post">
      <Header />

      {/* Back Button */}
      <motion.button
        className="blog-post-back-button"
        onClick={() => navigate("/blog")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={20} />
        Back to Articles
      </motion.button>

      {/* Hero Section */}
      <section className="blog-post-hero">
        <div className="blog-post-container">
          <motion.div
            className="blog-post-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="blog-post-category">{blog.category}</div>

            <h1 className="blog-post-title">{blog.title}</h1>

            <p className="blog-post-excerpt">{blog.excerpt}</p>

            <div className="blog-post-meta">
              <div className="blog-post-author-info">
                <div className="blog-post-author-avatar">
                  <User size={20} />
                </div>
                <div>
                  <div className="blog-post-author-name">{blog.author}</div>
                  <div className="blog-post-author-role">Apostle & Teacher</div>
                </div>
              </div>

              <div className="blog-post-meta-stats">
                <div className="blog-post-meta-item">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="blog-post-meta-item">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
                <div className="blog-post-meta-item">
                  <Eye size={16} />
                  <span>{viewCount.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div
          className="blog-post-featured-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={blog.image} alt={blog.title} />
          <div className="blog-post-image-gradient"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="blog-post-main">
        <div className="blog-post-container">
          <div className="blog-post-layout">
            {/* Article Content */}
            <article className="blog-post-content">
              <motion.div
                className="blog-post-content-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {renderMarkdown(blog.content)}
              </motion.div>

              {/* Tags */}
              <div className="blog-post-tags">
                {blog.tags.map((tag) => (
                  <span key={tag} className="blog-post-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engagement Section */}
              <div className="blog-post-engagement-section">
                <div className="blog-post-engagement-buttons">
                  <button
                    className={`blog-post-engagement-btn blog-post-like-btn ${isLiked ? "blog-post-liked" : ""}`}
                    onClick={handleLike}
                  >
                    <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                    <span>{likeCount}</span>
                  </button>

                  <button
                    className={`blog-post-engagement-btn blog-post-bookmark-btn ${isBookmarked ? "blog-post-bookmarked" : ""}`}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark
                      size={20}
                      fill={isBookmarked ? "currentColor" : "none"}
                    />
                    <span>Save</span>
                  </button>
                </div>

                <div className="blog-post-share-section">
                  <span>Share this teaching:</span>
                  <div className="blog-post-share-buttons">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="blog-post-share-btn blog-post-facebook"
                    >
                      <Facebook size={18} />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="blog-post-share-btn blog-post-twitter"
                    >
                      <Twitter size={18} />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="blog-post-share-btn blog-post-linkedin"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="blog-post-share-btn blog-post-copy"
                    >
                      {isCopied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              {/* Author Card */}
              <motion.div
                className="blog-post-author-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="blog-post-author-header">
                  <div className="blog-post-author-avatar-large">DS</div>
                  <h3>Apostle Darmon Shunet</h3>
                  <p>Founder & Lead Pastor, Reign City Chapel</p>
                </div>

                <div className="blog-post-author-stats">
                  <div className="blog-post-author-stat">
                    <TrendingUp size={16} />
                    <span>45+ Articles</span>
                  </div>
                  <div className="blog-post-author-stat">
                    <MessageCircle size={16} />
                    <span>5,000+ Comments</span>
                  </div>
                  <div className="blog-post-author-stat">
                    <Eye size={16} />
                    <span>500K+ Views</span>
                  </div>
                </div>

                <p className="blog-post-author-bio">
                  Passionate about equipping believers to walk in power,
                  purpose, and dominion. Author, songwriter, and speaker
                  committed to making Jesus known in every sphere of society.
                </p>
              </motion.div>

              {/* Related Articles */}
              <motion.div
                className="blog-post-related-articles"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3>Related Teachings</h3>
                <div className="blog-post-related-list">
                  {relatedBlogs.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="blog-post-related-item"
                    >
                      <div className="blog-post-related-image">
                        <img src={related.image} alt={related.title} />
                      </div>
                      <div className="blog-post-related-content">
                        <h4>{related.title}</h4>
                        <div className="blog-post-related-meta">
                          <span>{related.date}</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>

          {/* Comments Section */}
          <motion.section
            className="blog-post-comments-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="blog-post-comments-header">
              <h2>Community Discussion</h2>
              <div className="blog-post-comments-count">
                <MessageCircle size={20} />
                <span>{comments.length} Comments</span>
              </div>
            </div>

            {/* Comment Form */}
            <form
              className="blog-post-comment-form"
              onSubmit={handleSubmitComment}
            >
              <div className="blog-post-form-header">
                <h3>Share Your Insight</h3>
                <p>
                  Join the conversation and share how this teaching impacted
                  you.
                </p>
              </div>

              <div className="blog-post-form-group">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts, questions, or testimony..."
                  rows="4"
                  required
                />
              </div>

              <div className="blog-post-form-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </form>

            {/* Comments List */}
            <AnimatePresence>
              <div className="blog-post-comments-list">
                {comments.map((commentItem, index) => (
                  <motion.div
                    key={commentItem.id}
                    className="blog-post-comment-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="blog-post-comment-header">
                      <div className="blog-post-comment-author">
                        <div className="blog-post-comment-avatar">
                          {commentItem.user.charAt(0)}
                        </div>
                        <div>
                          <div className="blog-post-comment-name">
                            {commentItem.user}
                          </div>
                          <div className="blog-post-comment-time">
                            {commentItem.time}
                          </div>
                        </div>
                      </div>
                      <button className="blog-post-comment-like">
                        <Heart size={16} />
                        <span>{commentItem.likes}</span>
                      </button>
                    </div>

                    <div className="blog-post-comment-body">
                      <p>{commentItem.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
