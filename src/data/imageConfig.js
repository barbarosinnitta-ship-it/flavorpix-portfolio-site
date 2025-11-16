export const folderConfig = {
  home: [
    'DSC_3220_lylclt',
    'DSC_3586_m8k3pk',
    'DSC_1000_bwjts5',
    'IMG_9709_xpy4sm',
    'IMG_9736_wtj6jb',
    'DSC_2258_i2ai7h',
  ],
  carousel: [
    'DSC_1536_mjz6lr',
    'DSC_1486_blbxb9',
    'IMG_9736_ekrgyo',
    '1613036069436_lvaecu',
    '1611821262111_jgy94k',
    '1613383208238_1.59.14_PM_edlt5b',
  ],
  about: ['nz1CF698_jingad'],
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

const FALLBACK_CLOUDINARY_CLOUD_NAME = 'dk2motd7g';
const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || FALLBACK_CLOUDINARY_CLOUD_NAME;

const TRANSFORMATION_KEY_MAP = {
  width: 'w',
  height: 'h',
  crop: 'c',
  gravity: 'g',
  effect: 'e',
  quality: 'q',
  format: 'f',
};

function serializeTransformations(transformations) {
  if (!transformations) {
    return 'f_auto,q_auto';
  }

  if (typeof transformations === 'string') {
    return transformations;
  }

  if (typeof transformations === 'object') {
    const entries = Object.entries(transformations)
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => {
        const cldKey = TRANSFORMATION_KEY_MAP[key] || key;
        return `${cldKey}_${value}`;
      });

    const baseTransforms = [];
    if (!('format' in transformations)) {
      baseTransforms.push('f_auto');
    }
    if (!('quality' in transformations)) {
      baseTransforms.push('q_auto');
    }

    return [...baseTransforms, ...entries].join(',');
  }

  return 'f_auto,q_auto';
}

/**
 * Convert a Cloudinary public ID into a full URL.
 * Applies automatic format + quality for performance.
 */
export function buildCloudinaryUrl(publicId, transformations = 'f_auto,q_auto') {
  if (!publicId) return '';

  if (publicId.startsWith('http')) {
    return publicId;
  }

  if (!CLOUDINARY_CLOUD_NAME) return '';
  const transformationString = serializeTransformations(transformations);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
}

/**
 * Return an array of public IDs from a folder (array).
 */
export function getImagesFromFolder(folder, limit) {
  if (!folder) return [];

  const list = Array.isArray(folder) ? folder : [];
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}

