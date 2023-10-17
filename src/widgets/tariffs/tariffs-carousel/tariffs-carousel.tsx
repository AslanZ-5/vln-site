import React, { FC } from 'react';
import { Carousel } from '@mantine/carousel';
import TariffCard from '@/shared/ui-kit/tariff-card/tariff-card';
import styles from './tariffs-carousel.module.scss';
import { useMobile } from '@/shared/lib/use-mobile';
import { MOBILE, TABLET } from '@/shared/constants/media-queries';
import { TariffCardProps } from '@/shared/ui-kit/tariff-card/tariff-card.types';
import { tariffCardsMock } from '@/shared/constants/mock';

interface ITariffsCarousel {
  activeTab: string;
}

export const TariffsCarousel: FC<ITariffsCarousel> = ({ activeTab }) => {
  const { isMobile } = useMobile();
  const items = activeTab === 'tab1' ? 
    tariffCardsMock.mobileTariffs : tariffCardsMock.homeInternetTariffs;

  return (
    <Carousel
      height={365}
      slideSize="10%"
      slideGap={20}
      slidesToScroll={1}
      loop={true}
      align="start"
      withControls={!isMobile}
      withIndicators
      breakpoints={[
        { maxWidth: MOBILE, slideSize: '5%' },
        { maxWidth: TABLET, slideSize: '50%' },
      ]}
      classNames={{
        root: styles.root,
        container: styles.container,
        indicators: styles.indicators,
        indicator: styles.indicator,
      }}
      controlSize={25}>
      {items.map((obj: TariffCardProps) => (
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
