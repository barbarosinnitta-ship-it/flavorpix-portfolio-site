export const folderConfig = {
  home: [
    'DSC_3220_lylclt',
    'DSC_3586_m8k3pk',
    'DSC_1000_bwjts5',
    'IMG_9709_xpy4sm',
    'IMG_9736_wtj6jb',
    'DSC_2258_i2ai7h',
  ],
  
  about: [
    'about me/nz1CF698_jingad',
  ],

  cupcakes: [
    'Cupcakes/DSC_3437_bjhyel',
    'Cupcakes/DSC_1114_upsnaw',
    'Cupcakes/DSC_0880_xyfxcv',
  ],

  cookies: [
    'cookies/DSC_1000_ksvham',
    'cookies/DSC_1146_agghlt',
    'cookies/DSC_2988_vkwoiy',
  ],

  drinks: [
    'Drinks/DSC_2466_wwcc89',
    'Drinks/DSC_2652_c1bfdi',
    'Drinks/DSC_2444_ntfkyz',
  ],

  holiday: {
    christmas: [
      'Holiday/Christmas/DSC_4652_ototnd',
      'Holiday/Christmas/DSC_3246_funfnp',
      'Holiday/Christmas/DSC_3117_pwqjvs',
    ],
    halloween: [
      'Holiday/Halloween/DSC_2175_od7cww',
      'Holiday/Halloween/DSC_1951_vwbc1k',
      'Holiday/Halloween/DSC_1919_bgbt4g',
    ],
  },
};

const baseTransformations = ['f_auto', 'q_auto'];

export function buildCloudinaryUrl(publicId, options = {}) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo';
  const transforms = [...baseTransformations];

  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.crop) transforms.push(`c_${options.crop}`);
  if (options.gravity) transforms.push(`g_${options.gravity}`);
  if (options.effect) transforms.push(`e_${options.effect}`);

  const transformationString = transforms.join(',');
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${publicId}`;
}

export function getImagesFromFolder(folder, limit) {
  const images = Array.isArray(folder) ? folder : [];
  if (!limit) return images;
  return images.slice(0, limit);
}
