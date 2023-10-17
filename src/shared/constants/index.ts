import { MantineThemeOverride } from '@mantine/core';
import { THEME_OTHER } from './other';

export const theme: MantineThemeOverride = {
  fontFamily: 'Roboto',
  other: THEME_OTHER,
  components: {
    Accordion: {
      styles: {
        control: {
          '&:last-of-type': {
            '&[data-accordion-control]': {
              '&[data-active]': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
              }
            }
          }
        }
      }
    }
  }
};
