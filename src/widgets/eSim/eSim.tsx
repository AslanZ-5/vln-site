import { Button } from '@mantine/core';
import styles from './eSim.module.scss';
import cn from 'classnames';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { LINKS } from '@/shared/constants/links';

interface EsimProps extends HTMLAttributes<HTMLDivElement> {}

export function Esim({ className }: EsimProps) {
  return (
    <div className={cn(styles.card, className && className)}>
      <div className={styles.headerInfo}>
        <span className={styles.header}>
          Подключи
          <br />
          eSIM
        </span>
        <span className={styles.info}>
          Цифровое решение
          <br />
          классических задач
        </span>
      </div>
      <Link href={LINKS.ESIM}>
        <Button classNames={{ root: styles.button__root }}>Оформить eSIM</Button>
      </Link>
    </div>
  );
}
