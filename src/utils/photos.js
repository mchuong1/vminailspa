import { Cloudinary } from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

export const photos = [
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/ShopView.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Pedicure_Chairs.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Reception.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Polish_Station.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Pedicure_Station.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Front.jpg',
  //   width: 1,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Nail_Table.jpg',
  //   width: 1,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Bar_View.jpg',
  //   width: 2,
  //   height: 1,
  // },
  // {
  //   src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531741/VNMiNailSpa/Bar.jpg',
  //   width: 2,
  //   height: 1,
  // },
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
    src: cld.image('VNMiNailSpa/Bar_view_2'),
  }
]

export const smileGirl = cld.image('VNMiNailSpa/SmileGirl');
export const coverEyesGirl = cld.image('VNMiNailSpa/CoverEyesGirl');
export const manicure = cld.image('VNMiNailSpa/Nail_Tables_2');
export const pedicure = cld.image('VNMiNailSpa/Pedicure_01');
export const massage = cld.image('VNMiNailSpa/Bar_view_2');
export const nailBottles = cld.image('VNMiNailSpa/Nail_Bottles');
export const logo = cld.image('VNMINailSpa/MiLogo');