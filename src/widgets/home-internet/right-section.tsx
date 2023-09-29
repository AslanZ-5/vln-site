import { FC, HTMLAttributes } from 'react';
import styles from './right-section.module.scss';
import { CheckboxRec, MinusOctagon } from '@/shared/assets/svg';
import { HOME_INTERNET__CONSTANTS } from './constants';
import cn from 'classnames';

interface RightSectionProps extends HTMLAttributes<HTMLDivElement> {
  possible: boolean;
}

export const RightSection: FC<RightSectionProps> = ({ possible, ...props }) => {
  return (
    <div className={cn(styles.container, possible && styles.possible)} {...props}>
      {possible ? <CheckboxRec /> : <MinusOctagon />}
      <span className={styles.text}>
        {possible ? HOME_INTERNET__CONSTANTS.POSSIBLE : HOME_INTERNET__CONSTANTS.IMPOSSIBLE}
      </span>
    </div>
  );
};
