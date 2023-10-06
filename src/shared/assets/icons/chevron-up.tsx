import React, { FC } from 'react';
import { Props } from './icon.types';

export const ChevronUp: FC<Props> = ({ color, className }) => {
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
        d='m13.875 13-3.88-3.88L6.115 13a.996.996 0 1 1-1.41-1.41L9.295 7a.996.996 0 0 1 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41-.39.38-1.03.39-1.42 0Z'
      />
    </svg>
  );
};
