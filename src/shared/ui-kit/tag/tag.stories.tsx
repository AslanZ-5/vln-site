import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const meta = {
  title: 'Example/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DemoTag: Story = {
  args: {
    children: 'Default',
    icon: null,
    info: false,
    accentColor: undefined,
  },
};
