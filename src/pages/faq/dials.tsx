import React from 'react';
import styles from '@/modules/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqDials from '@/modules/faq/dials';
import { Path } from '@/shared/constants/links';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
  { title: 'Полезные команды', href: Path.faq.dials },
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
