import React from 'react';
import styles from '@/modules/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqCommon from '@/modules/faq/common';
import { Path } from '@/shared/constants/links';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
  { title: 'Общие вопросы', href: Path.faq.common },
];

function FaqCommonPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Общие вопросы</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqCommon />
        </div>
      </div>
    </div>
  );
}

export default FaqCommonPage;
