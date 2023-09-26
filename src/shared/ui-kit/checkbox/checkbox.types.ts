import { ChangeEventHandler } from 'react';

export enum CheckboxSize {
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type CheckboxProps = {
  size?: CheckboxSize;
  className?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
