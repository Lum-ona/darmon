import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUser, FiHash, FiX } from "react-icons/fi";
import "./Devotionals.css";
import debounce from "lodash/debounce";
import { sanityClient } from "../sanityClient";

export default function Devotionals() {
  const [devotionals, setDevotionals] = useState([]);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "devotional"] | order(date desc) {
        _id, title, author, date, verse, excerpt, content, confession, tags
      }`,
      )
      .then(setDevotionals)
      .catch(console.error);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return devotionals.filter(
      (d) =>
        q === "" ||
        d.title.toLowerCase().includes(q) ||
        (d.tags && d.tags.some((t) => t.toLowerCase().includes(q))),
    );
  }, [query, devotionals]);

  const itemsToShow = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );
  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    if (hasMore) setVisibleCount((prev) => prev + 6);
  }, [hasMore]);

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
  }, [hasMore, loadMore]);

  const debouncedSetQuery = debounce(setQuery, 300);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section id="devotionals" className="dev-section-modern">
      {/* BACKGROUND DECORATION */}
      <div className="dev-ambient-glow" />
      <div className="dev-scripture-bg">REVELATION • GRACE • TRUTH</div>

      <div className="dev-container">
        <header className="dev-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="dev-eyebrow">Daily Nourishment</span>
            <h2 className="dev-main-title">
              Spiritual <span>Insights</span>
            </h2>
          </motion.div>

          <div className="dev-search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic or tag..."
              onChange={(e) => debouncedSetQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="dev-grid-layout">
          <AnimatePresence mode="popLayout">
            {itemsToShow.map((d, index) => (
              <motion.div
                key={d._id}
                layout
                className={`dev-card-premium ${index % 3 === 0 ? "large" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(d)}
              >
                <div className="dev-card-date">{formatDate(d.date)}</div>
                <h3 className="dev-card-title">{d.title}</h3>
                <p className="dev-card-excerpt">{d.excerpt}</p>

                <div className="dev-card-footer">
                  <div className="dev-card-tags">
                    {d.tags?.slice(0, 2).map((t) => (
                      <span key={t}>
                        <FiHash />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="dev-card-readmore">Read Insight →</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div ref={observerRef} className="dev-loader">
            <div className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      {/* MODAL REDESIGN */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="dev-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="dev-modal-sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="dev-close-btn"
                onClick={() => setSelected(null)}
              >
                <FiX />
              </button>

              <div className="modal-inner">
                <div className="modal-header-info">
                  <span className="modal-date">
                    {formatDate(selected.date)}
                  </span>
                  <h2 className="modal-title-text">{selected.title}</h2>
                  <div className="modal-author">
                    <FiUser /> {selected.author}
                  </div>
                </div>

                <div className="modal-verse-card">
                  <div className="verse-icon">📖</div>
                  <p>{selected.verse}</p>
                </div>

                <div className="modal-body-text">
                  {selected.content.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {selected.confession && (
                  <div className="modal-confession-box">
                    <h5>Daily Confession</h5>
                    <p>{selected.confession}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
