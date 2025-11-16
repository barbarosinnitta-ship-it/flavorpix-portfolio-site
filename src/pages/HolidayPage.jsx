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

function HolidayPage() {
  const holidayImages = folderConfig.holiday?.gallery || [];

  const randomizedImages = useMemo(
    () => shuffleImages(holidayImages.filter(Boolean)),
    [holidayImages],
  );

  return (
    <div className="page holiday-page">
      <header className="holiday-hero">
        <p className="eyebrow">Holiday</p>
        <h1>Christmas and Halloween</h1>
        <p className="holiday-hero__lead">A cozy mix of Christmas sparkle and Halloween mood!</p>
      </header>

      <section className="holiday-grid">
        {randomizedImages.map((publicId) => (
          <figure key={publicId} className="holiday-grid__item">
            <img
              src={buildCloudinaryUrl(publicId, { width: 1400, quality: 'auto:good' })}
              alt="Holiday dessert spread"
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </div>
  );
}

export default HolidayPage;
