import "./Carousel.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/carousel1.jpg", // локальные картинки в public
  "/carousel2.jpg",
  "/carousel3.jpg"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length);
  const next = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prev}>&#8592;</button>
      <div className="carousel-image-wrapper">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`carousel-image${idx === current ? " active" : ""}`}
            style={{ display: idx === current ? "block" : "none" }}
          >
            <Image
              src={img}
              alt={`slide-${idx}`}
              fill
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
              style={{
                objectFit: "contain"
              }}
            />
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={next}>&#8594;</button>
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 