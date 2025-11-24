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

function CupcakesPage() {
  const cupcakeImages = folderConfig.cupcakes?.gallery || [];

  const randomizedImages = useMemo(
    () => shuffleImages(cupcakeImages.filter(Boolean)),
    [cupcakeImages],
  );

  return (
    <div className="page holiday-page">
      <header className="holiday-hero">
        <p className="eyebrow">Cupcakes</p>
        <h1>Bright swirls and soft textures</h1>
        
      </header>

      <section className="holiday-grid">
        {randomizedImages.map((publicId) => (
          <figure key={publicId} className="holiday-grid__item">
            <img
              src={buildCloudinaryUrl(publicId, { width: 1400, quality: 'auto:good' })}
              alt="Cupcake photography"
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </div>
  );
}

export default CupcakesPage;
