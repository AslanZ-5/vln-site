import React from 'react';
import styles from './tariff-advertisingServices.module.scss';
import { TariffAdvertisingServicesProps } from './tariff-advertisingServies.types';

function TariffAdvertisingServices({ title, text, condition }: TariffAdvertisingServicesProps) {
  return (
    <div className={styles.root}>
      <div className={styles.advertisingHeader}>
        <h1 className={styles.advertisingTitle}>{title}</h1>
        <p className={styles.advertisingText}>{text}</p>
      </div>
      <div className={styles.advertisingСondition}>
        <h6 className={styles.title}>Подключение</h6>
        <h3 className={styles.text}>{condition}</h3>
      </div>
    </div>
  );
}

export default TariffAdvertisingServices;
