import { ChangeEventHandler } from 'react';

export enum SwitchSize {
  DEFAULT = 'default',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type SwitchProps = {
  name?: string;
  size?: SwitchSize;
  className?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
