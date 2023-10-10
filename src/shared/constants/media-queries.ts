import styles from '@/styles/tokens.module.scss';

export const onlyMobile = `(max-width: ${styles.breakpointMobileTablet})`;
export const tablet = `(min-width: ${styles.breakpointTablet})`;
export const tabletOnly = `(min-width: ${styles.breakpointTablet}) and (max-width: ${styles.breakpointTabletDesktop})`;
export const desktop = `(min-width: ${styles.breakpointMax})`;
