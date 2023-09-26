import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Example/TextInput',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Ваше имя',
    placeholder: 'Иван',
  },
};

export const Short: Story = {
  args: {
    placeholder: 'Иван',
    withBorder: true,
  },
};
