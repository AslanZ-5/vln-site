import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqMobileInternet from '@/modules/pages/faq/mobile-internet';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: '/faq' },
  { title: 'Мобильный интернет', href: '/mobile-internet' }
];

function FaqCommonPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Мобильный интернет</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqMobileInternet />
        </div>
      </div>
    </div>
  );
}

export default FaqCommonPage;