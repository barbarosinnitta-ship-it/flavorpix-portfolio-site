export const folderConfig = {
  home: [
    'Home/DSC_2652_xfs2ot',
    'Home/DSC_0887_glzuid',
    'Home/DSC_1004_oreprt',
    'Home/DSC_2940_arwjvl',
    'Home/DSC_3220_skoex3',
    'Home/DSC_1009_cpkje7',
    'Home/DSC_3433_ywavt3',
  ],
  about: ['about me/DSC_1536_ajawaa', 'about me/DSC_1486_ghvjmt'],
  cupcakes: [
    'Cupcakes/DSC_4011_cupcakes',
    'Cupcakes/DSC_4012_cupcakes',
    'Cupcakes/DSC_4013_cupcakes',
  ],
  cookies: [
    'cookies/DSC_5100_cookie',
    'cookies/DSC_5101_cookie',
    'cookies/DSC_5102_cookie',
  ],
  drinks: [
    'Drinks/DSC_2940_arwjvl',
    'Drinks/DSC_3220_skoex3',
    'Drinks/DSC_1536_ajawaa',
  ],
  holiday: {
    christmas: [
      'Holiday/christmas/DSC_2652_xfs2ot',
      'Holiday/christmas/DSC_3433_ywavt3',
    ],
    halloween: [
      'Holiday/halloween/DSC_2001_halloween',
      'Holiday/halloween/DSC_2002_halloween',
    ],
  },
};

/* ------------------------------
   CLOUDINARY HELPERS
------------------------------ */

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

/**
 * Convert a Cloudinary public ID into a full URL.
 * Applies automatic format + quality for performance.
 */
export function buildCloudinaryUrl(publicId, transformations = 'f_auto,q_auto') {
  if (!publicId || !CLOUDINARY_CLOUD_NAME) return '';
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}

/**
 * Return an array of public IDs from a folder (array).
 */
export function getImagesFromFolder(folder, limit) {
  if (!folder) return [];

  const list = Array.isArray(folder) ? folder : [];
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}

