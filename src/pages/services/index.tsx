import React from 'react';
import styles from './services-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import { Services } from '@/widgets/services';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Услуги', href: '/services' },
];

function ServicesPage() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__title}>Услуги</div>
        </div>
        <Services />
      </div>
    </div>
  );
}

export default ServicesPage;
