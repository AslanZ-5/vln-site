import { ChangeEventHandler } from 'react';

export enum RadioSize {
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type RadioProps = {
  name?: string;
  size?: RadioSize;
  className?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
