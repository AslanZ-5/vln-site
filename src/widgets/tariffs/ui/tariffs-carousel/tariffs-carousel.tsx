import React, { FC } from 'react';
import { Carousel } from '@mantine/carousel';
import TariffCard from '@/shared/ui-kit/tariff-card/tariff-card';
import { EmailIcon, PhoneIcon, GlobeIcon } from '@/shared/assets/svg';
import styles from './tariffs-carousel.module.scss';

const items = [
  {
    id: 1,
    backgroundImage: '/assets/img/tariff-banners/banner-1.png',
    title: 'Сделай сам',
    newPrice: 300,
    oldPrice: 450,
    additionalInfo: {
      title: 'Домашний интернет',
      subtitle: 'До 1 Гбит/с',
      discount: 30,
    },
    options: [
      {
        icon: <PhoneIcon />,
        value: 300,
        text: 'мин по России',
      },
      {
        icon: <GlobeIcon />,
        value: 10,
        text: 'Гб',
      },
      {
        icon: <EmailIcon />,
        value: 150,
        text: 'SMS',
      },
    ],
  },
  {
    id: 2,
    backgroundImage: '/assets/img/tariff-banners/banner-2.png',
    title: 'Загорай',
    newPrice: 300,
    oldPrice: 450,
    additionalInfo: {
      title: 'Домашний интернет',
      subtitle: 'До 1 Гбит/с',
      discount: 30,
    },
    options: [
      {
        icon: <PhoneIcon />,
        value: 300,
        text: 'мин по России',
      },
      {
        icon: <GlobeIcon />,
        value: 10,
        text: 'Гб',
      },
      {
        icon: <EmailIcon />,
        value: 150,
        text: 'SMS',
      },
    ],
  },
  {
    id: 3,
    backgroundImage: '/assets/img/tariff-banners/banner-3.png',
    title: 'Стартуй',
    newPrice: 200,
    oldPrice: 650,
    options: [
      {
        icon: <PhoneIcon />,
        value: 100,
        text: 'мин по России',
      },
      {
        icon: <GlobeIcon />,
        value: 10,
        text: 'Гб',
      },
      {
        icon: <EmailIcon />,
        value: 50,
        text: 'SMS',
      },
    ],
  },
  {
    id: 4,
    backgroundImage: '/assets/img/tariff-banners/banner-4.png',
    title: 'Могу себе позволить',
    newPrice: 550,
    additionalInfo: {
      title: 'Домашний интернет',
      subtitle: 'До 1 Гбит/с',
      discount: 30,
    },
    options: [
      {
        icon: <PhoneIcon />,
        value: 100,
        text: 'мин по России',
      },
      {
        icon: <EmailIcon />,
        value: 50,
        text: 'SMS',
      },
    ],
  },
  {
    id: 5,
    backgroundImage: '/assets/img/tariff-banners/banner-5.png',
    title: 'Максимальный',
    newPrice: 990,
    options: [
      {
        icon: <PhoneIcon />,
        value: 900,
        text: 'мин по России',
      },
      {
        icon: <EmailIcon />,
        value: 900,
        text: 'SMS',
      },
    ],
  },
  {
    id: 5,
    backgroundImage: '/assets/img/tariff-banners/banner-6.png',
    title: 'Лайт',
    newPrice: 690,
    oldPrice: 850,
    options: [
      {
        icon: <PhoneIcon />,
        value: 150,
        text: 'мин по России',
      },
      {
        icon: <EmailIcon />,
        value: 120,
        text: 'SMS',
      },
    ],
  },
];

export const TariffsCarousel: FC = () => {
  return (
    <Carousel
      height={365}
      slideSize="25%"
      slideGap={20}
      slidesToScroll={1}
      loop={true}
      align="start"
      classNames={{
        root: styles.root,
        container: styles.container,
      }}
      controlSize={32}>
      {items.map((obj) => (
        <Carousel.Slide key={obj.id}>
          <TariffCard
            id={obj.id}
            backgroundImage={obj.backgroundImage}
            title={obj.title}
            options={obj.options}
            newPrice={obj.newPrice}
            oldPrice={obj.oldPrice}
            additionalInfo={obj.additionalInfo}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
