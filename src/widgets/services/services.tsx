import styles from './services.module.scss';
import { SERVICES_CONSTANTS } from './constants';
import cn from 'classnames';
import Link from 'next/link';

export const Services = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.card, styles.popular)}>
        <div className={styles.heading}>
          {SERVICES_CONSTANTS.POPULAR}
          <div className={styles.label}>{SERVICES_CONSTANTS.POPULAR_LABEL}</div>
        </div>
        <div className={styles.image}></div>
      </div>
      <Link href={SERVICES_CONSTANTS.MOBILE_HREF} className={cn(styles.card, styles.mobile)}>
        <div className={styles.heading}>
          {SERVICES_CONSTANTS.MOBILE}
          <div className={styles.label}>{SERVICES_CONSTANTS.MOBILE_LABEL}</div>
        </div>
        <div className={styles.image}></div>
      </Link>
      <div className={cn(styles.card, styles.internet)}>
        <div className={styles.heading}>
          {SERVICES_CONSTANTS.INTERNET}
          <div className={styles.label}>{SERVICES_CONSTANTS.INTERNET_LABEL}</div>
        </div>
        <div className={styles.image}></div>
      </div>
      <div className={cn(styles.card, styles.fast)}>
        <div className={styles.heading}>
          {SERVICES_CONSTANTS.FAST}
          <div className={styles.label}>{SERVICES_CONSTANTS.FAST_LABEL}</div>
        </div>
        <div className={styles.image}></div>
      </div>
      <div className={cn(styles.card, styles.special)}>
        <div className={styles.heading}>
          {SERVICES_CONSTANTS.SPECIAL}
          <div className={styles.label}>{SERVICES_CONSTANTS.SPECIAL_LABEL}</div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};
