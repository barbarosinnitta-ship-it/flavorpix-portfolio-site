import React from 'react';
import { Link } from 'react-router-dom';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

function CategoryStrip({ categories = [], id }) {
  return (
    <section className="category-strip" id={id}>
      <div className="section-heading">
        <p className="eyebrow">Explore by craving</p>
        <h2>Categories</h2>
      </div>
      <div className="category-strip__grid">
        {categories.map((category) => {
          const collageImages = category.images.filter(Boolean).slice(0, 9);

          return (
            <Link to={category.to} key={category.key} className="category-card">
              <div className="category-card__collage">
                {collageImages.map((publicId) => (
                  <img
                    key={publicId}
                    src={buildCloudinaryUrl(publicId, { width: 500 })}
                    alt={`${category.title} collage`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="category-card__body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryStrip;
