import React from 'react';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

const storySections = [
  {
    text:
      'I completed my MBA and began my career at PwC, excited to dive into the corporate world. But two years in, life took an unexpected turn. I started experiencing sharp pain in the tip of my right index finger, so much that I couldn’t type. Eventually, I had to leave my job to focus on healing.',
    imageId: 'DSC_1527_kpzswn',
    layout: 'right',
  },
  {
    text:
      'Around the same time, the world slowed down as COVID hit. I was newly married, spending most days at home, and naturally found myself returning to the two things I’ve loved always: baking and photography.',
    imageId: 'DSC_3473-Edit-3_jlwuso',
    layout: 'left',
  },
  {
    text:
      'I would bake something simple, style it on my kitchen counter, and capture it the way I saw it, warm, cozy, imperfect, real. I began posting these photos on Instagram just for fun, never imagining anything more.',
    imageId: 'DSC_2007_fc4nst',
    layout: 'bottom',
  },
  {
    text:
      'But slowly, those pictures started reaching people. Bakers, small businesses, and home chefs began reaching out for product photos. What started as a hobby, something that comforted me during a difficult phase, blossomed into Flavorpix, my own food photography journey. Today, I get to share the joy I find in textures, colors, crumbs, and cozy frames. Every photo on this page is a small piece of that journey—food through my lens.',
    imageId: 'DSC_1551_1.59.15_PM_nm2jtm',
    layout: 'right',
  },
];

function AboutPage() {
  return (
    <div className="page about-page">
      <header className="about-hero">
        <p className="eyebrow">My food photography story</p>
        <h1>Meet the artist</h1>
        <p>
          Food photography found me when life slowed down. Here’s how a quiet season, a kitchen counter, and a
          camera turned into Flavorpix.
        </p>
      </header>

      <section className="about-story">
        {storySections.map((section, index) => {
          const imageUrl = buildCloudinaryUrl(section.imageId, {
            width: 1200,
            height: 1600,
            crop: 'fill',
            gravity: 'auto',
          });

          return (
            <article key={section.imageId} className={`about-story__block about-story__block--${section.layout}`}>
              <div className="about-story__text">
                <p>{section.text}</p>
              </div>
              <div className="about-story__media">
                <img src={imageUrl} alt="Priya's food photography" loading="lazy" />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default AboutPage;
