import { FC, useState } from 'react';
import { ServiceInfoModal } from '@/modules/services/service-info-modal/service-info-modal';
import { BalanceCheck } from '@/modules/services/balance-check/balance-check';
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
  const [showBalanceCheckModal, setShowBalanceCheckModal] = useState(false);
  const [showServiceInfoModal, setShowServiceInfoModal] = useState(false);

  const handleCloseBalanceCheckModal = () => {
    setShowBalanceCheckModal(false);
  };
  const openBCModal = () => {
    setShowBalanceCheckModal(true);
  };
  const handleCloseServiceInfoModal = () => {
    setShowServiceInfoModal(false);
  };
  const openSIModal = () => {
    setShowServiceInfoModal(true);
  };

  return (
    <div className={cn(styles.card, styles[idx])} onClick={() => onClick && onClick(id)}>
      <div className={styles.title} onClick={openSIModal}>{title}</div>
      <div className={styles.price} onClick={openBCModal}>
        <span className={styles.price__title}>Абонплата</span>
        <div className={styles.price__value}>
          <span className={styles.price__number}>{price + ' ₽'}</span>
          <span className={styles.price__term}>{per || '/мес.'}</span>
        </div>
      </div>
      <ServiceInfoModal opened={showServiceInfoModal} onClose={handleCloseServiceInfoModal} />
      <BalanceCheck opened={showBalanceCheckModal} onClose={handleCloseBalanceCheckModal} />
    </div>
  );
};
