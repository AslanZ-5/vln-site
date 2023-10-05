import React from 'react';
import styles from './services-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';

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
        <div>title</div>
        <div>cards</div>
      </div>
    </div>
  );
}

export default ServicesPage;
