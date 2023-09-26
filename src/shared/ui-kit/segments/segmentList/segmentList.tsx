import { Children, FC, ReactElement, cloneElement, useContext } from 'react';
import { SegmentProps, SegmentListProps } from '../segments.types';
import { ActiveSegmentValueContext } from '../segments.context';
import { volnaTheme as theme } from '../../../constants/theme';
import './segmentList.css';
import Separator from '../separator/separator';

export const SegmentList: FC<SegmentListProps> = ({ children }) => {
  const activeValue = useContext(ActiveSegmentValueContext);

  const activateSegment = (value: string) => {
    activeValue.setValue(value);
  };

  const renderSegments = () => {
    return Children.map(children as ReactElement<SegmentProps>[], (segment: ReactElement<SegmentProps>, i: number) => {
      const active = activeValue.value === segment.props.value;
      const hasSeparator =
        children && i !== children.length - 1 && !active && !(activeValue.value === children[i + 1]?.props.value);
      if (segment) {
        return (
          <>
            {cloneElement(segment as ReactElement<SegmentProps>, {
              activateSegment,
              active,
            })}
            {<Separator visible={hasSeparator} />}
          </>
        );
      } else return null;
    });
  };

  return (
    <div
      className={'segments-list'}
      style={{
        backgroundColor: theme.colors.base[200],
      }}
    >
      {renderSegments()}
    </div>
  );
};

export default SegmentList;
