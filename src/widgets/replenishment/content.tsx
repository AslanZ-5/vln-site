import { FC, useState } from 'react';
import { SegmentedControl, Button } from '@mantine/core';
import cn from 'classnames';

import { PhoneInput } from '@/shared/ui-kit';
import { CurrencyInput } from '@/shared/ui-kit';
import { Mir, Visa, VisaBlack, Mastercard, Sbp } from '@/shared/assets/svg';

import { REPLENISHMENT_CONSTANTS } from './constants';
import { ReplenishmentProps } from './replenishment.types';

import styles from './content.module.scss';

export const ReplenishmentContent: FC<ReplenishmentProps> = ({ lightMode, mask, placeholder }) => {
  const [phone, setPhone] = useState('');
  const [currency, setCurrency] = useState('');

  const phoneHandler = (val?: string) => {
    (val || val === '') && setPhone(val);
  };

  const currencyHandler = (val?: string) => {
    (val || val === '') && setCurrency(val);
  };

  return (
    <div className={cn(styles.container, lightMode && styles.light)}>
      <div className={styles.payment}>
        <Mir />
        {lightMode ? <VisaBlack /> : <Visa />}
        <Mastercard />
        <Sbp />
      </div>
      <div className={styles.form}>
        <PhoneInput
          darkBackground={!lightMode}
          changeHandler={(a, b) => phoneHandler(b)}
          clearHandler={() => setPhone('')}
          className={styles.form__phone}
          mask={mask}
          placeholder={placeholder}
        />
        <CurrencyInput
          darkBackground={!lightMode}
          changeHandler={(a, b) => currencyHandler(b)}
          clearHandler={() => setCurrency('')}
          className={styles.form__currency}
        />
        <SegmentedControl
          classNames={{
            root: styles.segment__root,
            control: styles.segment__control,
            label: styles.segment__label,
            indicator: styles.segment__indicator,
          }}
          data={[REPLENISHMENT_CONSTANTS.SEGMENT_CARD, REPLENISHMENT_CONSTANTS.SEGMENT_SBP]}
        />
      </div>
      <div className={styles.button}>
        <Button
          classNames={{
            root: styles.button__root,
          }}
          disabled={(mask ? phone.length !== 7 : phone.length !== 10) || !currency}>
          {REPLENISHMENT_CONSTANTS.BUTTON}
        </Button>
      </div>
    </div>
  );
};
