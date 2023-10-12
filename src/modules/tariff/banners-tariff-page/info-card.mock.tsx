import { infoType } from './info-card.types';
import { ButtonLoop, GlobeColorIcon, PhoneColorIcon, MessangerIcon } from '@/shared/assets/svg';

export const tariffInfoMock: infoType[] = [
  {
    id: 1,
    title: 'Стартуй',
    desc: 'Тариф предлагает вам широкий спектр возможностей и выгодных условий для комфортного использования своего мобильного телефона.',
    price: '300 ₽',
    params: [
      {
        id: 1,
        price: '10',
        desc: 'Гб',
        icon: <GlobeColorIcon />
      },
      {
        id: 2,
        price: <ButtonLoop />,
        desc: 'соцсети, мессенджеры, игры',
        icon: <MessangerIcon />
      },
      {
        id: 3,
        price: '300',
        desc: 'минут по Крыму и Краснодарскому краю',
        icon: <PhoneColorIcon />
      },
    ]
  }
];
