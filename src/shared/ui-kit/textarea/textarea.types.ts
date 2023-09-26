import { ChangeEventHandler, FocusEventHandler, TextareaHTMLAttributes, RefCallback } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  backgroundColor?: string;
  containerWidth?: string;
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  isError?: boolean;
  label?: string;
  name?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  textareaHeight?: string;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  textareaRef?: RefCallback<HTMLTextAreaElement>;
  value?: string;
  withBorder?: boolean;
}
