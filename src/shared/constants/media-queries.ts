import styles from '@/styles/tokens.module.scss';

export const MOBILE = styles.breakpointMobile;
export const TABLET = styles.breakpointTablet;
export const TABLET_SM = styles.breakpointTabletSm;
export const DESKTOP = styles.breakpointMax;

export const onlyMobile = `(max-width: ${styles.breakpointMobileTablet})`;
export const tablet = `(min-width: ${styles.breakpointTablet})`;
export const tabletOnly = `(min-width: ${styles.breakpointTablet}) and (max-width: ${styles.breakpointTabletDesktop})`;
export const desktop = `(min-width: ${styles.breakpointMax})`;
