import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';

const meta = {
  title: 'Example/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    options: ['Сделай сам 1', 'Сделай сам 2', 'Сделай сам 3', 'Сделай сам 4'],
    containerWidth: '310px',
  },
};
export const Outlined: Story = {
  args: {
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    options: ['Сделай сам 1', 'Сделай сам 2', 'Сделай сам 3', 'Сделай сам 4'],
    containerWidth: '310px',
    withBorder: true,
  },
};
export const Disabled: Story = {
  args: {
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    containerWidth: '310px',
    disabled: true,
  },
};
