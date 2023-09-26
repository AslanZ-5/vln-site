import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

const meta = {
  title: 'Example/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    index: 2,
    pages: 7,
  },
};

export const Long: Story = {
  args: {
    index: 2,
    pages: 20,
  },
};
