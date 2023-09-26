import { FC, useContext } from 'react';
import { TabsPanelProps } from '../tabs.types';
import { ActiveTabValueContext } from '../tabs.context';
import './tabsPanel.css';

export const TabsPanel: FC<TabsPanelProps> = ({ value, children }) => {
  const { value: activeValue } = useContext(ActiveTabValueContext);

  return <div className={value === activeValue ? 'tab-panel-active' : 'tab-panel'}>{children}</div>;
};

export default TabsPanel;
