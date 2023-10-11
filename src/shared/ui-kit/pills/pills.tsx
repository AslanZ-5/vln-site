import { SegmentedControl, SegmentedControlProps } from '@mantine/core';
import styles from './pills.module.scss';
import { FC } from 'react';

export const Pills: FC<SegmentedControlProps> = ({ data }) => {
  return (
    <SegmentedControl
      data={data}
      classNames={{
        root: styles.root,
        label: styles.label,
        control: styles.control,
        indicator: styles.indicator,
      }}
    />
  );
};
