import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqRoaming from '@/modules/pages/faq/roaming';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: '/faq' },
  { title: 'Роуминг', href: '/roaming' }
];

function FaqRoamingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Роуминг</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqRoaming />
        </div>
      </div>
    </div>
  );
}

export default FaqRoamingPage;