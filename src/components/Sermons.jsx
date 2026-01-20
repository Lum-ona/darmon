import { motion } from "framer-motion";
import { Play, Clock, Eye, Share2, Radio } from "lucide-react";
import "./Sermons.css";

const Sermons = () => {
  const sermons = [
    {
      title: "Biblical Fasting & Spiritual Warfare",
      date: "MAR 15, 2024",
      duration: "45:22",
      plays: "15.2K",
      videoId: "Uyb4v1uNomI",
      category: "Apostolic Teaching",
    },
    {
      title: "The Narcissist Demon Manifestation",
      date: "MAR 08, 2024",
      duration: "52:18",
      plays: "12.8K",
      videoId: "_mtF-jmi-tU",
      category: "Prophetic Insight",
    },
    {
      title: "Kingdom Alignment: Before You Let Go",
      date: "MAR 01, 2024",
      duration: "38:45",
      plays: "18.5K",
      videoId: "koSfDwHcb3A",
      category: "Deliverance",
    },
  ];

  return (
    <section id="sermons" className="sermons-section-v3">
      {/* Background Tech Patterns */}
      <div className="tech-grid-overlay" />
      <div className="glow-spotlight" />

      <div className="sermons-container">
        {/* Section Header with Stroke Typography */}
        <header className="sermons-header-v3">
          <motion.div
            className="sermon-badge-v3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Radio size={16} className="pulse-icon" />
            <span>Live Transmissions</span>
          </motion.div>

          <motion.h2
            className="sermon-title-v3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Deeper <span className="stroke-text">Life</span>
            {/* & <br /> */}
            {/* <span className="gold-gradient-text">Prophetic Media</span> */}
          </motion.h2>

          <div className="header-line-decorator" />
        </header>

        {/* Cinematic Grid */}
        <div className="sermons-main-grid-v3">
          {sermons.map((sermon, index) => {
            const thumbnail = `https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`;
            const link = `https://www.youtube.com/watch?v=${sermon.videoId}`;

            return (
              <motion.div
                key={sermon.title}
                className="sermon-card-v3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sermon-link-v3"
                >
                  <div className="sermon-thumb-container">
                    <img src={thumbnail} alt={sermon.title} />
                    <div className="thumb-overlay-v3" />

                    {/* Scanning Bar Animation */}
                    <div className="scanning-bar" />

                    <div className="play-btn-v3">
                      <Play fill="currentColor" size={20} />
                    </div>

                    <div className="sermon-duration-v3">
                      <Clock size={12} /> {sermon.duration}
                    </div>
                  </div>

                  <div className="sermon-content-v3">
                    <div className="sermon-top-meta">
                      <span className="sermon-cat-v3">{sermon.category}</span>
                      <span className="sermon-date-v3">{sermon.date}</span>
                    </div>

                    <h3 className="sermon-heading-v3">{sermon.title}</h3>

                    <div className="sermon-footer-v3">
                      <div className="sermon-plays-v3">
                        <Eye size={14} /> <span>{sermon.plays} VIEWS</span>
                      </div>
                      <button className="sermon-share-v3">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
