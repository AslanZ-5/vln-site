import { ReactNode } from 'react';

export type Side = 'left' | 'right';
export type Position = 'top' | 'side' | 'bottom';

export interface TooltipProps {
  text?: string;
  textColor?: string;
  width?: string;
  backgroundColor?: string;
  side?: Side;
  position?: Position;
  isOpen?: boolean;
  component?: ReactNode;
  children?: ReactNode;
  inverted?: boolean;
}
