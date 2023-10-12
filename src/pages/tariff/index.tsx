import React from 'react';
import { Breadcrumbs } from '@/shared/ui-kit';
import { Path, PathLabels } from '@/shared/constants/links';
import styles from '@/modules/tariff/styles/tariff-page.module.scss';

export const List = [
  { title: PathLabels.main, href: Path.main },
  { title: PathLabels.tariff.root, href: Path.tariff.start },
];

function TariffPage() {

  return (
    <div className={styles.wrapper}>
      <div>
        <Breadcrumbs list={List} />
      </div>

    </div>
  );
}

export default TariffPage;
