import React from 'react';
import { Button } from '@mantine/core';
import { tariffInfoMock } from './info-card.mock';
import styles from './info-card.module.scss';

export const InfoCard = () => {

  return (
    <>
      {tariffInfoMock.map((item) => {
        return (
          <div className={styles.container} key={item.id}>
            <div className={styles.infoBlock}>
              <div className={styles.header}>
                <div className={styles.header__title}>{item.title}</div>
                <div className={styles.header__desc}>{item.desc}</div>
              </div>
              <div className={styles.params}>
                {item.params?.map((item) =>
                  <div key={item.id} className={styles.params__row}>
                    <div className={styles.params__icon}>{item.icon}</div>
                    <div className={styles.params__right}>
                      <span className={styles.params__value}>{item.price}</span>
                      <span className={styles.params__desc}>{item.desc}</span>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.price__row}>
                <span className={styles.price__value}>{item.price}</span>
                <span className={styles.price__month}>/мес.</span>
              </div>
              <Button classNames={{ root: styles.button__root }}>
                Купить
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}