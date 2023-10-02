export const breakpoints = ['768', '375'];
export const MOBILE = 375;
export const TABLET = 768;
export const TABLET_SM = 1024;
export const DESKTOP = 1440;

export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
