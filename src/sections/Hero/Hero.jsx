import React, { useEffect, useRef } from "react";
import Button from "../../components/Button/Button";
import RatingStars from "../../components/RatingStars/RatingStars";
import "./Hero.css";

const Hero = () => {
  const portraitRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (portraitRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;

        portraitRef.current.style.transform = `
          translateY(-20px) 
          rotate3d(${y / 20}, ${x / 20}, 0, 5deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "20M+", label: "Users" },
    { number: "120+", label: "Countries" },
    { number: "80+", label: "Awards" },
  ];

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__orbs">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </div>
      </div>

      <div className="hero__container container">
        {/* Content Column */}
        <div className="hero__content">
          {/* Rating */}
          <div className="hero__rating">
            <RatingStars rating={4.9} size="large" />
          </div>

          {/* Main Heading */}
          <h1 className="hero__title">
            Crafting Digital
            <span className="hero__title-accent"> Experiences</span>
            That Inspire
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Transforming ideas into extraordinary digital solutions. We create
            immersive experiences that captivate audiences and drive meaningful
            results.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="hero__stats">
            {stats.map((stat, index) => (
              <div key={stat.label} className="hero__stat">
                <div
                  className="hero__stat-number"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  {stat.number}
                </div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__cta">
            <Button variant="secondary" size="large" withArrow>
              View Projects
            </Button>
            <Button variant="outline" size="large">
              Learn More
            </Button>
          </div>
        </div>

        {/* Portrait Column */}
        <div className="hero__portrait">
          <div ref={portraitRef} className="hero__portrait-container">
            {/* Main Portrait */}
            <div className="hero__portrait-image">
              <div className="hero__portrait-placeholder">
                <div className="portrait-graphic">
                  <div className="portrait-shape portrait-shape--1"></div>
                  <div className="portrait-shape portrait-shape--2"></div>
                  <div className="portrait-shape portrait-shape--3"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hero__floating-elements">
              <div className="floating-element floating-element--1">
                <div className="element-icon">🎨</div>
              </div>
              <div className="floating-element floating-element--2">
                <div className="element-icon">💡</div>
              </div>
              <div className="floating-element floating-element--3">
                <div className="element-icon">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="hero__curve">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
