import React, { FC } from 'react';
import styles from './bottomsheet-list.module.scss';
import cn from 'classnames';

interface BottomSheetListProps {
  handler: (s: string) => void;
  active: string;
  list: string[];
}

export const BottomSheetList: FC<BottomSheetListProps> = ({ handler, active, list }) => {
  return (
    <ul className={styles.container}>
      {list.map((item) => (
        <li onClick={() => handler(item)} className={cn(styles.item, active === item && styles.active)}>
          {item}
        </li>
      ))}
    </ul>
  );
};
