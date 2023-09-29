import { FC } from 'react';
import { SegmentedControl, Button } from '@mantine/core';
import cn from 'classnames';

import { PhoneInput } from '@/shared/ui-kit/phone-input';
import { CurrencyInput } from '@/shared/ui-kit/currency-input';
import { Mir, Visa, VisaBlack, Mastercard, Sbp } from '@/shared/assets/svg';

import { REPLENISHMENT_CONSTANTS } from './constants';
import { ReplenishmentProps } from './replenishment.types';

import styles from './content.module.scss';

export const ReplenishmentContent: FC<ReplenishmentProps> = ({ lightMode }) => {
  return (
    <div className={cn(styles.container, lightMode && styles.light)}>
      <div className={styles.payment}>
        <Mir />
        {lightMode ? <VisaBlack /> : <Visa />}
        <Mastercard />
        <Sbp />
      </div>
      <div className={styles.form}>
        <PhoneInput darkBackground={!lightMode} className={styles.form__phone} />
        <CurrencyInput darkBackground={!lightMode} className={styles.form__currency} />
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
            label: styles.button__label,
          }}
        >
          {REPLENISHMENT_CONSTANTS.BUTTON}
        </Button>
      </div>
    </div>
  );
};
