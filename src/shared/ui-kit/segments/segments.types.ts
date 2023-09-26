import { ReactElement, ReactNode } from 'react';

export type SegmentListProps = {
  children?: ReactElement<SegmentProps>[];
};

export type SegmentProps = {
  value: string;
  title?: string;
  active: boolean;
  activateSegment: (id: string) => void;
  children: ReactNode;
};

export type SegmentPanelProps = {
  value: string;
  children: ReactNode;
};

export type SeparatorProps = {
  visible?: boolean;
};

export type SegmentedSwitchProps = {
  children: ReactNode;
};
