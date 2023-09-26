import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';
import { RadioSize } from './radio.types';

const meta = {
  title: 'Example/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: 'Mastercard **** 1234',
    size: RadioSize.MEDIUM,
  },
};
