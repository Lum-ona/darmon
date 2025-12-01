// you've done an awful job again, the screenshot attatched shows your horrible work.
// there's a lot of empty space, its too dark, items and paginations arrangment doesn't make sense, the modal doesn't work, the modal doesn't show the full content of devotional. its just the worst thing anyone could ever design. fix it
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Devotionals.css";

/**
 * NOTE:
 * - Replace the `devotionals` array with an API call when you have real data.
 * - Each devotional should be an object with: id, title, author, verse, excerpt, content, tags (optional), date.
 */

/* === SAMPLE DATA (start with 2; supports 100+ by replacing this array) === */
const devotionals = [
  {
    id: "favour-with-god",
    title: "Favour With God",
    author: "Apostle Damorn Shunet",
    date: "2024-03-21",
    verse: `Luke 1:28–30
“And having come in, the angel said to her, ‘Rejoice, highly favored one...’”`,
    excerpt:
      "Favour with God is one of the greatest advantages a person can have. It is when heaven singles you out to show you kindness...",
    content: `Favour with God is one of the greatest advantages a person can have. It is when heaven singles you out to show you kindness, not because...
      
(Full content continues here — paste the rest)`,
    confession:
      "Father, Thank You for Your favor upon my life. I declare that I am highly favored, deeply loved, and blessed beyond measure.",
    tags: ["favor", "grace"],
  },
  {
    id: "but-god-rich-in-mercy",
    title: "But God Who Is Rich in Mercy",
    author: "Apostle Damorn Shunet",
    date: "2024-02-15",
    verse: `Ephesians 2:1–7
“And you He made alive... But God, who is rich in mercy...”`,
    excerpt:
      "There are two words in Scripture that change everything — 'But God'. Those words break patterns of despair and rewrite our stories...",
    content: `There are two words in the Bible that change everything — “But God.” Those words break the pattern of despair and rewrite the story of our lives...
    
(Full content continues here — paste the rest)`,
    confession:
      "Father, Thank You for Your rich mercy that found me when I was lost. I declare my life is a testimony of Your mercy.",
    tags: ["mercy", "gospel"],
  },
];

/* === Helper: format date nicely === */
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

/* === Component === */
export default function Devotionals() {
  // UI state
  const [query, setQuery] = useState("");
  const [authorFilter, setAuthorFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6); // default cards per page
  const [selected, setSelected] = useState(null); // devotional object for modal
  const [loadMoreMode, setLoadMoreMode] = useState(false);

  // If you have >100 items, replace devotionals const with fetch and set to state.
  // Authors list for filter
  const authors = useMemo(() => {
    const setA = new Set(devotionals.map((d) => d.author));
    return ["All", ...Array.from(setA)];
  }, []);

  // Filter + search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return devotionals.filter((d) => {
      const matchesAuthor = authorFilter === "All" || d.author === authorFilter;
      const matchesQuery =
        q === "" ||
        d.title.toLowerCase().includes(q) ||
        d.excerpt.toLowerCase().includes(q) ||
        (d.tags && d.tags.join(" ").toLowerCase().includes(q));
      return matchesAuthor && matchesQuery;
    });
  }, [query, authorFilter]);

  // Pagination calculations
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  // Items to show
  const itemsToShow = useMemo(() => {
    if (loadMoreMode) {
      // show everything up-to a limit (e.g. page * pageSize) or all
      return filtered.slice(0, page * pageSize);
    }
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize, loadMoreMode]);

  // Modal close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Accessibility: prevent body scroll while modal open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
  }, [selected]);

  // small UI helpers
  const goToPage = (n) => {
    setPage(n);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <section id="devotionals" className="devotionals-section">
      <div className="devotionals-header">
        <div>
          <h2>Devotionals</h2>
          <p className="lead">
            Short, powerful devotionals to strengthen your walk. Browse, search,
            and read.
          </p>
        </div>

        <div className="devotional-controls">
          <input
            type="search"
            placeholder="Search title, excerpt or tags..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="search-input"
            aria-label="Search devotionals"
          />

          <select
            className="author-select"
            value={authorFilter}
            onChange={(e) => {
              setAuthorFilter(e.target.value);
              setPage(1);
            }}
            aria-label="Filter by author"
          >
            {authors.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>

          <select
            className="pagesize-select"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            aria-label="Items per page"
          >
            {[6, 8, 12, 20].map((n) => (
              <option key={n} value={n}>
                {n} / page
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="devotional-grid" role="list">
        {itemsToShow.map((d) => (
          <motion.article
            key={d.id}
            className="devotional-card"
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(d)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(d)}
          >
            <div className="card-meta">
              <div className="card-title">{d.title}</div>
              <div className="card-date">{formatDate(d.date)}</div>
            </div>

            <div className="card-body">
              <p className="card-excerpt">{d.excerpt}</p>
            </div>

            <div className="card-footer">
              <span className="card-author">{d.author}</span>
              <div className="card-tags">
                {(d.tags || []).slice(0, 3).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* pagination / controls */}
      <div className="devotional-footer">
        <div className="pagination-left">
          <div className="count">
            Showing {Math.min(itemsToShow.length, total)} of {total} results
          </div>
        </div>

        <div className="pagination-center" aria-hidden={false}>
          {!loadMoreMode && (
            <div className="pagination">
              <button
                className="page-btn"
                onClick={() => goToPage(Math.max(1, page - 1))}
                disabled={page <= 1}
              >
                Prev
              </button>

              {/* show limited range of page buttons for many pages */}
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                // show first, last, current +/-1, and ellipsis
                if (
                  p === 1 ||
                  p === totalPages ||
                  (p >= page - 1 && p <= page + 1) ||
                  (page <= 2 && p <= 4) ||
                  (page >= totalPages - 1 && p >= totalPages - 3)
                ) {
                  return (
                    <button
                      key={p}
                      className={`page-number ${p === page ? "active" : ""}`}
                      onClick={() => goToPage(p)}
                    >
                      {p}
                    </button>
                  );
                } else if (
                  (p === page - 2 && p > 1) ||
                  (p === page + 2 && p < totalPages)
                ) {
                  return (
                    <span key={"dot-" + p} className="dots">
                      …
                    </span>
                  );
                }
                return null;
              })}

              <button
                className="page-btn"
                onClick={() => goToPage(Math.min(totalPages, page + 1))}
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div>
          )}

          {/* Load more toggle */}
          <div className="load-more">
            <label className="load-more-label">
              <input
                type="checkbox"
                checked={loadMoreMode}
                onChange={(e) => setLoadMoreMode(e.target.checked)}
              />
              Load more (infinite style)
            </label>
          </div>
        </div>

        <div className="pagination-right">
          <div className="jump">
            <label>Jump to page</label>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={page}
              onChange={(e) =>
                goToPage(
                  Math.max(1, Math.min(totalPages, Number(e.target.value || 1)))
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.dialog
              className="devotional-modal"
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>

              <header className="modal-header">
                <h3>{selected.title}</h3>
                <div className="meta">
                  <span>{selected.author}</span> •{" "}
                  <span>{formatDate(selected.date)}</span>
                </div>
                {selected.tags && (
                  <div className="modal-tags">
                    {selected.tags.map((t) => (
                      <span key={t} className="tag small">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <section className="modal-verse">
                <pre>{selected.verse}</pre>
              </section>

              <section className="modal-body">
                <div className="modal-content">
                  <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>
                    {selected.content}
                  </p>
                </div>

                {selected.confession && (
                  <aside className="modal-confession">
                    <h4>Confession</h4>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {selected.confession}
                    </p>
                  </aside>
                )}
              </section>
            </motion.dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
