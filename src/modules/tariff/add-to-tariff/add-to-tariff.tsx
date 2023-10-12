import React from 'react';
import { HomeInternet } from '@/widgets/home-internet';
import { BeautifulNumbers } from '@/widgets/beautiful-numbers/beautiful-numbers';
import styles from './add-to-tariff.module.scss'

export const AddToTariff = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header__title}>Добавьте в тариф</div>
      <HomeInternet />
      <BeautifulNumbers className={styles.beautifulNumbers} />
    </div>
  );
}