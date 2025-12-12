import _slides from "../data/slides";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = _slides;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <div className="hero-container">
        <div className="hero-images-container">
          <div className="hero-content">
            <div className="hero-title">
              Warm Premium Dry Foods for the Discerning Tastes
            </div>
            <div className="hero-sub-title">
              Explore our refined selection of seeds, sugars, edible flowers,
              and spices.
            </div>
            <div className="hero-btns-container">
              <Link to="/products">
                <div className="hero-nav-btn primary-btn">Explore Products</div>
              </Link>
              <Link to="/contact">
                <div className="hero-nav-btn secondary-btn">Contact Us</div>
              </Link>
            </div>
          </div>
          {slides.map((slide, index) => {
            return (
              <img
                className={
                  currentSlide === index ? "hero-image active" : "hero-image"
                }
                key={index}
                src={slide.imageUrl}
                alt={slide.caption}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
