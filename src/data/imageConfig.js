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
