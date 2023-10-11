import { FC } from 'react';
import { Modal } from '@/shared/ui-kit';
import { BalanceCheckProps } from './balance-check.types';
import Link from 'next/link';
import styles from './balance-check.module.scss';

export const BalanceCheck: FC<BalanceCheckProps> = ({ opened, onClose }) => {
  return (
    <Modal size="md" title="Проверка баланса" opened={opened} onClose={onClose} 
      classNames={{ overlay: styles.modal, title: styles.title, root: styles.root, }}>
      <span className={styles.info}>Для проверки баланса наберите на телефоне команду </span>
      <Link href={''} className={styles.link}> * 100 #</Link>
    </Modal>
  );
};
