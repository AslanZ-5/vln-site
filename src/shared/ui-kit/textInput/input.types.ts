import { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, RefCallback, StyleHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: StyleHTMLAttributes<HTMLDivElement>;
  disabled?: boolean;
  errorMessageStyle?: StyleHTMLAttributes<HTMLDivElement>;
  errorMessage?: string;
  handleClearInput?: VoidFunction;
  id?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefCallback<HTMLInputElement>;
  inputStyle?: StyleHTMLAttributes<HTMLInputElement>;
  isError?: boolean;
  labelStyle?: StyleHTMLAttributes<HTMLLabelElement>;
  label?: string;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  withBorder?: boolean;
  wrapperStyle?: StyleHTMLAttributes<HTMLDivElement>;
}
