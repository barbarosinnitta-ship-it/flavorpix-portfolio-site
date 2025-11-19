import React from 'react';
import Hero from '../components/Hero.jsx';
import SignatureGrid from '../components/SignatureGrid.jsx';
import AboutTeaser from '../components/AboutTeaser.jsx';
import CategoryStrip from '../components/CategoryStrip.jsx';
import { folderConfig, getImagesFromFolder } from '../data/imageConfig.js';

function HomePage() {
  const homeImages = getImagesFromFolder(folderConfig.home);
  const heroImage = homeImages[0];
  const heroCarouselImages = getImagesFromFolder(folderConfig.carousel);
  const signatureImages = (() => {
    const galleryImages = homeImages.slice(1, 7);
    const missingCount = 6 - galleryImages.length;

    if (missingCount > 0 && heroImage) {
      return [...galleryImages, ...Array(missingCount).fill(heroImage)];
    }

    return galleryImages.slice(0, 6);
  })();
  const portraitImage = folderConfig.about?.[0];

  const categories = [
    {
      key: 'holiday',
      title: 'Holiday',
      description: 'Christmas sparkle and Halloween mood',
      to: '/holiday',
      images: [
        ...getImagesFromFolder(folderConfig.holiday?.gallery, 3),
      ],
    },
    {
      key: 'cupcakes',
      title: 'Cupcakes',
      description: 'Bright swirls and soft textures',
      to: '/cupcakes',
      images: getImagesFromFolder(folderConfig.cupcakes?.gallery, 3),
    },
    {
      key: 'cookies',
      title: 'Cookies',
      description: 'Crumbs, contrast, and clean textures',
      to: '/cookies',
      images: getImagesFromFolder(folderConfig.cookies, 3),
    },
    {
      key: 'drinks',
      title: 'Drinks',
      description: 'Seasonal sips, modern tones',
      to: '/drinks',
      images: getImagesFromFolder(folderConfig.drinks, 3),
    },
  ];

  return (
    <div className="page">
      <Hero
        title="Food through my lens"
        subtitle="Celebrating textures, colors, crumbs, and cozy frames in every shot."
        ctaLabel="View portfolio"
        ctaHref="#best-of"
        carouselImages={heroCarouselImages}
        backgroundImage={heroImage}
      />

      <SignatureGrid id="best-of" images={signatureImages} />

      <AboutTeaser
        id="about"
        portraitId={portraitImage}
        eyebrow="Meet the artist"
        heading="My food photography story"
        copy="Peek behind the lens and see how Flavorpix grew from a cozy kitchen ritual into the work I love today."
      />

      <CategoryStrip id="categories" categories={categories} />
    </div>
  );
}

export default HomePage;
