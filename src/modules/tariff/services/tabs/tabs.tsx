import React from 'react';
import { Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMobile } from '@/shared/lib/use-mobile';
import { MOBILE, TABLET } from '@/shared/constants/media-queries';
import styles from './tabs.module.scss';

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState('tab1');
  const { isMobile } = useMobile();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Carousel
        slideSize="10%"
        slideGap={2}
        slidesToScroll={1}
        loop={true}
        align="start"
        withControls={!isMobile}
        breakpoints={[
          { maxWidth: MOBILE, slideSize: '5%' },
          { maxWidth: TABLET, slideSize: '50%' },
        ]}
        classNames={{
          root: styles.root,
          container: styles.container,
        }}>

        <Carousel.Slide>
          <Button
            className={`${styles.tab1} ${activeTab === 'tab1' ? styles.tabActive : ''}`}
            variant="white"
            color="black"
            radius="xl"
            onClick={() => handleTabClick('tab1')}>
            Домашний интернет
          </Button></Carousel.Slide>
        <Carousel.Slide><Button
          className={`${styles.tab2} ${activeTab === 'tab2' ? styles.tabActive : ''}`}
          variant="white"
          color="black"
          radius="xl"
          onClick={() => handleTabClick('tab2')}>
          Перенос остатков
        </Button></Carousel.Slide>
        <Carousel.Slide><Button
          className={`${styles.tab1} ${activeTab === 'tab3' ? styles.tabActive : ''}`}
          variant="white"
          color="black"
          radius="xl"
          onClick={() => handleTabClick('tab3')}>
          Конвертация
        </Button></Carousel.Slide>
        <Carousel.Slide><Button
          className={`${styles.tab2} ${activeTab === 'tab4' ? styles.tabActive : ''}`}
          variant="white"
          color="black"
          radius="xl"
          onClick={() => handleTabClick('tab4')}>
          Переход со своим номером (MNP)
        </Button></Carousel.Slide>
        <Carousel.Slide><Button
          className={`${styles.tab1} ${activeTab === 'tab5' ? styles.tabActive : ''}`}
          variant="white"
          color="black"
          radius="xl"
          onClick={() => handleTabClick('tab5')}>
          Мобильное приложение
        </Button></Carousel.Slide>
      </Carousel>


    </>
  );
};
