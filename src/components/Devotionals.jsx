import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react"; // Add useCallback
import { motion, AnimatePresence } from "framer-motion";
import "./Devotionals.css";
import debounce from "lodash/debounce";
import { sanityClient } from "../sanityClient";

export default function Devotionals() {
  const [devotionals, setDevotionals] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "devotional"] | order(date desc) {
        _id,
        title,
        author,
        date,
        verse,
        excerpt,
        content,
        confession,
        tags
      }`,
      )
      .then(setDevotionals)
      .catch(console.error);
  }, []);

  /* ----------------------------- STATE ----------------------------- */
  const [query, setQuery] = useState("");
  const [authorFilter] = useState("All"); // Remove setAuthorFilter if not used
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState(null);
  const observerRef = useRef(null);

  /* ----------------------------- FILTERING ----------------------------- */
  // Remove unused authors variable or use it if needed
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return devotionals.filter((d) => {
      const matchAuthor = authorFilter === "All" || d.author === authorFilter;
      const matchQuery =
        q === "" ||
        d.title.toLowerCase().includes(q) ||
        d.excerpt.toLowerCase().includes(q) ||
        (d.tags && d.tags.some((t) => t.toLowerCase().includes(q)));
      return matchAuthor && matchQuery;
    });
  }, [query, authorFilter, devotionals]); // Add devotionals to dependencies

  /* ----------------------------- INFINITE SCROLL ----------------------------- */
  const itemsToShow = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );
  const hasMore = visibleCount < filtered.length;

  // Use useCallback for loadMore to prevent infinite re-renders
  const loadMore = useCallback(() => {
    if (hasMore) setVisibleCount((prev) => prev + 6);
  }, [hasMore]);

  // Intersection Observer for auto-load
  useEffect(() => {
    if (observerRef.current && hasMore) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) loadMore();
        },
        { threshold: 0.1 },
      );
      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [hasMore, loadMore]); // Add loadMore to dependencies

  // Debounced search
  const debouncedSetQuery = debounce(setQuery, 300);

  /* ----------------------------- FORMAT DATE ----------------------------- */
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  /* ----------------------------- MODAL SCROLL LOCK ----------------------------- */
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <section id="devotionals" className="devotionals-section">
      <div className="container">
        {/* HEADER */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Daily Devotionals
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Timeless wisdom to inspire your faith journey. Explore profound
          insights and spiritual guidance.
        </motion.p>

        {/* CONTROLS */}
        <div className="dev-controls">
          <div className="search-wrapper">
            <input
              type="search"
              placeholder="Search by title, excerpt, or tag..."
              onChange={(e) => debouncedSetQuery(e.target.value)}
            />
          </div>
          {/* <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
          >
            {authors.map((a) => (
              <option key={a} value={a}>
                Author: {a}
              </option>
            ))}
          </select> */}
        </div>

        {/* GRID */}
        <div className="dev-grid">
          <AnimatePresence>
            {itemsToShow.map((d, index) => (
              <motion.div
                key={d._id}
                className="dev-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 40px rgba(212, 175, 55, 0.15)",
                }}
                onClick={() => setSelected(d)}
              >
                <h3 className="dev-title">{d.title}</h3>
                <p className="dev-meta">
                  {d.author} • {formatDate(d.date)}
                </p>
                <p className="dev-excerpt">{d.excerpt}</p>
                <div className="dev-tags">
                  {d.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE / INFINITE SCROLL TRIGGER */}
        {hasMore && (
          <div ref={observerRef} className="load-more-trigger">
            <motion.button
              className="btn btn-secondary"
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
            >
              Load More Devotionals
            </motion.button>
          </div>
        )}

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="dev-modal-backdrop"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="dev-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
                <h2 className="modal-title">{selected.title}</h2>
                <p className="modal-meta">
                  By {selected.author} • {formatDate(selected.date)}
                </p>
                <div className="modal-verse">
                  <h4>Scripture</h4>
                  <pre>{selected.verse}</pre>
                </div>
                <div className="modal-content">
                  <h4>Reflection</h4>
                  {selected.content.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {selected.confession && (
                  <div className="modal-confession">
                    <h4>Daily Confession</h4>
                    <p>{selected.confession}</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
