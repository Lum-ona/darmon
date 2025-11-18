import React from "react";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import "./FeaturedRooms.css";

// Mock data since we're not importing from utils yet
const featuredRooms = [
  {
    id: 1,
    title: "Vipp Loft",
    description:
      "Modern industrial space with panoramic city views and minimalist design.",
    price: "€1200 / night",
    image: "/assets/rooms/loft.png",
    features: ["120m²", "2 Bedrooms", "City View", "Parking"],
    originalPrice: "€1500",
  },
  {
    id: 2,
    title: "Vipp Shelter",
    description:
      "Secluded forest retreat with floor-to-ceiling windows and natural materials.",
    price: "€900 / night",
    image: "/assets/rooms/shelter.png",
    features: ["80m²", "1 Bedroom", "Forest", "Fireplace"],
    originalPrice: "€1100",
  },
  {
    id: 3,
    title: "Vipp Chimney",
    description:
      "Historic building transformed into contemporary luxury living space.",
    price: "€1600 / night",
    image: "/assets/rooms/chimney.png",
    features: ["150m²", "3 Bedrooms", "Historic", "Garden"],
    originalPrice: "€1800",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="featured-rooms" id="service">
      <div className="container">
        <SectionHeader
          title="Featured Spaces"
          subtitle="Curated Collection"
          align="center"
        />

        <div className="featured-rooms__grid">
          {featuredRooms.map((room, index) => (
            <Card
              key={room.id}
              variant="interactive"
              hoverEffect="scale"
              className={`featured-rooms__card featured-rooms__card--${
                index % 3
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card__image">
                <div className="image-placeholder">
                  <div className="placeholder-shape placeholder-shape--1"></div>
                  <div className="placeholder-shape placeholder-shape--2"></div>
                  <div className="placeholder-shape placeholder-shape--3"></div>
                </div>
              </div>
              <div className="card__body">
                <h3 className="featured-rooms__title">{room.title}</h3>
                <p className="featured-rooms__description">
                  {room.description}
                </p>
                <div className="featured-rooms__features">
                  {room.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="featured-rooms__feature"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card__footer">
                <div className="featured-rooms__footer">
                  <div className="featured-rooms__price">{room.price}</div>
                  <Button variant="outline" size="small">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Background */}
        <div className="featured-rooms__background">
          <div className="featured-rooms__orb featured-rooms__orb--1"></div>
          <div className="featured-rooms__orb featured-rooms__orb--2"></div>
          <div className="featured-rooms__orb featured-rooms__orb--3"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
