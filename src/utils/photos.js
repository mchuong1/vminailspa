import { Cloudinary } from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

export const photos = [
  {
    src: cld.image('VNMiNailSpa/ShopView'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Pedicure_Chairs'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Reception'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Polish_Station'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Pedicure_Station'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Front'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Nail_Table'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Bar_View'),
    width: 1,
    height: 1,
  },
  {
    src: cld.image('VNMiNailSpa/Bar'),
    width: 1,
    height: 1,
  },
];

export const smileGirl = cld.image('VNMiNailSpa/SmileGirl');
export const coverEyesGirl = cld.image('VNMiNailSpa/CoverEyesGirl');
export const manicure = cld.image('VNMiNailSpa/Manicure');
export const pedicure = cld.image('VNMiNailSpa/Pedicure');
export const massage = cld.image('VNMiNailSpa/Massage');
export const nailBottles = cld.image('VNMiNailSpa/Nail_Bottles');