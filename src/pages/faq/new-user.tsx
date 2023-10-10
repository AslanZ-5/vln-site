import React from 'react';
import styles from '@/modules/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqNewUser from '@/modules/faq/new-user';
import { Path } from '@/shared/constants/links';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
  { title: 'Новым абонентам', href: Path.faq.newUser },
];

function FaqNewUserPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Новым абонентам</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqNewUser />
        </div>
      </div>
    </div>
  );
}

export default FaqNewUserPage;
