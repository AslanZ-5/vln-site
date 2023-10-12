import React from 'react';
import styles from './services.module.scss'
import { Tabs } from './tabs/tabs';

export const Services = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header__title}>Услуги</div>
      <Tabs />
       
    </div>
  );
}