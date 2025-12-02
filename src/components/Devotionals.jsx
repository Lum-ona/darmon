import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Devotionals.css";

export default function Devotionals() {
  const devotionals = [
    {
      id: "favour-with-god",
      title: "Favour With God",
      author: "Apostle Damorn Shunet",
      date: "2024-03-21",
      verse: `Luke 1:28–30
“And having come in, the angel said to her, ‘Rejoice, highly favored one, the Lord is with you; blessed are you among women!’ But when she saw him, she was troubled at his saying, and considered what manner of greeting this was. Then the angel said to her, ‘Do not be afraid, Mary, for you have found favor with God.’”
`,
      excerpt:
        "Favour with God is one of the greatest advantages a person can have. It is when heaven singles you out to show you kindness...",
      content: `Favour with God opens doors that effort cannot. It brings opportunities that hard work alone cannot earn. It makes you visible in places where you would otherwise be overlooked. The Bible says in Genesis 39 that Joseph “found favor” even in prison, and that favor positioned him to become a ruler in Egypt. When God’s favor rests on you, your environment does not determine your outcome.

Sometimes however, favor can produce conflict. Mary had to face questions, gossip, and the uncertainty of carrying something no one understood. But God’s favor always comes with an assurance of His presence. The angel said, “The Lord is with you.” That means when God favors you, He walks with you through the process, ensuring His purpose is fulfilled.

Favour is not random there are principles that attract it like growth, humility, and trust. It comes to those whose hearts are yielded to God. You don’t need to strive for it you need only to stay in alignment with His will. As you walk faithfully with Him, His favor will make room for you, speak for you, and sustain you where human strength cannot.
`,
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
“And you He made alive, who were dead in trespasses and sins, in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the sons of disobedience, among whom also we all once conducted ourselves in the lusts of our flesh, fulfilling the desires of the flesh and of the mind, and were by nature children of wrath, just as the others. But God, who is rich in mercy, because of His great love with which He loved us, even when we were dead in trespasses, made us alive together with Christ, (by grace you have been saved), and raised us up together, and made us sit together in the heavenly places in Christ Jesus, that in the ages to come He might show the exceeding riches of His grace in His kindness toward us in Christ Jesus.” - Ephesians 2:1–7
`,
      excerpt:
        "There are two words in Scripture that change everything — 'But God'. Those words break patterns of despair and rewrite our stories...",
      content: `There are two words in the Bible that change everything, But God. Those words break the pattern of despair and rewrite the story of our lives. Paul paints a dark picture of humanity here, dead in sin, slaves to the flesh, ruled by the enemy, and deserving of death. Then suddenly, mercy enters the story. But God, who is rich in mercy.

Think about that. God didn’t wait for us to get better, cleaner, or more obedient. While we were still in our mess, He loved us. He reached down when we were unreachable and made us alive again through Christ. This is the heartbeat of the gospel, the mercy of the Lord that finds us in death and breathes life again.

Every believer has a But God story. Times when you should have been gone, broken, or lost, but God intervened. His mercy rewrote your ending.

The truth is, mercy is not just something God gives it’s who He is. His mercy is richer than our mistakes and stronger than our failures.

Today, rest in that reality. You are living proof of His mercy. No matter what guilt or shame tries to speak, let the words But God silence them all.
`,
      confession:
        "Father, Thank You for Your rich mercy that found me when I was lost. I declare my life is a testimony of Your mercy.",
      tags: ["mercy", "gospel"],
    },
  ];

  /* -----------------------------  STATE  ----------------------------- */

  const [query, setQuery] = useState("");
  const [authorFilter, setAuthorFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [selected, setSelected] = useState(null);
  const [loadMoreMode, setLoadMoreMode] = useState(false);

  /* ----------------------------- FILTERING ----------------------------- */

  const authors = ["All", ...new Set(devotionals.map((d) => d.author))];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return devotionals.filter((d) => {
      const matchAuthor = authorFilter === "All" || d.author === authorFilter;
      const matchQuery =
        q === "" ||
        d.title.toLowerCase().includes(q) ||
        d.excerpt.toLowerCase().includes(q) ||
        (d.tags && d.tags.join(" ").toLowerCase().includes(q));

      return matchAuthor && matchQuery;
    });
  }, [query, authorFilter]);

  /* ----------------------------- PAGINATION ----------------------------- */

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const itemsToShow = useMemo(() => {
    if (loadMoreMode) return filtered.slice(0, page * pageSize);
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize, loadMoreMode]);

  /* ----------------------------- FORMAT DATE ----------------------------- */

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  /* ----------------------------- MODAL SCROLL LOCK ----------------------------- */

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <section className="devotionals-page">
      {/* HEADER */}
      <div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Devotionals
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Short, powerful devotionals to strengthen your walk.{" "}
        </motion.p>
      </div>
      <div className="dev-header">
        <div className="dev-controls">
          <div>
            <input
              type="search"
              placeholder="Search devotionals..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div className="dev-filters">
            <select
              value={authorFilter}
              onChange={(e) => {
                setAuthorFilter(e.target.value);
                setPage(1);
              }}
            >
              {authors.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
            >
              {[6, 8, 12, 20].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="dev-grid">
        {itemsToShow.map((d) => (
          <motion.div
            key={d.id}
            className="dev-card"
            whileHover={{ y: -5 }}
            onClick={() => setSelected(d)}
          >
            <div className="dev-card-top">
              <h3>{d.title}</h3>
              <span className="dev-date">{formatDate(d.date)}</span>
            </div>

            <p className="dev-excerpt">{d.excerpt}</p>

            <div className="dev-card-bottom">
              <span className="dev-author">{d.author}</span>

              <div className="dev-tags">
                {(d.tags || []).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER + PAGINATION */}
      <div className="dev-footer">
        <div className="dev-count">
          Showing {itemsToShow.length} of {total}
        </div>

        {!loadMoreMode && (
          <div className="dev-pagination">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={p === page ? "active" : ""}
                >
                  {p}
                </button>
              );
            })}

            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="dev-modal-backdrop"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="dev-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>
                ✕
              </button>

              <h2 className="modal-title">{selected.title}</h2>
              <p className="modal-meta">
                {selected.author} • {formatDate(selected.date)}
              </p>

              <pre className="modal-verse">{selected.verse}</pre>

              <div className="modal-content">{selected.content}</div>

              {selected.confession && (
                <div className="modal-confession">
                  <h4>Confession</h4>
                  <p>{selected.confession}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
