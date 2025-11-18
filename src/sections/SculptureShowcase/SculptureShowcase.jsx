import React, { useRef, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import "./SculptureShowcase.css";

// Mock data
const sculptureData = {
  features: [
    {
      title: "Dynamic Composition",
      description:
        "Fluid forms that evolve with viewer interaction and environmental factors.",
    },
    {
      title: "Material Innovation",
      description:
        "Combining traditional materials with digital fabrication techniques.",
    },
    {
      title: "Spatial Harmony",
      description:
        "Creating balance between physical presence and negative space.",
    },
  ],
  stats: [
    { value: "50+", label: "Exhibitions" },
    { value: "25", label: "Countries" },
    { value: "3x", label: "Award Winner" },
  ],
};

const SculptureShowcase = () => {
  const sculptureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sculptureRef.current) {
      observer.observe(sculptureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sculpture-showcase" id="resources">
      <div className="container">
        <div className="sculpture-showcase__content">
          {/* Left Column - Visual */}
          <div className="sculpture-showcase__visual">
            <div ref={sculptureRef} className="sculpture-container">
              {/* Main Sculpture */}
              <div className="sculpture">
                <div className="sculpture__base"></div>
                <div className="sculpture__form sculpture__form--1"></div>
                <div className="sculpture__form sculpture__form--2"></div>
                <div className="sculpture__form sculpture__form--3"></div>
                <div className="sculpture__accent"></div>
              </div>

              {/* Floating Elements */}
              <div className="sculpture-elements">
                <div className="sculpture-element sculpture-element--1">
                  <div className="element-glow"></div>
                </div>
                <div className="sculpture-element sculpture-element--2">
                  <div className="element-glow"></div>
                </div>
                <div className="sculpture-element sculpture-element--3">
                  <div className="element-glow"></div>
                </div>
              </div>

              {/* Ambient Light */}
              <div className="sculpture-lighting">
                <div className="light-spot light-spot--1"></div>
                <div className="light-spot light-spot--2"></div>
                <div className="light-spot light-spot--3"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="sculpture-showcase__info">
            <SectionHeader
              title="Organic Forms in Digital Space"
              subtitle="Artistic Expression"
              align="left"
            />

            <p className="sculpture-showcase__description">
              Exploring the intersection of traditional sculpture and digital
              artistry. Each piece represents a harmonious balance between
              mathematical precision and organic flow.
            </p>

            <div className="sculpture-showcase__features">
              {sculptureData.features.map((feature, index) => (
                <div key={index} className="sculpture-feature">
                  <div className="sculpture-feature__icon">
                    <div className="feature-dot"></div>
                  </div>
                  <div className="sculpture-feature__content">
                    <h4 className="sculpture-feature__title">
                      {feature.title}
                    </h4>
                    <p className="sculpture-feature__description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="sculpture-showcase__stats">
              {sculptureData.stats.map((stat, index) => (
                <div key={stat.label} className="sculpture-stat">
                  <div className="sculpture-stat__number">{stat.value}</div>
                  <div className="sculpture-stat__label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="sculpture-showcase__cta">
              <Button variant="primary" size="large" withArrow>
                Explore Gallery
              </Button>
              <Button variant="outline" size="large">
                Commission Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Canvas */}
      <div className="sculpture-showcase__background">
        <div className="background-grid"></div>
        <div className="background-orb background-orb--1"></div>
        <div className="background-orb background-orb--2"></div>
      </div>
    </section>
  );
};

export default SculptureShowcase;
