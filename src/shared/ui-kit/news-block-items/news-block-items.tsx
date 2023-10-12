import React, { FC } from 'react';
import styles from './news-block-items.module.scss';

import { NewsBlockProps } from './news-block-items.types';


export const NewsBlockItems: FC<NewsBlockProps> = ({ title, date, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.newsPost}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{date}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
