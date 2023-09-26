export interface SearchProps {
  options?: string[];
  label?: string;
  placeholder?: string;
  inputId?: string;
  containerWidth?: string;
  value?: string;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  withBorder?: boolean;
  backgroundColor?: string;
  filter?: (str: string) => boolean;
  onSelect?: (str: string) => void;
  onChange?: (str: string) => void;
}
