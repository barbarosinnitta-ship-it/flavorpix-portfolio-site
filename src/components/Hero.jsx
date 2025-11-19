import React, { useEffect, useMemo, useState } from 'react';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

const SLIDE_INTERVAL_MS = 4000;

function Hero({ title, subtitle, description, ctaLabel, ctaHref, backgroundImage, carouselImages }) {
  const slides = useMemo(() => {
    if (Array.isArray(carouselImages) && carouselImages.length > 0) {
      return carouselImages.map((id) => ({
        id,
        url: buildCloudinaryUrl(id, {
          width: 2400,
          height: 1600,
          crop: 'fill',
          gravity: 'auto',
        }),
      }));
    }

    const fallbackUrl = backgroundImage
      ? buildCloudinaryUrl(backgroundImage, {
          width: 2400,
          height: 1600,
          crop: 'fill',
          gravity: 'auto',
        })
      : null;

    return fallbackUrl ? [{ id: 'single', url: fallbackUrl }] : [];
  }, [backgroundImage, carouselImages]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1.25) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header
      id="hero"
      className="hero"
    >
      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${index === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
            role="img"
            aria-label={title}
          />
        ))}
      </div>
      <div className="hero__scrim" />
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {description && <p className="hero__description">{description}</p>}
        <a className="button" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export default Hero;
