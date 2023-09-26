import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { TabsList } from './tabsList/tabsList';
import { Tab } from './tab/tab';
import { TabsPanel } from './tabsPanel/tabsPanel';

const meta = {
  title: 'Example/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DemoTabs: Story = {
  args: {
    type: 'small',
    children: (
      <>
        <TabsList>
          <Tab value='1' active={true} activateTab={() => {}}>
            Tab 1
          </Tab>
          <Tab value='2' active={false} activateTab={() => {}}>
            Tab 2
          </Tab>
          <Tab value='3' active={false} activateTab={() => {}}>
            Tab 3
          </Tab>
        </TabsList>

        <TabsPanel value='1'>Tab 1 content...</TabsPanel>

        <TabsPanel value='2'>Tab 2 content...</TabsPanel>

        <TabsPanel value='3'>Tab 3 content...</TabsPanel>
      </>
    ),
  },
};
