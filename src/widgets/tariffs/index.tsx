import React from 'react';
import { TariffsCarousel } from './ui/tariffs-carousel/tariffs-carousel';

import styles from './tariffs.module.scss';
import { Tabs } from '@mantine/core';

export const Tariffs = () => {
  return (
    <>
      <div className={styles.header}>
        <h3>Тарифы</h3>
        <Tabs radius="md" variant="pills" defaultValue={'1'}>
          <Tabs.List>
            <Tabs.Tab value="1">Мобильная связь</Tabs.Tab>
            <Tabs.Tab value="2">Домашний интернет</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <TariffsCarousel />
    </>
  );
};
