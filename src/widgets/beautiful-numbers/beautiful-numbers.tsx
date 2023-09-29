import React from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import Card from '@/shared/ui-kit/card/card';
import styles from './beautiful-numbers.module.scss';
import { ChevronRight } from '@/shared/assets/icons';
import Link from 'next/link';
import { HOME_INTERNET__CONSTANTS } from '@/widgets/home-internet/constants';

function BeautifulNumbers() {
  const theme = useMantineTheme();

  return (
    <Card className={styles.card} padding={'24px 20px'} radius={24}>
      <Link href={''} className={styles.link}>
        {/* нужно будет добавить ссылку на страницу домашнего интернета*/}
        <span className={styles.link__text}>
          Красивые номера
        </span>
        <ChevronRight className={styles.link__chevron} color={theme.other.colors.base[0]} />
      </Link>
      <div className={styles.content}>
        <div className={styles.foregroundGradient} />
        <div className={styles.description}>
          Эксклюзивные престижные номера для личных и деловых целей
        </div>
        <div className={styles.numbers}>
          <div className={styles.phoneNumber}>
            985 65 35
          </div>
          <div className={styles.phoneNumber}>
            +7 (978) 987-65-43
          </div>
          <div className={styles.phoneNumber}>
            987 66 40
          </div>
        </div>
      </div>
      <Button
        classNames={{
          root: styles.button__root,
        }}
      >
        Купить от 500 руб.
      </Button>
    </Card>
  );
}

export { BeautifulNumbers };
