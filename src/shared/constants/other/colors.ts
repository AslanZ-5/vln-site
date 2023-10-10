import { MantineThemeOther } from '@mantine/core';
import styles from '@/styles/tokens.module.scss';

export const THEME_OTHER_COLORS: MantineThemeOther['colors'] = {
  primary: {
    900: styles.colorPrimary900,
    800: styles.colorPrimary800,
    700: styles.colorPrimary700,
    600: styles.colorPrimary600,
    500: styles.colorPrimary500,
    400: styles.colorPrimary400,
    300: styles.colorPrimary300,
    200: styles.colorPrimary200,
    100: styles.colorPrimary100,
    0: styles.colorPrimary0,
  },
  base: {
    900: styles.colorBase900,
    800: styles.colorBase800,
    700: styles.colorBase700,
    600: styles.colorBase600,
    500: styles.colorBase500,
    400: styles.colorBase400,
    300: styles.colorBase300,
    200: styles.colorBase200,
    100: styles.colorBase100,
    0: styles.colorBase0,
  },
  accept: {
    garden: styles.colorAcceptGarden,
  },
  error: {
    fire: styles.colorErrorFire,
  },
  option: {
    dance: styles.colorOptionDance,
    ice: styles.colorOptionIce,
    lime: styles.colorOptionLime,
    flower: styles.colorOptionFlower,
    berrie: styles.colorOptionBerrie,
    lima: styles.colorOptionLima,
    acai: styles.colorOptionAcai,
    sun: styles.colorOptionSun,
    steel: styles.colorOptionSteel,
    crayola: styles.colorOptionCrayola,
  },
  volna: {
    magenta: {
      0: styles.colorMagenta0,
      100: styles.colorMagenta100,
      200: styles.colorMagenta200,
    },
  },
  black: styles.colorBlack,
};
