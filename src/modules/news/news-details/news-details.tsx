import { FC } from 'react';

import { NewsDetailsProps } from './news-details.types';
import { VkIconMini, YouTubeIconMini } from '@/shared/assets/svg/index';

import styles from './news-details.module.scss';

export const NewsDetails: FC<NewsDetailsProps> = ({ title, date, tag, text, imageUrl }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headerNews}>
        <span className={styles.title}>{title}</span>
        <img src={imageUrl} width={1300} height={356} alt="News poster" />
      </div>
      <div className={styles.newsArticle}>
        <div className={styles.dataTag}>
          <span>{date}</span>
          <div className={styles.pillTag}> {tag}</div>
        </div>
        <div className={styles.article} dangerouslySetInnerHTML={{ __html: text }} />
        <span className={styles.icons}>
          <a href="#">
            <VkIconMini />
          </a>
          <a href="#">
            <YouTubeIconMini />
          </a>
        </span>
      </div>
    </div>
  );
};
