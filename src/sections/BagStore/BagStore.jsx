import React, { useState } from "react";
import Button from "../../components/Button/Button.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import "./BagStore.css";

// Mock data
const bagProducts = [
  {
    id: 1,
    name: "Canvas Leather DSLR SLR Vintage Camera Messenger Bag",
    description:
      "Handcrafted from premium full-grain leather and durable canvas, this messenger bag combines vintage aesthetics with modern functionality. Perfect for photographers and creatives on the move.",
    price: "289",
    originalPrice: "349",
    colors: ["brown", "black", "tan"],
    sizes: ["s", "m", "l", "xl"],
    features: [
      "Waterproof canvas exterior",
      "Full-grain leather accents",
      "Padded camera compartment",
      '15" laptop sleeve',
      "Lifetime warranty",
    ],
  },
];

const BagStore = () => {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("m");
  const [quantity, setQuantity] = useState(1);

  const product = bagProducts[0];

  return (
    <section className="bag-store" id="pricing">
      <div className="bag-store__container">
        {/* Left Panel - Product Info */}
        <div className="bag-store__info">
          <div className="bag-store__content">
            <SectionHeader
              subtitle="Premium Collection"
              title={product.name}
              align="left"
              variant="light"
            />

            <p className="bag-store__description">{product.description}</p>

            {/* Color Selection */}
            <div className="bag-store__option">
              <label className="bag-store__option-label">Color</label>
              <div className="bag-store__colors">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`bag-store__color-option ${
                      selectedColor === color
                        ? "bag-store__color-option--active"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        color === "brown"
                          ? "#8B4513"
                          : color === "black"
                          ? "#000"
                          : "#D2B48C",
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    <div className="bag-store__color-preview"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bag-store__option">
              <label className="bag-store__option-label">Size</label>
              <div className="bag-store__sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`bag-store__size-option ${
                      selectedSize === size
                        ? "bag-store__size-option--active"
                        : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Price */}
            <div className="bag-store__purchase">
              <div className="bag-store__quantity">
                <label className="bag-store__option-label">Quantity</label>
                <div className="bag-store__quantity-controls">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bag-store__quantity-btn"
                  >
                    -
                  </button>
                  <span className="bag-store__quantity-value">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bag-store__quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bag-store__price">
                <div className="bag-store__current-price">${product.price}</div>
                {product.originalPrice && (
                  <div className="bag-store__original-price">
                    ${product.originalPrice}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bag-store__actions">
              <Button variant="secondary" size="large" withArrow>
                Add to Bag
              </Button>
              <Button variant="outline" size="large">
                Favorite ♡
              </Button>
            </div>

            {/* Features List */}
            <div className="bag-store__features">
              {product.features.map((feature, index) => (
                <div key={index} className="bag-store__feature">
                  <div className="bag-store__feature-icon">✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Lines */}
          <div className="bag-store__lines">
            <div className="bag-store__line"></div>
            <div className="bag-store__line"></div>
            <div className="bag-store__line"></div>
          </div>
        </div>

        {/* Right Panel - Product Visualization */}
        <div className="bag-store__visualization">
          <div className="bag-store__product-showcase">
            {/* Main Bag */}
            <div className="bag-store__main-product">
              <div className="bag-visual">
                <div className="bag-visual__main">
                  <div className="bag-visual__body"></div>
                  <div className="bag-visual__strap"></div>
                  <div className="bag-visual__pocket"></div>
                  <div className="bag-visual__hardware"></div>
                </div>
              </div>
            </div>

            {/* Floating Accessories */}
            <div className="bag-store__accessories">
              <div className="accessory accessory--1">
                <div className="accessory__visual"></div>
                <div className="accessory__name">Camera Lens</div>
              </div>
              <div className="accessory accessory--2">
                <div className="accessory__visual"></div>
                <div className="accessory__name">Tripod</div>
              </div>
              <div className="accessory accessory--3">
                <div className="accessory__visual"></div>
                <div className="accessory__name">Filter Kit</div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="bag-store__visual-bg">
              <div className="visual-bg__shape visual-bg__shape--1"></div>
              <div className="visual-bg__shape visual-bg__shape--2"></div>
              <div className="visual-bg__shape visual-bg__shape--3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagStore;
