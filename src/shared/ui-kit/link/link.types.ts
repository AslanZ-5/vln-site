import { CSSProperties } from 'react';

export interface LinkProps {
  light?: boolean;
  dark?: boolean;
  href: string;
  title: string;
  disabled?: boolean;
  style?: CSSProperties;
}
