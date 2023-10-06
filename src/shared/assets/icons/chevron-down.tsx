import React, { FC } from 'react';
import { Props } from './icon.types';

export const ChevronDown: FC<Props> = ({ color, className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
    >
      <path
        fill={color}
        d='m6.125 7 3.88 3.88L13.885 7a.996.996 0 1 1 1.41 1.41L10.705 13a.996.996 0 0 1-1.41 0l-4.59-4.59a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0Z'
      />
    </svg>
  );
};
