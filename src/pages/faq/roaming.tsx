import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqRoaming from '@/modules/pages/faq/roaming';
import { Path } from '@/shared/constants/links';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
  { title: 'Роуминг', href: Path.faq.roaming }
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