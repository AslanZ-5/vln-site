import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqUser from '@/modules/pages/faq/user';
import { Path } from '@/shared/constants/links';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
  { title: 'Личный кабинет', href: Path.faq.user }
];

function FaqUserPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Личный кабинет</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqUser />
        </div>
      </div>
    </div>
  );
}

export default FaqUserPage;