import React from 'react';
import styles from '@/modules/pages/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import FaqPayment from '@/modules/pages/faq/payment';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: '/faq' },
  { title: 'Оплата и баланс', href: '/payment' }
];

function FaqPaymentPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Оплата и баланс</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.accordeonCommon}>
          <FaqPayment />
        </div>
      </div>
    </div>
  );
}

export default FaqPaymentPage;