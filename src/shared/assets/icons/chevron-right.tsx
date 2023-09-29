import React, {FC} from 'react';
import { Props } from './icon.types';

export const ChevronRight: FC<Props> = ({color, className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6.5 6 6-6 6"/>
    </svg>    
  )
}
