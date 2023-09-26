import { Children, FC, ReactElement, cloneElement, useContext } from 'react';
import { TabProps, TabsListProps } from '../tabs.types';
import { TypeContext, ActiveTabValueContext } from '../tabs.context';
import { volnaTheme as theme } from '../../../constants/theme';
import './tabsList.css';

export const TabsList: FC<TabsListProps> = ({ children }) => {
  const type = useContext(TypeContext);
  const activeValue = useContext(ActiveTabValueContext);

  const activateTab = (value: string) => {
    activeValue.setValue(value);
  };

  const renderTabs = () => {
    return Children.map(children as ReactElement<TabProps>, (tab: ReactElement<TabProps>) => {
      if (tab) {
        return cloneElement(tab as ReactElement<TabProps>, {
          activateTab,
          active: activeValue.value === tab.props.value,
        });
      } else return null;
    });
  };

  return (
    <div
      className={`storybook-tabs-list--${type}`}
      style={{
        borderBottom: type === 'pills' ? 0 : `1px solid ${theme.colors.base[400]}`,
      }}
    >
      {renderTabs()}
    </div>
  );
};

export default TabsList;
