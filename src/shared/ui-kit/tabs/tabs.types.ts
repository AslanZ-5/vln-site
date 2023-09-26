import { ReactNode } from 'react';

export type TabsListProps = {
  children?: ReactNode;
};

export type TabProps = {
  value: string;
  title?: string;
  active: boolean;
  activateTab: (id: string) => void;
  children: ReactNode;
};

export type TabsPanelProps = {
  value: string;
  children: ReactNode;
};

export type TabsProps = {
  type?: string;
  children: ReactNode;
};
