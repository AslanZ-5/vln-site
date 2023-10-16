import React from 'react';
import { archiveMock } from './archive-list.mock';
import { useMobile } from '@/shared/lib/use-mobile';
import styles from './archive-list.module.scss';

export const ArchiveList = () => {
  const { isMobile } = useMobile();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          {!isMobile && <div className={styles.header__title}>Архивные тарифы</div>}
          <div className={styles.header__desc}>Список старых тарифов, не доступных к активации. Вы можете выбрать актуальный тариф в списке выше</div>
        </div>
        {/* поиск тарифа */}
      </div>

      <div className={styles.tariffs}> {archiveMock?.map((item) =>
        <div key={item.id} className={styles.tariffs__col}>
          <div className={styles.tariffs__letter}>{item.letter}</div>

          {item.tariffs?.map((item) =>
            <div key={item.id}>
              <div className={styles.tariffs__link}>{item.label}</div>
            </div>)}
        </div>)}</div>
    </div>
  );
}