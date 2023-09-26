import { FC, useContext } from 'react';
import { SegmentPanelProps } from '../segments.types';
import { ActiveSegmentValueContext } from '../segments.context';
import './segmentPanel.css';

export const SegmentPanel: FC<SegmentPanelProps> = ({ value, children }) => {
  const { value: activeValue } = useContext(ActiveSegmentValueContext);

  return <div className={value === activeValue ? 'segment-panel-active' : 'segment-panel'}>{children}</div>;
};

export default SegmentPanel;
