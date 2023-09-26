import { FC } from 'react';
import { SegmentProps } from '../segments.types';
import { Typography } from '../../typography/typography';
import { volnaTheme as theme } from '../../../constants/theme';
import './segment.css';

export const Segment: FC<SegmentProps> = ({ value, active, activateSegment, children }) => {
  return (
    <button
      className={'segment'}
      value={value}
      disabled={active}
      onClick={() => {
        activateSegment(value);
      }}
      style={{
        backgroundColor: active ? theme.colors.base[0] : theme.colors.base[200],
      }}
    >
      <span>
        {' '}
        {
          <Typography lable={true} weight='regular' size={3}>
            {children}
          </Typography>
        }
      </span>
    </button>
  );
};

export default Segment;
