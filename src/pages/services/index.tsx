import React from 'react';
import styles from '@/modules/pages/services/styles/services-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import { ServicesCards } from '@/modules/pages/services/first-view/cards';
import { Path, PathLabels } from '@/shared/constants/links';

export const List = [
  { title: PathLabels.main, href: Path.main },
  { title: PathLabels.services.root, href: Path.services.root },
];

function ServicesPage() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Breadcrumbs list={List} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__title}>Услуги</div>
        </div>
        <ServicesCards />
      </div>
    </div>
  );
}

export default ServicesPage;
