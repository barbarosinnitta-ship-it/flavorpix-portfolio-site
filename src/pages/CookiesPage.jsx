import React, { useMemo } from 'react';
import { buildCloudinaryUrl, folderConfig } from '../data/imageConfig.js';

function shuffleImages(images) {
  const list = [...images];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function CookiesPage() {
  const cookieImages = folderConfig.cookies || [];

  const randomizedImages = useMemo(
    () => shuffleImages(cookieImages.filter(Boolean)),
    [cookieImages],
  );

  return (
    <div className="page holiday-page">
      <header className="holiday-hero">
        <p className="eyebrow">Cookies</p>
        <h1>Crumbs, contrast, and clean textures</h1>
        <p className="holiday-hero__lead">Crumbs, contrast, and clean textures.</p>
      </header>

      <section className="holiday-grid">
        {randomizedImages.map((publicId) => (
          <figure key={publicId} className="holiday-grid__item">
            <img
              src={buildCloudinaryUrl(publicId, { width: 1400, quality: 'auto:good' })}
              alt="Cookie photography"
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </div>
  );
}

export default CookiesPage;
