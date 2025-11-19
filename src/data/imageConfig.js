export const folderConfig = {
  home: [
    'DSC_1000_bwjts5',
    'DSC_3220_lylclt',
    'DSC_4442_hg1ryk',
    'DSC_2258_i2ai7h',
    'DSC_3586_m8k3pk',
    'DSC_1072_cl4lun',
  ],
  carousel: [
    'DSC_4591_mmyzad',
    'DSC_3437_bjhyel',
    'DSC_1486_blbxb9',
    'IMG_9736_ekrgyo',
    '1613036069436_lvaecu',
    '1611821262111_jgy94k',
    '1613383208238_1.59.14_PM_edlt5b',
  ],
  about: ['nz1CF698_jingad'],
  cupcakes: {
    gallery: [
      'DSC_4412_jtjgxl',
      'DSC_4409_dwozpx',
      'DSC_3437_bjhyel',
      'DSC_3220_uyczah',
      'DSC_2412_ptgezz',
      'DSC_2345_unquuv',
      'DSC_2334_qfkksr',
      'DSC_1995_u9i7qp',
      'DSC_1881_bssam6',
      'DSC_1114_upsnaw',
      'DSC_1072_cl4lun',
      'DSC_1044_orr4pq',
      'DSC_0967_j6abgp',
      'DSC_0908_umcbox',
      'DSC_0887_sp17dg',
      'DSC_0880_xyfxcv',
      'DSC_0756_srqpgx',
      'DSC_0718_kpyjsq',
      'DSC_0265_v6hxbo',
      'DSC_0251_aquhfk',
    ],
  },
  cookies: [
    'DSC_4594_cpydte',
    'DSC_4505_cfe87p',
    'DSC_4591_mmyzad',
    'DSC_4878_jaoolg',
    'DSC_4076_khybxi',
    'DSC_4503_ialbgr',
    'DSC_4442_hg1ryk',
    'DSC_4013_rvi25t',
    'DSC_3968_qzyd0p',
    'DSC_3959_cg4uwf',
    'DSC_3581_pbnh6c',
    'DSC_3399_cvmuof',
    'DSC_3334_hw1wrw',
    'DSC_2988_vkwoiy',
    'DSC_2033_id7shv',
    'DSC_2031_r0r6nn',
    'DSC_1146_agghlt',
    'DSC_1009_oxdkgk',
    'DSC_1004_ebd9sk',
    'DSC_0997_xjtp82',
    'DSC_0990_wvzzaw',
    'DSC_0655_gx4fby',
    'DSC_0398_lcxwbz',
  ],
  drinks: [
    '1612678839601_l1h4gh',
    'DSC_0263_jpmjnz',
    'DSC_2466_wwcc89',
    'DSC_2652_c1bfdi',
    'DSC_2444_ntfkyz',
    'DSC_1587_psh5sf',
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

