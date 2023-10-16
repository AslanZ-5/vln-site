import React from 'react';
import { useRouter } from 'next/router';
import styles from './news-block.module.scss';

import { ArrowRightGray } from '@/shared/assets/svg/index';
import { NewsBlockItems } from '../news-block-items/news-block-items';

export const NewsBlock = () => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/news');
  };

  return (
    <div className={styles.newsBlock}>
      <span className={styles.titleBlock} onClick={handleClick}>
        Новости <ArrowRightGray />
      </span>
      <div className={styles.listNews}>
        <NewsBlockItems
          title='Путешествуете по России? Общайтесь выгодно!'
          date='28.07.2023'
          text='Виртуальная АТС работает просто – звонки поступают в облако, где перенаправляются нужному сотруднику.'
        />
        <NewsBlockItems
          title='Волна работает на территории новых регионов РФ в обычном режиме'
          date='18.07.2023'
          text='Виртуальная АТС работает просто – звонки поступают в облако, где перенаправляются нужному сотруднику.'
        />
        <NewsBlockItems
          title='Ищем тех. специалистов по подключению к интернету'
          date='17.07.2023'
          text='Виртуальная АТС работает просто – звонки поступают в облако, где перенаправляются нужному сотруднику.'
        />
      </div>
    </div>
  );
};
