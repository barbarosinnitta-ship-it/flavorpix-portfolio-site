import React from 'react';
import { Link } from 'react-router-dom';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

function AboutTeaser({ portraitId, eyebrow, heading, copy }) {
  return (
    <section className="about-teaser">
      <div className="about-teaser__media">
        {portraitId ? (
          <Link to="/about" className="about-teaser__portrait">
            <img
              src={buildCloudinaryUrl(portraitId, { width: 900 })}
              alt="Portrait of Priya"
              loading="lazy"
            />
          </Link>
        ) : (
          <div className="about-teaser__placeholder">Portrait coming soon</div>
        )}
      </div>
      <div className="about-teaser__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        <p>{copy}</p>
        <Link to="/about" className="text-link">
          Read my story →
        </Link>
      </div>
    </section>
  );
}

export default AboutTeaser;
