import { FC, useContext } from 'react';
import { TabProps } from '../tabs.types';
import { Typography } from '../../typography/typography';
import { TypeContext } from '../tabs.context';
import { volnaTheme as theme } from '../../../constants/theme';
import './tab.css';

export const Tab: FC<TabProps> = ({ value, active, activateTab, children }) => {
  const type = useContext(TypeContext);

  return (
    <button
      className={`storybook-tab--${type}`}
      value={value}
      disabled={active}
      onClick={() => {
        activateTab(value);
      }}
      style={{
        backgroundColor: type === 'pills' && active ? theme.colors.primary[500] : undefined,
        borderBottom: type !== 'pills' && active ? `3px solid ${theme.colors.primary[500]}` : 0,
      }}
    >
      <span>
        {' '}
        {
          <Typography
            lable={true}
            weight='regular'
            size={4}
            color={type === 'pills' && active ? theme.colors.base[0] : 'inherit'}
          >
            {children}
          </Typography>
        }
      </span>
    </button>
  );
};

export default Tab;
