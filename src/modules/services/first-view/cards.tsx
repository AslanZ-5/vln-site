import styles from './cards.module.scss';
import { SERVICES_CONSTANTS } from '../constants';
import cn from 'classnames';
import Link from 'next/link';

export const ServicesCards = () => {
  return (
    <div className={styles.container}>
      {SERVICES_CONSTANTS.map(({ id, path, label, description, name }) => (
        <Link href={path} key={id} className={cn(styles.card, styles[name])}>
          <div className={styles.heading}>
            {label}
            <div className={styles.label}>{description}</div>
          </div>
          <div className={styles.image}></div>
        </Link>
      ))}
    </div>
  );
};
