import { ChangeEvent, InputHTMLAttributes, MutableRefObject } from 'react';

export interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  changeHandler?: (
    value: string,
    unmaskedValue?: string,
    event?: ChangeEvent<HTMLInputElement>,
  ) => void;
  clearHandler?: VoidFunction;
  className?: string;
  containerWidth?: string;
  darkBackground?: boolean;
  errorMessage?: string;
  id?: string;
  isError?: boolean;
  isReady?: (unMaskedValue: string) => void;
  label?: string;
  mask?: string;
  name?: string;
  placeholder?: string;
  ref?: MutableRefObject<HTMLInputElement>;
  value?: string;
}
