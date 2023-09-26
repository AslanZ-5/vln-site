import { ReactNode, MouseEventHandler } from 'react';

export type ButtonSize = 'm' | 's' | 'xs';

export type ButtonPurpose = 'primary' | 'secondary' | 'outlane' | 'flat';

export type ButtonType = 'default' | 'with_icon' | 'icon' | 'inverted';

export type ButtonState = 'enabled' | 'hover' | 'active' | 'load' | 'disabled';

export type ButtonProps = {
  purpose?: string;
  size?: ButtonSize;
  state?: ButtonState;
  type?: ButtonType;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

type ButtonColor = [string, number] | null;

export type ButtonColors = {
  [key in ButtonPurpose as string]: {
    [key in ButtonState as string]: ButtonColor;
  };
};

export type ButtonColorsInverted = {
  [key in ButtonState as string]: ButtonColor;
};
