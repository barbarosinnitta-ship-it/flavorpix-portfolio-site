import React from 'react';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

function SignatureGrid({ images = [], id }) {
  const galleryImages = images.filter(Boolean).slice(0, 6);

  return (
    <section className="signature" id={id}>
      <div className="section-heading">
        <h2 className="eyebrow">Six frames where light meets magic</h2>
      </div>
      <div className="signature__grid">
        {galleryImages.map((publicId) => (
          <figure key={publicId} className="signature__item">
            <img
              src={buildCloudinaryUrl(publicId, {
                width: 900,
                height: 1200,
                crop: 'fill',
                gravity: 'auto',
              })}
              alt="Flavorpix highlight"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default SignatureGrid;
