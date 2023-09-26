import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { CheckboxSize } from './checkbox.types';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: 'Я согласен',
    size: CheckboxSize.MEDIUM,
  },
};
