import React, { FC } from 'react';
import { Switch } from '../../switch/switch';
import styles from './tariff-card-additional-option.module.scss';
import { TariffCardAdditionalProps } from './tariff-card-additional-option.types';
import { SwitchSize } from '../../switch/switch.types';

const TariffCardAdditionalOption: FC<TariffCardAdditionalProps> = ({
  title,
  subtitle,
  discount,
  onChangeSwith,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <div className={styles.text}>
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
        <div className={styles.discountPrice}>-{discount}%</div>
      </div>
      <Switch onChange={onChangeSwith} size={SwitchSize.LARGE} />
    </div>
  );
};
export default TariffCardAdditionalOption;
