import { FC, useState } from 'react';
import { TabsProps } from './tabs.types';
import { Tab } from './tab/tab';
import { TabsList } from './tabsList/tabsList';
import { TabsPanel } from './tabsPanel/tabsPanel';
import { TypeContext, ActiveTabValueContext } from './tabs.context';

const TabsComponent: FC<TabsProps> = ({ type, children }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <TypeContext.Provider value={type || 'small'}>
      <ActiveTabValueContext.Provider value={{ value, setValue }}>
        <div>{children}</div>
      </ActiveTabValueContext.Provider>
    </TypeContext.Provider>
  );
};

export const Tabs = Object.assign(TabsComponent, {
  List: TabsList,
  Tab: Tab,
  Panel: TabsPanel,
});

export default Tabs;
