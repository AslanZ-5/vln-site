import React from 'react';
import { TariffsCarousel } from './tariffs-carousel/tariffs-carousel';

import styles from './tariffs.module.scss';
import { Button, Tabs } from '@mantine/core';

export const Tariffs = () => {
  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>Тарифы</h3>
        <div className={styles.buttonList}>
          <Button
            className={`${styles.tab1} ${activeTab === 'tab1' ? styles.tabActive : ''}`}
            variant="white"
            color="black"
            radius="xl"
            onClick={() => handleTabClick('tab1')}>
            Мобильная связь
          </Button>
          <Button
            className={`${styles.tab2} ${activeTab === 'tab2' ? styles.tabActive : ''}`}
            variant="white"
            color="black"
            radius="xl"
            onClick={() => handleTabClick('tab2')}>
            Домашний интернет
          </Button>
        </div>
      </div>
      <TariffsCarousel />
    </>
  );
};
