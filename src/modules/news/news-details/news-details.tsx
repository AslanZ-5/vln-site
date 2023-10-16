import React, { FC } from 'react';
import styles from './news-details.module.scss';
import { NewsDetailsProps } from './news-details.types';
import {  BankIcon, LogoVolna, VkIconMini, YouTubeIconMini } from '@/shared/assets/svg/index';
import {  NewsBlock } from '@/shared/ui-kit/news-block/news-block';
import { PoitnsSale } from '@/shared/ui-kit/points-sale/points-sale';
import { Search } from '@/shared/ui-kit/index';
import { Button } from '@mantine/core';

export const NewsDetails: FC<NewsDetailsProps> = ({ title, date, tag, text, imageUrl }) => {
  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const banks = [
    'заказать красивый номер',
    'выпустить eSIM',
    'восстановить SIM-карту'
  ];
  const office = [
    'приобрести SIM-карту Волна',
    'подать заявку на переход со своим номером к оператору Волна.'
  ];
  
  return (
    <div className={styles.root}>
      <div className={styles.headerNews}>
        <span className={styles.title}>{title}</span>
        <img src={imageUrl} width={1300} height={356} alt="News poster" />
      </div>
      <div className={styles.newsContent}>
        <div className={styles.newsArticle}>
          <div className={styles.dataTag}>
            <span>{date}</span>
            <div className={styles.pillTag}>{tag}</div>
          </div>
          <div className={styles.article} dangerouslySetInnerHTML={{ __html: text }} />
          <span className={styles.icons}>
            <a href="https://vk.com/volnamobile">
              <VkIconMini />
            </a>
            <a href="https://www.youtube.com/channel/UCBE0ytesPsF1BAbiRqMYTJw">
              <YouTubeIconMini />
            </a>
          </span>
          <div className={styles.points}>
            <div className={styles.pointsHeader}>
              <h1 className={styles.pointsTitle}>Точки продаж</h1>
              <div>
                <Button
                  className={`${styles.tab1} ${activeTab === 'tab1' ? styles.tabActive : ''}`}
                  variant="white"
                  color="black"
                  radius="xl"
                  onClick={() => handleTabClick('tab1')}
                >
                  Салоны Волны
                </Button>
                <Button
                  className={`${styles.tab2} ${activeTab === 'tab2' ? styles.tabActive : ''}`}
                  variant="white"
                  color="black"
                  radius="xl"
                  onClick={() => handleTabClick('tab2')}
                >
                  Офисы РНКБ
                </Button>
              </div>
            </div>
            <div className={styles.namePoints}>
              <PoitnsSale title='В салонах связи Волны вы можете' advertising={banks} icon={<LogoVolna />}/>
              <PoitnsSale title='В салонах связи Волны вы можете' advertising={office} icon={<BankIcon />} />
            </div>
          </div>
          <div  className={styles.search}> 
            <Search containerWidth='100%'  placeholder='Поиск салона'/>
          </div>
        </div>
        <NewsBlock />
      </div>
    </div>
  );
};
