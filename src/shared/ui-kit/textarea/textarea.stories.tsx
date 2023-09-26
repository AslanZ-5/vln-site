import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta = {
  title: 'Example/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Ваше имя',
    placeholder: 'Иван',
    containerWidth: '331px',
  },
};

export const Short: Story = {
  args: {
    placeholder: 'Иван',
    withBorder: true,
    containerWidth: '331px',
  },
};
