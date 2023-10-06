import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs, Search } from '@/shared/ui-kit';
import Cards from '@/modules/pages/faq/cards';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: '/faq' },
];

function FaqPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Вопросы и ответы</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <Search placeholder='Ваш запрос' />
        <div className={styles.grid}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
