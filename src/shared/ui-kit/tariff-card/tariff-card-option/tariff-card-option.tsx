import React, { FC } from 'react';
import { TariffCardOptionProps } from './tariff-card-option.types';
import styles from './tariff-card-option.module.scss';

const TariffCardOption: FC<TariffCardOptionProps> = ({ icon, value, text }) => {
  return (
    <div className={styles.container}>
      <h4>
        {icon}
        <span className={styles.numberOption}>{value}</span>
        <span className={styles.textOption}>{text}</span>
      </h4>
    </div>
  );
};
export default TariffCardOption;
