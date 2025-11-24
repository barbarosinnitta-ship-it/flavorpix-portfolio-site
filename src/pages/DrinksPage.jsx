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

function DrinksPage() {
  const drinkImages = folderConfig.drinks || [];

  const randomizedImages = useMemo(
    () => shuffleImages(drinkImages.filter(Boolean)),
    [drinkImages],
  );

  return (
    <div className="page holiday-page">
      <header className="holiday-hero">
        <p className="eyebrow">Drinks</p>
        <h1>Seasonal sips, modern tones</h1>
       
      </header>

      <section className="holiday-grid">
        {randomizedImages.map((publicId) => (
          <figure key={publicId} className="holiday-grid__item">
            <img
              src={buildCloudinaryUrl(publicId, { width: 1400, quality: 'auto:good' })}
              alt="Drink photography"
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </div>
  );
}

export default DrinksPage;
