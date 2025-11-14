# Flavorpix portfolio site

Modern React + Vite build for the Flavorpix food photography portfolio. The landing page automatically assembles hero, grid, portrait, and category collage sections directly from Cloudinary folders, and all top-level routes are wired up for Netlify deployment.

## Getting started

```bash
npm install
npm run dev
```

Set the Cloudinary cloud name before running `npm run dev` or building for production:

```bash
export VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

## Updating imagery

Image public IDs live in [`src/data/imageConfig.js`](src/data/imageConfig.js). Each array represents a Cloudinary folder (Home, about me, Cupcakes, cookies, Drinks, Holiday/christmas, Holiday/halloween). Update the arrays with the IDs you want to showcase—no need to touch the components.

Every image URL is generated with `f_auto,q_auto` plus width-specific transformations to keep downloads lean while respecting the natural 3:4 aspect ratio of your vertical photography.
