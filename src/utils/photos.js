import { Cloudinary } from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

export const photos = [
  {
    // src: cld.image('VNMiNailSpa/ShopView'),
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/ShopView.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Pedicure_Chairs.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Reception.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Polish_Station.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531745/VNMiNailSpa/Pedicure_Station.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Front.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Nail_Table.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531742/VNMiNailSpa/Bar_View.jpg',
    width: 2,
    height: 1,
  },
  {
    src: 'https://res.cloudinary.com/dgpijcm0x/image/upload/v1630531741/VNMiNailSpa/Bar.jpg',
    width: 2,
    height: 1,
  },
];

export const smileGirl = cld.image('VNMiNailSpa/SmileGirl');
export const coverEyesGirl = cld.image('VNMiNailSpa/CoverEyesGirl');
export const manicure = cld.image('VNMiNailSpa/Manicure');
export const pedicure = cld.image('VNMiNailSpa/Pedicure');
export const massage = cld.image('VNMiNailSpa/Massage');
export const nailBottles = cld.image('VNMiNailSpa/Nail_Bottles');