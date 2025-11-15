import React from 'react';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

function SignatureGrid({ images = [], id }) {
  return (
    <section className="signature" id={id}>
      <div className="section-heading">
        <p className="eyebrow">Best of the portfolio</p>
        <h2>Six vertical favorites</h2>
      </div>
      <div className="signature__grid">
        {images.filter(Boolean).slice(0, 6).map((publicId) => (
          <figure key={publicId} className="signature__item">
            <img
              src={buildCloudinaryUrl(publicId, { width: 900 })}
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
