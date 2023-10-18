import { SegmentedControl, SegmentedControlProps } from '@mantine/core';
import styles from './pills.module.scss';
import { FC } from 'react';
import cn from 'classnames';

export const Pills: FC<SegmentedControlProps> = ({ data, disabled, ...props }) => {
  return (
    <SegmentedControl
      data={data}
      disabled={disabled}
      classNames={{
        root: cn(styles.root, disabled && styles.disabled),
        label: styles.label,
        control: styles.control,
        indicator: styles.indicator,
      }}
      {...props}
    />
  );
};
