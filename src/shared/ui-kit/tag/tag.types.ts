import { ReactNode } from 'react';

export type TagProps = {
  icon?: ReactNode;
  info?: boolean;
  accentColor?: string;
  textColor?: string;
  children?: string;
};
