import { FC } from 'react';
import { volnaTheme as theme } from '../../../constants/theme';
import { SeparatorProps } from '../segments.types';
import './separator.css';

const Separator: FC<SeparatorProps> = ({ visible }) => {
  return (
    <div
      className='separator'
      style={{
        backgroundColor: visible ? theme.colors.base[400] : theme.colors.base[200],
      }}
    />
  );
};

export default Separator;
