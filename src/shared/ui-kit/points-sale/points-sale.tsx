import React, { FC } from 'react';
import styles from './points-sale.module.scss';
import { PointsSaleProps } from './points-sale.type';

export const PoitnsSale: FC<PointsSaleProps> = ({ title, advertising, icon }) => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.list}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.listAdvertising}>
          {advertising.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
