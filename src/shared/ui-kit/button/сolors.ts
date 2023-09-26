import { ButtonColors, ButtonColorsInverted } from './button.types';

export const buttonColors: ButtonColors = {
  primary: {
    enabled: ['primary', 500],
    hover: ['primary', 600],
    active: ['primary', 600],
    load: ['primary', 600],
    disabled: ['base', 100],
  },
  secondary: {
    enabled: ['base', 100],
    hover: ['base', 200],
    active: ['base', 300],
    load: ['base', 300],
    disabled: ['base', 200],
  },
  outlane: {
    enabled: null,
    hover: ['primary', 200],
    active: ['primary', 500],
    load: ['primary', 500],
    disabled: ['base', 200],
  },
  flat: {
    enabled: null,
    hover: ['primary', 200],
    active: ['primary', 300],
    load: null,
    disabled: ['base', 200],
  },
};

export const buttonTextColors: ButtonColors = {
  primary: {
    enabled: ['base', 0],
    hover: ['base', 0],
    active: ['base', 0],
    load: ['base', 0],
    disabled: ['base', 500],
  },
  secondary: {
    enabled: ['primary', 500],
    hover: ['primary', 500],
    active: ['primary', 500],
    load: ['primary', 500],
    disabled: ['base', 500],
  },
  outlane: {
    enabled: ['primary', 500],
    hover: ['primary', 500],
    active: ['primary', 600],
    load: ['primary', 500],
    disabled: ['base', 500],
  },
  flat: {
    enabled: ['primary', 500],
    hover: ['primary', 500],
    active: ['primary', 500],
    load: ['primary', 500],
    disabled: ['base', 500],
  },
};

export const buttonColorsInverted: ButtonColorsInverted = {
  enabled: ['primary', 0],
  hover: ['base', 200],
  active: ['base', 300],
  load: ['base', 300],
  disabled: ['base', 200],
};

export const buttonTextColorsInverted: ButtonColorsInverted = {
  enabled: ['base', 900],
  hover: ['base', 900],
  active: ['base', 900],
  load: ['base', 900],
  disabled: ['base', 500],
};
