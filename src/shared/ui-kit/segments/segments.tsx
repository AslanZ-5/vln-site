import { FC, useState } from 'react';
import { SegmentedSwitchProps } from './segments.types';
import { Segment } from './segment/segment';
import { SegmentList } from './segmentList/segmentList';
import { SegmentPanel } from './segmentPanel/segmentPanel';
import { ActiveSegmentValueContext } from './segments.context';

const SegmentsComponent: FC<SegmentedSwitchProps> = ({ children }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ActiveSegmentValueContext.Provider value={{ value, setValue }}>
      <div className='segments'>{children}</div>
    </ActiveSegmentValueContext.Provider>
  );
};

export const Segments = Object.assign(SegmentsComponent, {
  List: SegmentList,
  Segment: Segment,
  Panel: SegmentPanel,
});

export default Segments;
