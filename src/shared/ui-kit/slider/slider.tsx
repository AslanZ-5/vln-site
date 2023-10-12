import React, { FC, ReactNode } from 'react';
import { Slider as MantineSlider, SliderProps as MantineSliderProps } from '@mantine/core';
import styles from './slider.module.scss';

interface SliderProps extends MantineSliderProps {
  rightLabel?: ReactNode;
  leftLabel?: ReactNode;
}

export const Slider: FC<SliderProps> = ({ rightLabel, leftLabel, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <div className={styles.labels__left}>{leftLabel}</div>
        <div className={styles.labels__right}>{rightLabel}</div>
      </div>
      <MantineSlider
        {...props}
        classNames={{
          root: styles.root,
          track: styles.track,
          trackContainer: styles.track__container,
          label: styles.label,
          bar: styles.bar,
          thumb: styles.thumb,
          mark: styles.mark,
          markLabel: styles.mark__label,
          markWrapper: styles.mark__wrapper,
        }}
      />
    </div>
  );
};
