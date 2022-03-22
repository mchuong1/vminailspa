import { Cloudinary } from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

export const photos = [
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376471/VNMiNailSpa/Check_In.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376474/VNMiNailSpa/Front_bar.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376479/VNMiNailSpa/Bar_view_2.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376481/VNMiNailSpa/Bar_view_.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376487/VNMiNailSpa/Nail_Tables.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376497/VNMiNailSpa/Nail_Tables_2.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376504/VNMiNailSpa/Nails_Table_01.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376509/VNMiNailSpa/Pedicure_01.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376511/VNMiNailSpa/Receiption_01.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1631376512/VNMiNailSpa/Nails_Tables_3.jpg',
    width: 1,
    height: 1,
  }
];

export const carousel = [
  {
    src: cld.image('VNMiNailSpa/Receiption_01'),
  },
  {
    src: cld.image('VNMiNailSpa/Nail_Tables'),
  },
  {
    src: cld.image('VNMiNailSpa/Front_bar'),
  },
  {
    src: cld.image('VNMiNailSpa/Bar_view_2'),
  },
  {
    src: cld.image('VNMiNailSpa/Bar_view_'),
  },
]

export const gallery = [
  {
    src: cld.image('VNMiNailSpa/Pedicure_Workers_side_01'),
    description: 'Customer Service is our TOP PRIORITY.',
  },
  {
    src: cld.image('VNMiNailSpa/Bar_Full_Service_01'),
    description: 'State of the art Facility',
  },
  {
    src: cld.image('VNMiNailSpa/Pedicure_Workers_01'),
    description: 'Industry Leading Talent and Training',
  },
  {
    src: cld.image('VNMiNailSpa/Manicure_Full_Service_01'),
    description: 'Uncompormised Standards',
  }
];

export const smileGirl = cld.image('VNMiNailSpa/SmileGirl');
export const coverEyesGirl = cld.image('VNMiNailSpa/CoverEyesGirl');
export const manicure = cld.image('VNMiNailSpa/Manicure');
export const pedicure = cld.image('VNMiNailSpa/Pedicure');
export const massage = cld.image('VNMiNailSpa/Waxing');
export const nailBottles = cld.image('VNMiNailSpa/Nail_Bottles');
export const logo = cld.image('VNMINailSpa/MiLogo');