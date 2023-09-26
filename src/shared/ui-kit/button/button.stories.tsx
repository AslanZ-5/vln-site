import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import plus from './plus.svg';

const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DemoButton: Story = {
  args: {
    children: 'Button text...',
    purpose: 'primary',
    size: 'm',
    type: 'default',
    state: 'enabled',
  },
};

export const Icon: Story = {
  args: {
    icon: (
      <img
        src={plus}
        style={{
          filter: 'invert(1)',
          width: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    ),
    purpose: 'primary',
    size: 'm',
    type: 'icon',
    state: 'enabled',
  },
};
