import { PhoneInput } from '@/shared/ui-kit/phone-input';
import { CurrencyInput } from '@/shared/ui-kit/currency-input';
import { Mir, Visa, VisaBlack, Mastercard, Sbp } from '@/shared/assets/svg';
import { SegmentedControl, Button, useMantineTheme } from '@mantine/core';

import styles from './content.module.scss';
import { REFILL_CONSTANTS } from './constants';
import { FC } from 'react';
import { RefillProps } from './refill.types';
import cn from 'classnames';

export const RefilContent:FC<RefillProps> = ({ lightMode }) => {
    const theme = useMantineTheme();

    return (
        <div className={cn(styles.container, lightMode && styles.light)}>
            <div className={styles.payment}>
                <Mir />
                { lightMode ? <VisaBlack /> : <Visa /> }
                <Mastercard />
                <Sbp />
            </div>
            <div className={styles.form}>
                <PhoneInput darkBackground={!lightMode} className={styles.form__phone}/>
                <CurrencyInput darkBackground={!lightMode} className={styles.form__currency}/>
                <SegmentedControl 
                  classNames={{
                    root: styles.segment__root,
                    control: styles.segment__control,
                    label: styles.segment__label,
                    indicator: styles.segment__indicator
                  }}
                  data={[REFILL_CONSTANTS.SEGMENT_CARD, REFILL_CONSTANTS.SEGMENT_SBP]}
                />
            </div>
            <div className={styles.button}>
                <Button 
                  classNames={{
                    root: styles.button__root,
                    label: styles.button__label
                  }}
                >
                    Оплатить
                </Button>
            </div>
        </div>
    )
}