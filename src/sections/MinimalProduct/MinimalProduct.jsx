import React, { useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./MinimalProduct.css";

const MinimalProduct = () => {
  const chairRef = useRef(null);
  const sectionRef = useRef(null);

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

    if (chairRef.current) {
      observer.observe(chairRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="minimal-product" id="about">
      <div className="container">
        <SectionHeader
          title="Get out arrows well slurly it pleces"
          align="center"
          className="minimal-product__header"
        />

        <div className="minimal-product__content">
          {/* Text Content */}
          <div className="minimal-product__text">
            <div className="minimal-product__features">
              <div className="feature">
                <div className="feature__icon">✨</div>
                <div className="feature__content">
                  <h3 className="feature__title">Minimal Design</h3>
                  <p className="feature__description">
                    Clean, uncluttered aesthetics that focus on essential
                    elements and functionality.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature__icon">🎯</div>
                <div className="feature__content">
                  <h3 className="feature__title">Precision Crafted</h3>
                  <p className="feature__description">
                    Every detail meticulously designed and executed to
                    perfection.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature__icon">🌱</div>
                <div className="feature__content">
                  <h3 className="feature__title">Sustainable</h3>
                  <p className="feature__description">
                    Environmentally conscious materials and production methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="minimal-product__cta">
              <Button variant="primary" size="large" withArrow>
                Learn More
              </Button>
            </div>
          </div>

          {/* Chair Visualization */}
          <div className="minimal-product__visual">
            <div ref={chairRef} className="chair-container">
              {/* Chair Base */}
              <div className="chair">
                <div className="chair__seat"></div>
                <div className="chair__back"></div>
                <div className="chair__legs">
                  <div className="chair__leg"></div>
                  <div className="chair__leg"></div>
                  <div className="chair__leg"></div>
                  <div className="chair__leg"></div>
                </div>
              </div>

              {/* Floating Details */}
              <div className="chair-details">
                <div className="detail detail--1">
                  <div className="detail__dot"></div>
                  <div className="detail__line"></div>
                  <div className="detail__label">Ergonomic Design</div>
                </div>
                <div className="detail detail--2">
                  <div className="detail__dot"></div>
                  <div className="detail__line"></div>
                  <div className="detail__label">Premium Materials</div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="visual-background">
                <div className="bg-shape bg-shape--1"></div>
                <div className="bg-shape bg-shape--2"></div>
                <div className="bg-shape bg-shape--3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalProduct;
