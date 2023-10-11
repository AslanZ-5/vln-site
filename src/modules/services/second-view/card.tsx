import { FC } from 'react';
import styles from './card.module.scss';
import cn from 'classnames';

interface CardProps {
  title: string;
  price: string;
  per?: string;
  id: number;
  onClick?: (id: number) => void;
}

export const Card: FC<CardProps> = ({ title, price, per, id, onClick }) => {
  const idx = 'card__' + String(id % 6);

  return (
    <div className={cn(styles.card, styles[idx])} onClick={() => onClick && onClick(id)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>
        <span className={styles.price__title}>Абонплата</span>
        <div className={styles.price__value}>
          <span className={styles.price__number}>{price}</span>
          <span className={styles.price__term}>{per || '/мес.'}</span>
        </div>
      </div>
    </div>
  );
};
