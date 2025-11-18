import React, { useState, useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { galleryItems } from "../../utils/data";
import "./GalleryShowcase.css";

const GalleryShowcase = () => {
  const [activeItem, setActiveItem] = useState(0);
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Auto-rotate gallery items
    intervalRef.current = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % galleryItems.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="gallery-showcase" id="work">
      <div className="container">
        <SectionHeader
          title="Immersive Gallery Experience"
          subtitle="Featured Works"
          align="center"
          variant="light"
        />

        <div ref={galleryRef} className="gallery-showcase__content">
          {/* Main Gallery Display */}
          <div className="gallery-display">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item ${
                  index === activeItem ? "gallery-item--active" : ""
                }`}
                style={{ "--item-index": index }}
              >
                <div className="gallery-item__visual">
                  <div className="item-shape item-shape--1"></div>
                  <div className="item-shape item-shape--2"></div>
                  <div className="item-shape item-shape--3"></div>
                  <div className="item-glow"></div>
                </div>

                <div className="gallery-item__content">
                  <h3 className="gallery-item__title">{item.title}</h3>
                  <p className="gallery-item__description">
                    {item.description}
                  </p>
                  <div className="gallery-item__meta">
                    <span className="gallery-item__category">
                      {item.category}
                    </span>
                    <span className="gallery-item__year">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Navigation */}
          <div className="gallery-navigation">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                className={`gallery-nav-item ${
                  index === activeItem ? "gallery-nav-item--active" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="gallery-nav-indicator">
                  <div className="nav-progress"></div>
                </div>
                <span className="gallery-nav-title">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Gallery Controls */}
          <div className="gallery-controls">
            <button
              className="gallery-control gallery-control--prev"
              onClick={() =>
                handleItemClick(
                  (activeItem - 1 + galleryItems.length) % galleryItems.length
                )
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="gallery-control gallery-control--next"
              onClick={() =>
                handleItemClick((activeItem + 1) % galleryItems.length)
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="gallery-cta">
          <Button variant="secondary" size="large" withArrow>
            View Complete Portfolio
          </Button>
          <Button variant="outline" size="large">
            Download Case Study
          </Button>
        </div>
      </div>

      {/* Animated Background */}
      <div className="gallery-showcase__background">
        <div className="gallery-orb gallery-orb--1"></div>
        <div className="gallery-orb gallery-orb--2"></div>
        <div className="gallery-orb gallery-orb--3"></div>
        <div className="gallery-particles"></div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
