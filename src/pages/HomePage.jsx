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
  const signatureImages = homeImages.length > 1 ? homeImages.slice(1) : homeImages;
  const portraitImage = folderConfig.about?.[0];

  const categories = [
    {
      key: 'holiday',
      title: 'Holiday',
      description: 'Christmas sparkle and Halloween drama captured in candlelight.',
      to: '/holiday',
      images: [
        ...getImagesFromFolder(folderConfig.holiday?.christmas, 2),
        ...getImagesFromFolder(folderConfig.holiday?.halloween, 1),
      ],
    },
    {
      key: 'cupcakes',
      title: 'Cupcakes',
      description: 'Glossy buttercreams, jewel-like sprinkles, and artisan crumbs.',
      to: '/cupcakes',
      images: getImagesFromFolder(folderConfig.cupcakes, 3),
    },
    {
      key: 'cookies',
      title: 'Cookies',
      description: 'Chewy centers, crisp edges, and hand-piped icing flourishes.',
      to: '/cookies',
      images: getImagesFromFolder(folderConfig.cookies, 3),
    },
    {
      key: 'drinks',
      title: 'Drinks',
      description: 'Velvety pours, sparkling tonics, and moody glassware.',
      to: '/drinks',
      images: getImagesFromFolder(folderConfig.drinks, 3),
    },
  ];

  return (
    <div className="page">
      <Hero
        title="Food through my lens"
        subtitle="Celebrating textures, colors, crumbs, and cozy frames in every shot."
        description="One-woman editorials capturing desserts, drinks, and seasonal rituals in their most intimate light."
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
        heading="I’m Priya — the eye behind Flavorpix"
        copy="From slow-simmered syrups to hand-piped icing, I document the quiet beauty of desserts in the making."
      />

      <CategoryStrip id="categories" categories={categories} />
    </div>
  );
}

export default HomePage;
