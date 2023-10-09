import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqDials from '@/modules/pages/faq/dials';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: '/faq' },
  { title: 'Полезные команды', href: '/dials' }
];

function FaqDialsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Полезные команды</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqDials />
        </div>
      </div>
    </div>
  );
}

export default FaqDialsPage;