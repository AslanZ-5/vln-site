import { Switch } from './switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '111111111',
  },
};

export const Medium: Story = {
  args: {
    label: '2',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    label: '3',
  },
};
