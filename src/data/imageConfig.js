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
    gallery: [
      'DSC_2516_x2nc6z',
      'DSC_2480_hi7mjp',
      'DSC_2468_p7fa2e',
      'DSC_4663_mmi9a5',
      'DSC_3704_dlgctt',
      'DSC_3602_uqvff3',
      'DSC_3522_gzwzrc',
      'DSC_3501_extwog',
      'DSC_3473_hgc7uh',
      'DSC_3321_usgkn9',
      'DSC_3287_ya6tpy',
      'DSC_3247_wfig9d',
      'DSC_3191_spn1wb',
      'DSC_3157_qdshv2',
      'DSC_3119_y3cjtx',
      'DSC_3096_gvbcjp',
      'DSC_3007_isigrb',
      'DSC_2977_xkazkg',
      'DSC_2975_tn8mx7',
      'DSC_2947_st0vqs',
      'DSC_2933_c8gmas',
      'DSC_2911_dnwzia',
      'DSC_2843_lxe6vd',
      'DSC_2689_e3w8ac',
      'DSC_2728_macwbj',
      'DSC_2612_fxje4q',
      'DSC_2297_hxlu8n',
      'DSC_2279_pu96qp',
      'DSC_2261_axf61u',
      'DSC_2150_qvwsll',
      'DSC_2136_m1odxk',
      'DSC_2128_xdrwmt',
      'DSC_2083_e2e9v0',
      'DSC_1990_ynpkxk',
      'DSC_1963_drq5px',
      'DSC_1956_tywb2z',
      'DSC_1919_bgbt4g',
      'DSC_1898_wivhlw',
      'DSC_1894_abqzfg',
      'DSC_1829_rmsq7o',
      'DSC_1782_aob779',
      'DSC_1757_tegvpt',
      'DSC_1659_rzpfwc',
      'DSC_1591_ywc2gu',
      'DSC_1581_hlhwop',
      'DSC_1544_sdk5pq',
      'DSC_1491_qzlsjk',
      'DSC_1477_kq0pcf',
      'DSC_1345_s2zvmw',
      'DSC_1337_zdc72m',
      'DSC_1291_xoq6jq',
      'DSC_1213_qgrmfo',
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

