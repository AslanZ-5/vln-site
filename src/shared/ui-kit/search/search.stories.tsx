import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './search';

const meta = {
  title: 'Example/Search',
  component: Search,
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Сделай сам 1', 'Сделай сам 2', 'Сделай сам 3', 'Сделай сам 4'],
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    containerWidth: '310px',
    isError: false,
    errorMessage: 'Название ошибки',
    disabled: false,
    withBorder: false,
  },
};

export const Error: Story = {
  args: {
    options: ['Сделай сам 1', 'Сделай сам 2', 'Сделай сам 3', 'Сделай сам 4'],
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    containerWidth: '310px',
    isError: true,
    errorMessage: 'Название ошибки',
    disabled: false,
    withBorder: false,
    value: 'Сделай',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Выберите тариф',
    placeholder: 'Выберите тариф',
    containerWidth: '310px',
    isError: false,
    errorMessage: 'Название ошибки',
    disabled: true,
    withBorder: false,
  },
};
