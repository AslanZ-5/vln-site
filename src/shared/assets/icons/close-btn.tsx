import React, {FC} from 'react';
import { Props } from './icon.types';

export const CloseBtn: FC<Props> = ({ color, className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path fill={color} fill-rule="evenodd" d="m10 11.202 4.228 4.228 1.202-1.202L11.202 10l4.228-4.228-1.202-1.202L10 8.798 5.772 4.57 4.57 5.772 8.798 10 4.57 14.228l1.202 1.202L10 11.202Z" clip-rule="evenodd"/>
    </svg>
  )
}


