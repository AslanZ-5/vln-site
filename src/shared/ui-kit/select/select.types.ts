export interface SelectProps {
  backgroundColor?: string;
  containerWidth?: string;
  disabled?: boolean;
  inputId?: string;
  isOpen?: boolean;
  label?: string;
  name?: string;
  onSelect?: (str: string) => void;
  options?: string[];
  placeholder?: string;
  withBorder?: boolean;
  value?: string;
}
