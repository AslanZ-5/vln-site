import { Button } from '@mantine/core';
import styles from './volnaSale.module.scss';
import cn from 'classnames';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { LINKS } from '@/shared/constants/links';

interface VolnaSaleProps extends HTMLAttributes<HTMLDivElement> {}

export function VolnaSale({ className }: VolnaSaleProps) {
  return (
    <div className={cn(styles.card, className && className)}>
      <div className={styles.headerInfo}>
        <span className={styles.header}>Волна Sale</span>
        <span className={styles.info}>
          Биржа гигабайт, минут и SMS. Есть лишний ресурс?
          Продайте не нужное, купите нужное
        </span>
      </div>
      <Link href={LINKS.VOLNA_SALE}>
        <Button classNames={{ root: styles.button__root }}>Зарабатывай сейчас</Button>
      </Link>
    </div>
  );
}
