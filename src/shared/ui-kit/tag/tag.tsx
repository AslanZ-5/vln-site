import { FC } from 'react';
import { TagProps } from './tag.types';
import { Typography } from '../typography/typography';
import './tag.css';
import infoIcon from './info.svg';
import { volnaTheme as theme } from '../../constants/theme';

export const Tag: FC<TagProps> = ({ icon = null, info = false, accentColor, textColor, children }) => {
  return (
    <div
      style={{
        backgroundColor: accentColor || theme.colors.base[100],
        color: theme.colors.base[900],
      }}
      className={'tag'}
    >
      {(icon && !info) || null}
      <span>
        <Typography lable={true} weight={'medium'} size={6} color={textColor || 'inherit'}>
          {children}
        </Typography>
      </span>
      {info && <img src={infoIcon} />}
    </div>
  );
};

export default Tag;
