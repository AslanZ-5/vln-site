import { CSSProperties } from 'react';

export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export type Weight = 'regular' | 'medium';

export interface TypographyProps {
  heading?: boolean;
  lable?: boolean;
  shorttext?: boolean;
  paragraph?: boolean;
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  color?: string;
  style?: CSSProperties;
}
